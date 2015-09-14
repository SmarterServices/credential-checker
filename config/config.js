var config = {};

 config.rules = [
    {
        name : 'AWS Key',
        pattern : /('|")[A-Z0-9]{20}('|")/
    },
    {
        name : 'AWS Secret',
        pattern : /('|")[A-Za-z0-9/+=]{40}('|")/
    },
    {
        name : 'AWS Keypair',
        pattern : /-----BEGIN RSA PRIVATE KEY-----/
    },
    {
         name : 'Password',
         pattern : /(\.|\s)((p|P)(a|A)(s|S)(s|S)(w|W)(o|O)(r|R)(d|D))(\s*?)(:|=)(\s*?)("|')(.*)("|')/
    },
     {
         name : 'ApiKey',
         pattern : /(\.|\s)((a|A)(p|P)(i|I)(k|K)(e|E)(y|Y))(\s*?)(:|=)(\s*?)("|')(.*)("|')/
     },
     {
         name : 'Api_key',
         pattern : /(\.|\s)((a|A)(p|P)(i|I)_(k|K)(e|E)(y|Y))(\s*?)(:|=)(\s*?)("|')(.*)("|')/
     },
     {
         name : 'key',
         pattern : /(\.|\s)((k|K)(e|E)(y|Y))(\s*?)(:|=)(\s*?)("|')(.*)("|')/
     },
     {
         name : 'Secret',
         pattern : /(\.|\s)((s|S)(e|E)(c|C)(r|R)(e|E)(t|T))(\s*?)(:|=)(\s*?)("|')(.*)("|')/
     },
     {
         name : 'auth_pass',
         pattern : /(\.|\s)((a|A)(u|U)(t|T)_(p|P)(a|A)(s|S)(s|S))(\s*?)(:|=)(\s*?)("|')(.*)("|')/
     }
];

config.start =  __dirname + '/../';
config.exclude_dirs = ['.idea','.git','node_modules', 'test', 'lib','config'];

module.exports = config;

/*
 password
 apikey
 api_key
 key
 secret
 auth_pass


 */
