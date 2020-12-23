gdjs.GameCode = {};
gdjs.GameCode.GDBorderObjects1_1final = [];

gdjs.GameCode.GDFlappy_95birdObjects1_1final = [];

gdjs.GameCode.GDGroundObjects1_1final = [];

gdjs.GameCode.GDPipe_95fullObjects1_1final = [];

gdjs.GameCode.GDMenu_95buttonObjects1= [];
gdjs.GameCode.GDMenu_95buttonObjects2= [];
gdjs.GameCode.GDMenu_95buttonObjects3= [];
gdjs.GameCode.GDMenu_95buttonObjects4= [];
gdjs.GameCode.GDRestart_95buttonObjects1= [];
gdjs.GameCode.GDRestart_95buttonObjects2= [];
gdjs.GameCode.GDRestart_95buttonObjects3= [];
gdjs.GameCode.GDRestart_95buttonObjects4= [];
gdjs.GameCode.GDBorderObjects1= [];
gdjs.GameCode.GDBorderObjects2= [];
gdjs.GameCode.GDBorderObjects3= [];
gdjs.GameCode.GDBorderObjects4= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDlabel_95game_95overObjects1= [];
gdjs.GameCode.GDlabel_95game_95overObjects2= [];
gdjs.GameCode.GDlabel_95game_95overObjects3= [];
gdjs.GameCode.GDlabel_95game_95overObjects4= [];
gdjs.GameCode.GDInstructionsObjects1= [];
gdjs.GameCode.GDInstructionsObjects2= [];
gdjs.GameCode.GDInstructionsObjects3= [];
gdjs.GameCode.GDInstructionsObjects4= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDNew_95hscoreObjects1= [];
gdjs.GameCode.GDNew_95hscoreObjects2= [];
gdjs.GameCode.GDNew_95hscoreObjects3= [];
gdjs.GameCode.GDNew_95hscoreObjects4= [];
gdjs.GameCode.GDPipe_95fullObjects1= [];
gdjs.GameCode.GDPipe_95fullObjects2= [];
gdjs.GameCode.GDPipe_95fullObjects3= [];
gdjs.GameCode.GDPipe_95fullObjects4= [];
gdjs.GameCode.GDbackground_95nightObjects1= [];
gdjs.GameCode.GDbackground_95nightObjects2= [];
gdjs.GameCode.GDbackground_95nightObjects3= [];
gdjs.GameCode.GDbackground_95nightObjects4= [];
gdjs.GameCode.GDbackground_95dayObjects1= [];
gdjs.GameCode.GDbackground_95dayObjects2= [];
gdjs.GameCode.GDbackground_95dayObjects3= [];
gdjs.GameCode.GDbackground_95dayObjects4= [];
gdjs.GameCode.GDmenu_95scoreObjects1= [];
gdjs.GameCode.GDmenu_95scoreObjects2= [];
gdjs.GameCode.GDmenu_95scoreObjects3= [];
gdjs.GameCode.GDmenu_95scoreObjects4= [];
gdjs.GameCode.GDscoreObjects1= [];
gdjs.GameCode.GDscoreObjects2= [];
gdjs.GameCode.GDscoreObjects3= [];
gdjs.GameCode.GDscoreObjects4= [];
gdjs.GameCode.GDhscoreObjects1= [];
gdjs.GameCode.GDhscoreObjects2= [];
gdjs.GameCode.GDhscoreObjects3= [];
gdjs.GameCode.GDhscoreObjects4= [];
gdjs.GameCode.GDFlappy_95birdObjects1= [];
gdjs.GameCode.GDFlappy_95birdObjects2= [];
gdjs.GameCode.GDFlappy_95birdObjects3= [];
gdjs.GameCode.GDFlappy_95birdObjects4= [];
gdjs.GameCode.GDAppuieObjects1= [];
gdjs.GameCode.GDAppuieObjects2= [];
gdjs.GameCode.GDAppuieObjects3= [];
gdjs.GameCode.GDAppuieObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.conditionTrue_2 = {val:false};
gdjs.GameCode.condition0IsTrue_2 = {val:false};
gdjs.GameCode.condition1IsTrue_2 = {val:false};
gdjs.GameCode.condition2IsTrue_2 = {val:false};
gdjs.GameCode.condition3IsTrue_2 = {val:false};
gdjs.GameCode.condition4IsTrue_2 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPipe_9595fullObjects2Objects = Hashtable.newFrom({"Pipe_full": gdjs.GameCode.GDPipe_95fullObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbackground_9595dayObjects2Objects = Hashtable.newFrom({"background_day": gdjs.GameCode.GDbackground_95dayObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbackground_9595nightObjects2Objects = Hashtable.newFrom({"background_night": gdjs.GameCode.GDbackground_95nightObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAppuieObjects2Objects = Hashtable.newFrom({"Appuie": gdjs.GameCode.GDAppuieObjects2});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.GameCode.GDAppuieObjects2.length = 0;

gdjs.GameCode.GDGroundObjects2.length = 0;

gdjs.GameCode.GDPipe_95fullObjects2.length = 0;

gdjs.GameCode.GDbackground_95dayObjects2.length = 0;

gdjs.GameCode.GDbackground_95nightObjects2.length = 0;

{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().get("demarrer").setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects2Objects, 0, 1770, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPipe_9595fullObjects2Objects, 1000, -(900), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbackground_9595dayObjects2Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbackground_9595nightObjects2Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAppuieObjects2Objects, 440, 1500, "");
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(25));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Pipe_full"), gdjs.GameCode.GDPipe_95fullObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPipe_95fullObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPipe_95fullObjects2[i].setZOrder(-(5));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 4;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(4);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 5;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(5);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 6;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(6);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 7;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(7);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("mouton")) == 8;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAnimation(8);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.GameCode.condition0IsTrue_2.val ) {
    gdjs.GameCode.conditionTrue_2.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_2.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.GameCode.condition1IsTrue_2.val ) {
    gdjs.GameCode.conditionTrue_2.val = true;
}
}
{
}
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition1IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
gdjs.GameCode.condition1IsTrue_2.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10899236);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Appuie"), gdjs.GameCode.GDAppuieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects1);
{runtimeScene.getVariables().get("demarrer").setNumber(1);
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects1[i].activateBehavior("PlatformerObject", true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_wing.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDAppuieObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAppuieObjects1[i].hide();
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("demarrer")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pipe_full"), gdjs.GameCode.GDPipe_95fullObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPipe_95fullObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPipe_95fullObjects2[i].addForce(-(550), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setXOffset(gdjs.GameCode.GDbackground_95dayObjects2[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setXOffset(gdjs.GameCode.GDbackground_95nightObjects2[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects2[i].setXOffset(gdjs.GameCode.GDGroundObjects2[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.GameCode.condition0IsTrue_2.val ) {
    gdjs.GameCode.conditionTrue_2.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_2.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.GameCode.condition1IsTrue_2.val ) {
    gdjs.GameCode.conditionTrue_2.val = true;
}
}
{
}
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition1IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
gdjs.GameCode.condition1IsTrue_2.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10904212);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_wing.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].setAngle(320);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95birdObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_95birdObjects2[i].behaviorActivated("PlatformerObject") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95birdObjects2[k] = gdjs.GameCode.GDFlappy_95birdObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95birdObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "flappy");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlappy_95birdObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects2[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 90, runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flappy");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95birdObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_95birdObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95birdObjects1[k] = gdjs.GameCode.GDFlappy_95birdObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95birdObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_95birdObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_95birdObjects1[i].behaviorActivated("PlatformerObject") ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDFlappy_95birdObjects1[k] = gdjs.GameCode.GDFlappy_95birdObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_95birdObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFlappy_95birdObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlappy_95birdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_95birdObjects1[i].rotate(90, runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPipe_9595fullObjects1Objects = Hashtable.newFrom({"Pipe_full": gdjs.GameCode.GDPipe_95fullObjects1});gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("demarrer")) == 1;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.6, "pipe_spawn");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10911252);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.GameCode.GDPipe_95fullObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPipe_9595fullObjects1Objects, 1100, gdjs.randomFloatInRange(-(1400), -(300)), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameCode.GDscoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDscoreObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pipe_full"), gdjs.GameCode.GDPipe_95fullObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPipe_95fullObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPipe_95fullObjects2[i].getX() < (( gdjs.GameCode.GDFlappy_95birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_95birdObjects2[0].getPointX("Center")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPipe_95fullObjects2[k] = gdjs.GameCode.GDPipe_95fullObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPipe_95fullObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPipe_95fullObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPipe_95fullObjects2[i].getX() > (( gdjs.GameCode.GDFlappy_95birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_95birdObjects2[0].getPointX("Center")) - 60 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPipe_95fullObjects2[k] = gdjs.GameCode.GDPipe_95fullObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPipe_95fullObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10913708);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Score").add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_point.wav", false, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 20;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(25));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 40;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(25));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(20));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 60;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(25));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 80;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(25));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(20));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 100;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(25));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 120;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(25));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(20));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 140;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(25));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 160;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(25));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(20));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 180;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects2);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects2[i].setZOrder(-(20));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects2[i].setZOrder(-(25));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) >= 200;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background_day"), gdjs.GameCode.GDbackground_95dayObjects1);
gdjs.copyArray(runtimeScene.getObjects("background_night"), gdjs.GameCode.GDbackground_95nightObjects1);
{for(var i = 0, len = gdjs.GameCode.GDbackground_95nightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95nightObjects1[i].setZOrder(-(25));
}
}{for(var i = 0, len = gdjs.GameCode.GDbackground_95dayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbackground_95dayObjects1[i].setZOrder(-(20));
}
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("demarrer")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setXOffset(gdjs.GameCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_95birdObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPipe_9595fullObjects2Objects = Hashtable.newFrom({"Pipe_full": gdjs.GameCode.GDPipe_95fullObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_95birdObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_95birdObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBorderObjects2Objects = Hashtable.newFrom({"Border": gdjs.GameCode.GDBorderObjects2});gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.GameCode.GDBorderObjects1.length = 0;

gdjs.GameCode.GDFlappy_95birdObjects1.length = 0;

gdjs.GameCode.GDGroundObjects1.length = 0;

gdjs.GameCode.GDPipe_95fullObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.GDBorderObjects1_1final.length = 0;gdjs.GameCode.GDFlappy_95birdObjects1_1final.length = 0;gdjs.GameCode.GDGroundObjects1_1final.length = 0;gdjs.GameCode.GDPipe_95fullObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pipe_full"), gdjs.GameCode.GDPipe_95fullObjects2);
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPipe_9595fullObjects2Objects, false, runtimeScene, false);
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDFlappy_95birdObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDFlappy_95birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_95birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_95birdObjects1_1final.push(gdjs.GameCode.GDFlappy_95birdObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDPipe_95fullObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPipe_95fullObjects1_1final.indexOf(gdjs.GameCode.GDPipe_95fullObjects2[j]) === -1 )
            gdjs.GameCode.GDPipe_95fullObjects1_1final.push(gdjs.GameCode.GDPipe_95fullObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects2Objects, false, runtimeScene, false);
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDFlappy_95birdObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDFlappy_95birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_95birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_95birdObjects1_1final.push(gdjs.GameCode.GDFlappy_95birdObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDGroundObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDGroundObjects1_1final.indexOf(gdjs.GameCode.GDGroundObjects2[j]) === -1 )
            gdjs.GameCode.GDGroundObjects1_1final.push(gdjs.GameCode.GDGroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GameCode.GDBorderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_95birdObjects2);
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFlappy_9595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBorderObjects2Objects, false, runtimeScene, false);
if( gdjs.GameCode.condition2IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBorderObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBorderObjects1_1final.indexOf(gdjs.GameCode.GDBorderObjects2[j]) === -1 )
            gdjs.GameCode.GDBorderObjects1_1final.push(gdjs.GameCode.GDBorderObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDFlappy_95birdObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDFlappy_95birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_95birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_95birdObjects1_1final.push(gdjs.GameCode.GDFlappy_95birdObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBorderObjects1_1final, gdjs.GameCode.GDBorderObjects1);
gdjs.copyArray(gdjs.GameCode.GDFlappy_95birdObjects1_1final, gdjs.GameCode.GDFlappy_95birdObjects1);
gdjs.copyArray(gdjs.GameCode.GDGroundObjects1_1final, gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(gdjs.GameCode.GDPipe_95fullObjects1_1final, gdjs.GameCode.GDPipe_95fullObjects1);
}
}
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10926724);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_hit.wav", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10928836);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover", false);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDMenu_95buttonObjects1.length = 0;
gdjs.GameCode.GDMenu_95buttonObjects2.length = 0;
gdjs.GameCode.GDMenu_95buttonObjects3.length = 0;
gdjs.GameCode.GDMenu_95buttonObjects4.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects1.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects2.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects3.length = 0;
gdjs.GameCode.GDRestart_95buttonObjects4.length = 0;
gdjs.GameCode.GDBorderObjects1.length = 0;
gdjs.GameCode.GDBorderObjects2.length = 0;
gdjs.GameCode.GDBorderObjects3.length = 0;
gdjs.GameCode.GDBorderObjects4.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects1.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects2.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects3.length = 0;
gdjs.GameCode.GDlabel_95game_95overObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects1.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects2.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects3.length = 0;
gdjs.GameCode.GDNew_95hscoreObjects4.length = 0;
gdjs.GameCode.GDPipe_95fullObjects1.length = 0;
gdjs.GameCode.GDPipe_95fullObjects2.length = 0;
gdjs.GameCode.GDPipe_95fullObjects3.length = 0;
gdjs.GameCode.GDPipe_95fullObjects4.length = 0;
gdjs.GameCode.GDbackground_95nightObjects1.length = 0;
gdjs.GameCode.GDbackground_95nightObjects2.length = 0;
gdjs.GameCode.GDbackground_95nightObjects3.length = 0;
gdjs.GameCode.GDbackground_95nightObjects4.length = 0;
gdjs.GameCode.GDbackground_95dayObjects1.length = 0;
gdjs.GameCode.GDbackground_95dayObjects2.length = 0;
gdjs.GameCode.GDbackground_95dayObjects3.length = 0;
gdjs.GameCode.GDbackground_95dayObjects4.length = 0;
gdjs.GameCode.GDmenu_95scoreObjects1.length = 0;
gdjs.GameCode.GDmenu_95scoreObjects2.length = 0;
gdjs.GameCode.GDmenu_95scoreObjects3.length = 0;
gdjs.GameCode.GDmenu_95scoreObjects4.length = 0;
gdjs.GameCode.GDscoreObjects1.length = 0;
gdjs.GameCode.GDscoreObjects2.length = 0;
gdjs.GameCode.GDscoreObjects3.length = 0;
gdjs.GameCode.GDscoreObjects4.length = 0;
gdjs.GameCode.GDhscoreObjects1.length = 0;
gdjs.GameCode.GDhscoreObjects2.length = 0;
gdjs.GameCode.GDhscoreObjects3.length = 0;
gdjs.GameCode.GDhscoreObjects4.length = 0;
gdjs.GameCode.GDFlappy_95birdObjects1.length = 0;
gdjs.GameCode.GDFlappy_95birdObjects2.length = 0;
gdjs.GameCode.GDFlappy_95birdObjects3.length = 0;
gdjs.GameCode.GDFlappy_95birdObjects4.length = 0;
gdjs.GameCode.GDAppuieObjects1.length = 0;
gdjs.GameCode.GDAppuieObjects2.length = 0;
gdjs.GameCode.GDAppuieObjects3.length = 0;
gdjs.GameCode.GDAppuieObjects4.length = 0;

gdjs.GameCode.eventsList7(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
