//<%= ngapp %> to add text in file
'use strict';
var generator = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    includes = function (ary, lib) {
        var val = ary.indexOf(lib);

        return val > -1;
    };

module.exports = generator.extend({
    constructor: function(){
        generator.apply(this, arguments);
        
        this.includes = includes;
        // this.argument('appname', { type: String, required: true });
        // this.appname = _.kebabCase(this.appname);
        
    },  
    initializing: function(){
    },
    prompting: function(){
        var self = this;

        this.log(yosay('Welcome to ' + 
            chalk.yellow('React Vanilla') + ' generator!'));
            
        //var done = this.async();
        return this.prompt([{
            type: 'input',
            name: 'projectName',
            message: 'Provide project name',
            default: 'siteApp'
        },
        {
            type: 'checkbox',
            name: 'jslibs',
            message: 'Which JS libraries would you like to include?',
            choices: [
                {
                    name: 'jQuery',
                    value: 'jquery',
                    checked: false
                },
                {
                    name: 'lodash',
                    value: 'lodash',
                    checked: false 
                },
                {
                    name: 'Moment.js',
                    value: 'momentjs',
                    checked: false
                },
                {
                    name: 'pd-spUtil.js',
                    value: 'pdsputil',
                    checked: false
                },
                {
                    name: 'pd-spServerAjax.js',
                    value: 'pdspserverajax',
                    checked: false
                },
                {
                    name: 'pd-spServerJsom.js',
                    value: 'spserverjsom',
                    checked: false
                },
                {
                    name: 'pd-appUtil.js',
                    value: 'pdapputil',
                    checked: false
                }
            ]
        }]).then(function(answers){
            self.log(answers);
            self.projectName = answers.projectName;
            //self.config.set('appname', answers.projectName);
            // self.config.save();
            
            self.includeJquery = self.includes(answers.jslibs, 'jquery');
            self.includeLodash = self.includes(answers.jslibs, 'lodash');
            self.includeMoment = self.includes(answers.jslibs, 'momentjs');             
            self.includesputil = self.includes(answers.jslibs, 'pdsputil');             
            self.includespserverajax = self.includes(answers.jslibs, 'pdspserverajax');             
            self.includespserverjsom = self.includes(answers.jslibs, 'pdspserverjson');             
            self.includeapputil = self.includes(answers.jslibs, 'pdapputil');             
            //done(); 
        });
            
    },
    configuring: function(){
    },
    writing: {
        packageJSON: function(){
            var packageFile = {
                name: this.projectName,
                version: "1.0.0",
                description: this.desc,
                main: "app.js",
                scripts: {
                    test: "echo \"Error: no test specified\" && exit 1"
                },
                author: this.author,
                license: "ISC",
                dependencies: {},
                devDependencies: {}
            };

            //dependencies
            packageFile.dependencies.react = 'latest';
            packageFile.dependencies['react-dom'] = 'latest';
            packageFile.dependencies['prop-types'] = 'latest';
            packageFile.dependencies['react-router'] = 'latest';
            packageFile.dependencies['redux'] = 'latest';
            packageFile.dependencies['react-redux'] = 'latest';
            packageFile.dependencies['react-router-redux'] = 'latest';
            packageFile.dependencies['react-thunk'] = 'latest';
            if(this.includeJquery) {packageFile.dependencies["jquery"] = "latest";}
            if(this.includeLodash) {packageFile.dependencies["lodash"] = "latest";}
            if(this.includeMoment) {packageFile.dependencies["moment"] = "latest";}
            if(this.includesputil) {packageFile.dependencies["pd-sputil"] = "latest";}
            if(this.includespserverajax) {packageFile.dependencies["pd-spserverajax"] = "latest";}
            if(this.includespserverjsom) {packageFile.dependencies["pd-spserverjsom"] = "latest";}
            if(this.includeapputil) {packageFile.dependencies["pd-apputil"] = "latest";}
            
            //devDependencies
            packageFile.devDependencies["webpack"] = "latest";
            packageFile.devDependencies["css-loader"] = "latest";
            packageFile.devDependencies["style-loader"] = "latest";
            packageFile.devDependencies["babel-core"] = "latest";
            packageFile.devDependencies["babel-loader"] = "latest";
            packageFile.devDependencies["babel-preset-es2015"] = "latest";
            packageFile.devDependencies["babel-preset-stage-0"] = "latest"
            packageFile.devDependencies["babel-preset-react"] = "latest";
            packageFile.devDependencies["gulp"] = "latest";
            packageFile.devDependencies["gulp-util"] = "latest";
            packageFile.devDependencies["gulp-spsave"] = "latest";
            packageFile.devDependencies["gulp-connect"] = "latest";
            packageFile.devDependencies["eslint"] = "latest";
            packageFile.devDependencies["eslint-plugin-react"] = "latest";

            this.fs.writeJSON(
                this.destinationPath('package.json'),
                packageFile
            );
        },
        gulpfile: function(){
            this.fs.copy(
                this.templatePath('_gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
            this.fs.copy(
                this.templatePath('_gulp.config.js'),
                this.destinationPath('gulp.config.js')
            );
        },
        appStaticFiles: function(){
            // this.copy('_favicon.ico', 'src/favicon.ico');
            this.fs.copy(
                this.templatePath('.eslintrc.json'),
                this.destinationPath('.eslintrc.json')
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
            this.fs.copy(
                this.templatePath('babelrc'),
                this.destinationPath('.babelrc')
            );
            this.fs.copy(
                this.templatePath('webpack.config.js'),
                this.destinationPath('webpack.config.js')
            );
        },
        scripts: function(){
            this.fs.copyTpl(
                this.templatePath('app/scripts/_app.js'),
                this.destinationPath('src/scripts/app.js'),
                {
                    projectName: this.projectName
                    //app: this.config.get('ngappname')
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/scripts/components/_components.jsx'),
                this.destinationPath('src/scripts/components/components.jsx'),
                {
                    projectName: this.projectName
                    //app: this.config.get('ngappname')
                }
            );
        },
        styleSheets: function() {
            this.fs.copyTpl(
                this.templatePath('app/styleSheets/_main.css'),
                this.destinationPath('src/styleSheets/main.css'),
                {
                    projectName: this.projectName
                    //app: this.config.get('ngappname')
                }
            );
        },
        html: function(){
            this.fs.copyTpl(
                this.templatePath('app/_index.html'),
                this.destinationPath('src/index.html'),
                {
                    projectName: this.projectName
                }
            );
        }
    },
    conflicts: function(){
    },
    install: function(){
        //this.bowerInstall();
        this.npmInstall();
    },
    end: function(){
        this.log(chalk.yellow.bold('Installation successful!'));
    }
});