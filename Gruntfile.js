// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
    



module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
 
        watch:{
            files:['public/**','server/**','app/**'],
            tasks:''
        },
            
    });
 
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    };


module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
 
        watch:{
            options:{livereload:true},
            files:['public/**','server/**','app/**'],
            tasks:[]
        },
        express:{
            all:{
                options:{
                    port:3000,
                    hostname:'localhost',
                    bases:['./app'],
                    livereload:true 
                }
            }
        }
    });

 require('./app/routes')(app); // configure our routes

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');    
    grunt.registerTask('server',['express','watch']);
 
    }; 
