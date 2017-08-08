/*
// To load this framework, replace the onRun method in your script.cocoscript

@import 'lib_MD5.framework/lib_MD5.js'

var onRun = function(context) {
   var obj = lib_MD5.alloc().init()
   var uppercase = obj.uppercaseString("hello world")

   log(uppercase);
   context.document.showMessage(uppercase);
}
*/

var lib_MD5_FrameworkPath = lib_MD5_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
var lib_MD5_Log = lib_MD5_Log || log;
(function() {
 var mocha = Mocha.sharedRuntime();
 var frameworkName = "lib_MD5";
 var directory = lib_MD5_FrameworkPath;
 if (mocha.valueForKey(frameworkName)) {
lib_MD5_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
 return true;
 } else if ([mocha loadFrameworkWithName:frameworkName inDirectory:directory]) {
 lib_MD5_Log("✅ loadFramework: `" + frameworkName + "` success!");
 mocha.setValue_forKey_(true, frameworkName);
 return true;
 } else {
 lib_MD5_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define lib_MD5_FrameworkPath if you're trying to @import in a custom plugin");
 return false;
 }
 })();
