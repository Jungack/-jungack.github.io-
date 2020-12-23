gdjs.GameoverCode = {};
gdjs.GameoverCode.GDbackground_95dayObjects1= [];
gdjs.GameoverCode.GDbackground_95dayObjects2= [];
gdjs.GameoverCode.GDMenuObjects1= [];
gdjs.GameoverCode.GDMenuObjects2= [];
gdjs.GameoverCode.GDRestartObjects1= [];
gdjs.GameoverCode.GDRestartObjects2= [];
gdjs.GameoverCode.GDHomeObjects1= [];
gdjs.GameoverCode.GDHomeObjects2= [];
gdjs.GameoverCode.GDGameOverObjects1= [];
gdjs.GameoverCode.GDGameOverObjects2= [];
gdjs.GameoverCode.GDGroundObjects1= [];
gdjs.GameoverCode.GDGroundObjects2= [];
gdjs.GameoverCode.GDscoreObjects1= [];
gdjs.GameoverCode.GDscoreObjects2= [];
gdjs.GameoverCode.GDhscoreObjects1= [];
gdjs.GameoverCode.GDhscoreObjects2= [];

gdjs.GameoverCode.conditionTrue_0 = {val:false};
gdjs.GameoverCode.condition0IsTrue_0 = {val:false};
gdjs.GameoverCode.condition1IsTrue_0 = {val:false};
gdjs.GameoverCode.condition2IsTrue_0 = {val:false};


gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.GameoverCode.GDHomeObjects1});gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.GameoverCode.GDRestartObjects1});gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameoverCode.GDHomeObjects1);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDHomeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sfx_swooshing.wav", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameoverCode.GDRestartObjects1);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
{
gdjs.GameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameoverCode.mapOfGDgdjs_46GameoverCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sfx_swooshing.wav", 1, false, 100, 1);
}}

}


{


{
{}{}}

}


{



}


{


{
{gdjs.evtTools.network.sendAsyncRequest("https://script.google.com/macros/s/AKfycbx8YMBggbLHAMGp4FVMlKVNdKseQ2L7XOtUiFX0WgUzaVUn_IY/exec?id=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name")) + "&score=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")), "", "GET", "", runtimeScene.getVariables().get("Raw_ranking"), gdjs.VariablesContainer.badVariable);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("hscore"), gdjs.GameoverCode.GDhscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameoverCode.GDscoreObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Raw_ranking")), runtimeScene.getGame().getVariables().get("Ranking"));
}{for(var i = 0, len = gdjs.GameoverCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDhscoreObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDhscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("1")));
}
}}

}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDbackground_95dayObjects1.length = 0;
gdjs.GameoverCode.GDbackground_95dayObjects2.length = 0;
gdjs.GameoverCode.GDMenuObjects1.length = 0;
gdjs.GameoverCode.GDMenuObjects2.length = 0;
gdjs.GameoverCode.GDRestartObjects1.length = 0;
gdjs.GameoverCode.GDRestartObjects2.length = 0;
gdjs.GameoverCode.GDHomeObjects1.length = 0;
gdjs.GameoverCode.GDHomeObjects2.length = 0;
gdjs.GameoverCode.GDGameOverObjects1.length = 0;
gdjs.GameoverCode.GDGameOverObjects2.length = 0;
gdjs.GameoverCode.GDGroundObjects1.length = 0;
gdjs.GameoverCode.GDGroundObjects2.length = 0;
gdjs.GameoverCode.GDscoreObjects1.length = 0;
gdjs.GameoverCode.GDscoreObjects2.length = 0;
gdjs.GameoverCode.GDhscoreObjects1.length = 0;
gdjs.GameoverCode.GDhscoreObjects2.length = 0;

gdjs.GameoverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
