gdjs.Param_232tresCode = {};
gdjs.Param_232tresCode.GDFondObjects1= [];
gdjs.Param_232tresCode.GDFondObjects2= [];
gdjs.Param_232tresCode.GDGroundObjects1= [];
gdjs.Param_232tresCode.GDGroundObjects2= [];
gdjs.Param_232tresCode.GDHomeObjects1= [];
gdjs.Param_232tresCode.GDHomeObjects2= [];
gdjs.Param_232tresCode.GDParamObjects1= [];
gdjs.Param_232tresCode.GDParamObjects2= [];
gdjs.Param_232tresCode.GDsonObjects1= [];
gdjs.Param_232tresCode.GDsonObjects2= [];
gdjs.Param_232tresCode.GDonObjects1= [];
gdjs.Param_232tresCode.GDonObjects2= [];
gdjs.Param_232tresCode.GDoffObjects1= [];
gdjs.Param_232tresCode.GDoffObjects2= [];
gdjs.Param_232tresCode.GDPTSObjects1= [];
gdjs.Param_232tresCode.GDPTSObjects2= [];
gdjs.Param_232tresCode.GDr1Objects1= [];
gdjs.Param_232tresCode.GDr1Objects2= [];
gdjs.Param_232tresCode.GDr2Objects1= [];
gdjs.Param_232tresCode.GDr2Objects2= [];
gdjs.Param_232tresCode.GDr3Objects1= [];
gdjs.Param_232tresCode.GDr3Objects2= [];
gdjs.Param_232tresCode.GDv1Objects1= [];
gdjs.Param_232tresCode.GDv1Objects2= [];
gdjs.Param_232tresCode.GDv2Objects1= [];
gdjs.Param_232tresCode.GDv2Objects2= [];
gdjs.Param_232tresCode.GDv3Objects1= [];
gdjs.Param_232tresCode.GDv3Objects2= [];
gdjs.Param_232tresCode.GDc1Objects1= [];
gdjs.Param_232tresCode.GDc1Objects2= [];
gdjs.Param_232tresCode.GDc2Objects1= [];
gdjs.Param_232tresCode.GDc2Objects2= [];
gdjs.Param_232tresCode.GDc3Objects1= [];
gdjs.Param_232tresCode.GDc3Objects2= [];

gdjs.Param_232tresCode.conditionTrue_0 = {val:false};
gdjs.Param_232tresCode.condition0IsTrue_0 = {val:false};
gdjs.Param_232tresCode.condition1IsTrue_0 = {val:false};
gdjs.Param_232tresCode.condition2IsTrue_0 = {val:false};
gdjs.Param_232tresCode.condition3IsTrue_0 = {val:false};
gdjs.Param_232tresCode.condition4IsTrue_0 = {val:false};


gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDonObjects1Objects = Hashtable.newFrom({"on": gdjs.Param_232tresCode.GDonObjects1});gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDoffObjects1Objects = Hashtable.newFrom({"off": gdjs.Param_232tresCode.GDoffObjects1});gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDr1Objects1Objects = Hashtable.newFrom({"r1": gdjs.Param_232tresCode.GDr1Objects1});gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDr2Objects1Objects = Hashtable.newFrom({"r2": gdjs.Param_232tresCode.GDr2Objects1});gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDr3Objects1Objects = Hashtable.newFrom({"r3": gdjs.Param_232tresCode.GDr3Objects1});gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.Param_232tresCode.GDHomeObjects1});gdjs.Param_232tresCode.eventsList0 = function(runtimeScene) {

{


gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Param_232tresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("r2"), gdjs.Param_232tresCode.GDr2Objects1);
gdjs.copyArray(runtimeScene.getObjects("r3"), gdjs.Param_232tresCode.GDr3Objects1);
gdjs.copyArray(runtimeScene.getObjects("v1"), gdjs.Param_232tresCode.GDv1Objects1);
gdjs.copyArray(runtimeScene.getObjects("v2"), gdjs.Param_232tresCode.GDv2Objects1);
gdjs.copyArray(runtimeScene.getObjects("v3"), gdjs.Param_232tresCode.GDv3Objects1);
{for(var i = 0, len = gdjs.Param_232tresCode.GDv1Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDr2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDr2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDr3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDr3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv1Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv1Objects1[i].setOpacity(70);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv2Objects1[i].setOpacity(70);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv3Objects1[i].setOpacity(70);
}
}{runtimeScene.getGame().getVariables().get("rugbyman").setNumber(1);
}{runtimeScene.getVariables().get("PTS").setNumber(52);
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Rugbyman Jump - KamaTA");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PTS"), gdjs.Param_232tresCode.GDPTSObjects1);
{gdjs.evtTools.network.sendAsyncRequest("https://script.google.com/macros/s/AKfycbyIw1XZ0zFd-pKoRC28TShSGqwPbL-7q8z3lDMsw6vpcQw5DUY/exec?id=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name")) + "&score=" + "0", "", "GET", "", runtimeScene.getVariables().get("Raw_ranking"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Raw_ranking")), runtimeScene.getGame().getVariables().get("Ranking"));
}{for(var i = 0, len = gdjs.Param_232tresCode.GDPTSObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDPTSObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("2")));
}
}{runtimeScene.getVariables().get("PTS").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("2")));
}{gdjs.evtTools.advancedWindow.setResizable(true);
}}

}


{


gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
}if (gdjs.Param_232tresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("off"), gdjs.Param_232tresCode.GDoffObjects1);
gdjs.copyArray(runtimeScene.getObjects("on"), gdjs.Param_232tresCode.GDonObjects1);
{for(var i = 0, len = gdjs.Param_232tresCode.GDonObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDonObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDoffObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDoffObjects1[i].setOpacity(70);
}
}}

}


{


gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
}if (gdjs.Param_232tresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("off"), gdjs.Param_232tresCode.GDoffObjects1);
gdjs.copyArray(runtimeScene.getObjects("on"), gdjs.Param_232tresCode.GDonObjects1);
{for(var i = 0, len = gdjs.Param_232tresCode.GDoffObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDoffObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDonObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDonObjects1[i].setOpacity(70);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("on"), gdjs.Param_232tresCode.GDonObjects1);

gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Param_232tresCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("off"), gdjs.Param_232tresCode.GDoffObjects1);
/* Reuse gdjs.Param_232tresCode.GDonObjects1 */
{for(var i = 0, len = gdjs.Param_232tresCode.GDonObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDonObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDoffObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDoffObjects1[i].setOpacity(70);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("off"), gdjs.Param_232tresCode.GDoffObjects1);

gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDoffObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Param_232tresCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Param_232tresCode.GDoffObjects1 */
gdjs.copyArray(runtimeScene.getObjects("on"), gdjs.Param_232tresCode.GDonObjects1);
{for(var i = 0, len = gdjs.Param_232tresCode.GDonObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDonObjects1[i].setOpacity(70);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDoffObjects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDoffObjects1[i].setOpacity(255);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) <= 50;
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) != 0;
}}
if (gdjs.Param_232tresCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c2"), gdjs.Param_232tresCode.GDc2Objects1);
gdjs.copyArray(runtimeScene.getObjects("c3"), gdjs.Param_232tresCode.GDc3Objects1);
gdjs.copyArray(runtimeScene.getObjects("r2"), gdjs.Param_232tresCode.GDr2Objects1);
gdjs.copyArray(runtimeScene.getObjects("r3"), gdjs.Param_232tresCode.GDr3Objects1);
{for(var i = 0, len = gdjs.Param_232tresCode.GDr2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDr2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDr3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDr3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDc2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDc2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDc3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDc3Objects1[i].hide(false);
}
}}

}


{


gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) <= 10;
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) != 0;
}}
if (gdjs.Param_232tresCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("c3"), gdjs.Param_232tresCode.GDc3Objects1);
gdjs.copyArray(runtimeScene.getObjects("r3"), gdjs.Param_232tresCode.GDr3Objects1);
{for(var i = 0, len = gdjs.Param_232tresCode.GDr3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDr3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDc3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDc3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("r1"), gdjs.Param_232tresCode.GDr1Objects1);

gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDr1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Param_232tresCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("v1"), gdjs.Param_232tresCode.GDv1Objects1);
gdjs.copyArray(runtimeScene.getObjects("v2"), gdjs.Param_232tresCode.GDv2Objects1);
gdjs.copyArray(runtimeScene.getObjects("v3"), gdjs.Param_232tresCode.GDv3Objects1);
{runtimeScene.getGame().getVariables().get("rugbyman").setNumber(1);
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv1Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("r2"), gdjs.Param_232tresCode.GDr2Objects1);

gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
gdjs.Param_232tresCode.condition2IsTrue_0.val = false;
gdjs.Param_232tresCode.condition3IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDr2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Param_232tresCode.condition1IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) <= 50;
}if ( gdjs.Param_232tresCode.condition2IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) != 0;
}}
}
}
if (gdjs.Param_232tresCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("v1"), gdjs.Param_232tresCode.GDv1Objects1);
gdjs.copyArray(runtimeScene.getObjects("v2"), gdjs.Param_232tresCode.GDv2Objects1);
gdjs.copyArray(runtimeScene.getObjects("v3"), gdjs.Param_232tresCode.GDv3Objects1);
{runtimeScene.getGame().getVariables().get("rugbyman").setNumber(2);
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv1Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("r3"), gdjs.Param_232tresCode.GDr3Objects1);

gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
gdjs.Param_232tresCode.condition2IsTrue_0.val = false;
gdjs.Param_232tresCode.condition3IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDr3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Param_232tresCode.condition1IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) <= 10;
}if ( gdjs.Param_232tresCode.condition2IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("PTS")) != 0;
}}
}
}
if (gdjs.Param_232tresCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("v1"), gdjs.Param_232tresCode.GDv1Objects1);
gdjs.copyArray(runtimeScene.getObjects("v2"), gdjs.Param_232tresCode.GDv2Objects1);
gdjs.copyArray(runtimeScene.getObjects("v3"), gdjs.Param_232tresCode.GDv3Objects1);
{runtimeScene.getGame().getVariables().get("rugbyman").setNumber(3);
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv1Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv2Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Param_232tresCode.GDv3Objects1.length ;i < len;++i) {
    gdjs.Param_232tresCode.GDv3Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Param_232tresCode.GDHomeObjects1);

gdjs.Param_232tresCode.condition0IsTrue_0.val = false;
gdjs.Param_232tresCode.condition1IsTrue_0.val = false;
{
gdjs.Param_232tresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Param_232tresCode.mapOfGDgdjs_46Param_95232tresCode_46GDHomeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Param_232tresCode.condition0IsTrue_0.val ) {
{
gdjs.Param_232tresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Param_232tresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Param_232tresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Param_232tresCode.GDFondObjects1.length = 0;
gdjs.Param_232tresCode.GDFondObjects2.length = 0;
gdjs.Param_232tresCode.GDGroundObjects1.length = 0;
gdjs.Param_232tresCode.GDGroundObjects2.length = 0;
gdjs.Param_232tresCode.GDHomeObjects1.length = 0;
gdjs.Param_232tresCode.GDHomeObjects2.length = 0;
gdjs.Param_232tresCode.GDParamObjects1.length = 0;
gdjs.Param_232tresCode.GDParamObjects2.length = 0;
gdjs.Param_232tresCode.GDsonObjects1.length = 0;
gdjs.Param_232tresCode.GDsonObjects2.length = 0;
gdjs.Param_232tresCode.GDonObjects1.length = 0;
gdjs.Param_232tresCode.GDonObjects2.length = 0;
gdjs.Param_232tresCode.GDoffObjects1.length = 0;
gdjs.Param_232tresCode.GDoffObjects2.length = 0;
gdjs.Param_232tresCode.GDPTSObjects1.length = 0;
gdjs.Param_232tresCode.GDPTSObjects2.length = 0;
gdjs.Param_232tresCode.GDr1Objects1.length = 0;
gdjs.Param_232tresCode.GDr1Objects2.length = 0;
gdjs.Param_232tresCode.GDr2Objects1.length = 0;
gdjs.Param_232tresCode.GDr2Objects2.length = 0;
gdjs.Param_232tresCode.GDr3Objects1.length = 0;
gdjs.Param_232tresCode.GDr3Objects2.length = 0;
gdjs.Param_232tresCode.GDv1Objects1.length = 0;
gdjs.Param_232tresCode.GDv1Objects2.length = 0;
gdjs.Param_232tresCode.GDv2Objects1.length = 0;
gdjs.Param_232tresCode.GDv2Objects2.length = 0;
gdjs.Param_232tresCode.GDv3Objects1.length = 0;
gdjs.Param_232tresCode.GDv3Objects2.length = 0;
gdjs.Param_232tresCode.GDc1Objects1.length = 0;
gdjs.Param_232tresCode.GDc1Objects2.length = 0;
gdjs.Param_232tresCode.GDc2Objects1.length = 0;
gdjs.Param_232tresCode.GDc2Objects2.length = 0;
gdjs.Param_232tresCode.GDc3Objects1.length = 0;
gdjs.Param_232tresCode.GDc3Objects2.length = 0;

gdjs.Param_232tresCode.eventsList0(runtimeScene);
return;

}

gdjs['Param_232tresCode'] = gdjs.Param_232tresCode;
