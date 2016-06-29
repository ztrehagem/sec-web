var createTemplateResouces = require('./gulp-template/resources.js');
var defineTemplateTasks = require('./gulp-template/tasks.js');

var resources = createTemplateResouces();
defineTemplateTasks(resources);
