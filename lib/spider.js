var dir = require('node-dir');
var config = require('../config/config');
var results = [];
var exclude_dirs = ['.idea','node_modules', 'test', 'lib','config'];

// display contents of files in this script's directory
dir.readFiles(config.start,
    {
        excludeDir: config.exclude_dirs
    },
    function(err, content, file, next) {
        if (err) throw err;
        var i;
        for(i=0; i < config.rules.length; i++){
            var rule = config.rules[i];
            var key_lookup = content.match(rule.pattern);

            if(key_lookup && key_lookup.length){

                results.push({
                    rule: rule.name,
                    file: file,
                    content: key_lookup[0]
                });
            }
        }
        next();
    },
    function(err, files){
        if (err) throw err;
        console.dir(results);
    });