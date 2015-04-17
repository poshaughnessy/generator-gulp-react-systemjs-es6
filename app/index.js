'use strict';

var yeoman = require('yeoman-generator'),
    yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

    constructor: function() {

        yeoman.generators.Base.apply(this, arguments);

        this.option('skip-welcome-message', {
            desc: 'Skips the welcome message',
            type: Boolean
        });

    },

    initializing: function() {
        this.pkg = require('../package.json');
    },

    info: function() {
        this.log(this.yeoman);
        this.log(yosay(
            'I create an ES6 project with Gulp, React and SystemJS.\n'
        ));
    },

    writing: {
        files: function() {
            this.copy('');
            this.copy('gulpfile.js');
            this.template('package.json');
            this.template('README.md');
            this.template('server.js');
            this.template('runServer.js');
        },
        directories: function() {
            this.directory('src');
        }
    }
    ,
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }

});