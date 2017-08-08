var lib_MD5_FrameworkPath = lib_MD5_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
var lib_MD5_Log = lib_MD5_Log || log;
(function() {
  var mocha = Mocha.sharedRuntime();
  var frameworkName = "lib_MD5";
  var directory = lib_MD5_FrameworkPath;
  if (mocha.valueForKey(frameworkName)) {
    lib_MD5_Log(" loadFramework: `" + frameworkName + "` already loaded.");
    return true;
  }
  else if ([mocha loadFrameworkWithName:frameworkName inDirectory:directory]) {
    lib_MD5_Log("loadFramework: `" + frameworkName + "` success!");
    mocha.setValue_forKey_(true, frameworkName);
    return true;
  } else {
    lib_MD5_Log("loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define lib_MD5_FrameworkPath if you're trying to @import in a custom plugin");
    return false;
  }
})();
