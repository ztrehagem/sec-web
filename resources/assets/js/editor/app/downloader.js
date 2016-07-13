modules.app

.service('downloader', ['$window', function($window) {
  this.create = function(filename, dataGetterFn) {
    var a = $window.document.createElement("a");
    $window.document.body.appendChild(a);
    a.style = "display: none";
    return function () {
        var blob = new Blob([dataGetterFn()], {type: "octet/stream"});
        var url = $window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        $window.URL.revokeObjectURL(url);
    };
  };
}]);
