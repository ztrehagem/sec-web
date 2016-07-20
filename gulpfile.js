var Resource = require('./gulp-template/resource.js');
var GulpTask = require('./gulp-template/gulp-task.js');

Resource.add('sass', Resource.defaults.sass());
Resource.add('html', Resource.defaults.html());

['main', 'editor'].forEach(function(moduleName) {
  Resource.add('js', new Resource.Builder()
    .src('js/' + moduleName + '/*.js')
    .src('js/' + moduleName + '/*/**/*.js')
    .dest('js/')
    .concat(true)
    .destfile('app.' + moduleName + '.js')
  );
});

GulpTask.defineDefaults();
