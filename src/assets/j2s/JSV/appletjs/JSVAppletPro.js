Clazz.declarePackage("JSV.appletjs");
Clazz.load(["JSV.appletjs.JSVApplet"], "JSV.appletjs.JSVAppletPro", ["JSV.app.JSVAppPro"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.app0 = null;
Clazz.instantialize(this, arguments);}, JSV.appletjs, "JSVAppletPro", JSV.appletjs.JSVApplet);
Clazz.overrideMethod(c$, "init", 
function(){
this.app =  new JSV.app.JSVAppPro(this, false);
this.initViewer();
});
Clazz.overrideMethod(c$, "isPro", 
function(){
return true;
});
Clazz.defineMethod(c$, "getAppletInfo", 
function(){
return Clazz.superCall(this, JSV.appletjs.JSVAppletPro, "getAppletInfo", []) + " (PRO)";
});
Clazz.overrideMethod(c$, "script", 
function(script){
this.runScript(script);
}, "~S");
Clazz.overrideMethod(c$, "doExitJmol", 
function(){
this.app0.setVisible(true);
this.app = this.app0;
});
});
;//5.0.1-v7 Wed Apr 02 04:50:42 CDT 2025
