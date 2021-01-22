gdjs.ModeCode = {};
gdjs.ModeCode.GDfondObjects1= [];
gdjs.ModeCode.GDfondObjects2= [];
gdjs.ModeCode.GDsolObjects1= [];
gdjs.ModeCode.GDsolObjects2= [];
gdjs.ModeCode.GDmodeObjects1= [];
gdjs.ModeCode.GDmodeObjects2= [];
gdjs.ModeCode.GDandroidObjects1= [];
gdjs.ModeCode.GDandroidObjects2= [];
gdjs.ModeCode.GDiphoneObjects1= [];
gdjs.ModeCode.GDiphoneObjects2= [];
gdjs.ModeCode.GDordiObjects1= [];
gdjs.ModeCode.GDordiObjects2= [];

gdjs.ModeCode.conditionTrue_0 = {val:false};
gdjs.ModeCode.condition0IsTrue_0 = {val:false};
gdjs.ModeCode.condition1IsTrue_0 = {val:false};
gdjs.ModeCode.condition2IsTrue_0 = {val:false};


gdjs.ModeCode.mapOfGDgdjs_46ModeCode_46GDandroidObjects1Objects = Hashtable.newFrom({"android": gdjs.ModeCode.GDandroidObjects1});gdjs.ModeCode.mapOfGDgdjs_46ModeCode_46GDiphoneObjects1Objects = Hashtable.newFrom({"iphone": gdjs.ModeCode.GDiphoneObjects1});gdjs.ModeCode.mapOfGDgdjs_46ModeCode_46GDordiObjects1Objects = Hashtable.newFrom({"ordi": gdjs.ModeCode.GDordiObjects1});gdjs.ModeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("android"), gdjs.ModeCode.GDandroidObjects1);

gdjs.ModeCode.condition0IsTrue_0.val = false;
gdjs.ModeCode.condition1IsTrue_0.val = false;
{
gdjs.ModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeCode.mapOfGDgdjs_46ModeCode_46GDandroidObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ModeCode.condition0IsTrue_0.val ) {
{
gdjs.ModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ModeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("mode").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("iphone"), gdjs.ModeCode.GDiphoneObjects1);

gdjs.ModeCode.condition0IsTrue_0.val = false;
gdjs.ModeCode.condition1IsTrue_0.val = false;
{
gdjs.ModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeCode.mapOfGDgdjs_46ModeCode_46GDiphoneObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ModeCode.condition0IsTrue_0.val ) {
{
gdjs.ModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ModeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("mode").setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ordi"), gdjs.ModeCode.GDordiObjects1);

gdjs.ModeCode.condition0IsTrue_0.val = false;
gdjs.ModeCode.condition1IsTrue_0.val = false;
{
gdjs.ModeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ModeCode.mapOfGDgdjs_46ModeCode_46GDordiObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ModeCode.condition0IsTrue_0.val ) {
{
gdjs.ModeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ModeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("mode").setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.ModeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ModeCode.GDfondObjects1.length = 0;
gdjs.ModeCode.GDfondObjects2.length = 0;
gdjs.ModeCode.GDsolObjects1.length = 0;
gdjs.ModeCode.GDsolObjects2.length = 0;
gdjs.ModeCode.GDmodeObjects1.length = 0;
gdjs.ModeCode.GDmodeObjects2.length = 0;
gdjs.ModeCode.GDandroidObjects1.length = 0;
gdjs.ModeCode.GDandroidObjects2.length = 0;
gdjs.ModeCode.GDiphoneObjects1.length = 0;
gdjs.ModeCode.GDiphoneObjects2.length = 0;
gdjs.ModeCode.GDordiObjects1.length = 0;
gdjs.ModeCode.GDordiObjects2.length = 0;

gdjs.ModeCode.eventsList0(runtimeScene);
return;

}

gdjs['ModeCode'] = gdjs.ModeCode;
