var createTemplateResouces = require('./gulp-template/resources.js');
var defineTemplateTasks = require('./gulp-template/tasks.js');

var assetsDir = 'resources/assets/';
var destDir = 'public/';

var resources = createTemplateResouces(assetsDir, destDir);

!function setJsResources() {
  var jsModuleNames = ['main','editor'];

  resources.js = [];

  jsModuleNames.forEach(function(moduleName) {
    resources.js.push({
      src: [
        assetsDir + 'js/' + moduleName + '/*.js',
        assetsDir + 'js/' + moduleName + '/*/**/*.js'
      ],
      dest: destDir + 'js/',
      concat: true,
      destfile: 'app.' + moduleName + '.js'
    });
  });
}();

defineTemplateTasks(resources);
