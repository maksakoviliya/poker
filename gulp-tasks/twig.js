'use strict';

let twig = require('gulp-twig'),
    fs = require('fs');


module.exports = function () {
    var data = this.opts.src.views.data || {};
    return this.gulp.src(this.opts.src.views.path + "/" + this.opts.argv.view)
        .pipe(twig({
            data: JSON.parse(fs.readFileSync(data)),
            functions: [
                {
                    name: 'assets',
                    func: function (url) {
                        return ((data.assets || '') + url).replace(/\/+/g, '/').replace(/^\//, '');
                    }
                }
            ],
        }))
        .pipe(this.gulp.dest(this.opts.dist));
};
