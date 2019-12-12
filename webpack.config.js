const path = require('path');
module.exports = {
    entry: {
        index: ['./js/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./'),
    }
};