if ('undefined' == typeof APPROOT) { APPROOT = __dirname; }

require('./server/index.js').run();