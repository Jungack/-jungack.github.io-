gdjs.ClassementCode = {};
gdjs.ClassementCode.GDBgObjects1= [];
gdjs.ClassementCode.GDBgObjects2= [];
gdjs.ClassementCode.GDGroundObjects1= [];
gdjs.ClassementCode.GDGroundObjects2= [];
gdjs.ClassementCode.GDNewObjectObjects1= [];
gdjs.ClassementCode.GDNewObjectObjects2= [];
gdjs.ClassementCode.GDhomeObjects1= [];
gdjs.ClassementCode.GDhomeObjects2= [];
gdjs.ClassementCode.GDNom10Objects1= [];
gdjs.ClassementCode.GDNom10Objects2= [];
gdjs.ClassementCode.GDNom9Objects1= [];
gdjs.ClassementCode.GDNom9Objects2= [];
gdjs.ClassementCode.GDNom8Objects1= [];
gdjs.ClassementCode.GDNom8Objects2= [];
gdjs.ClassementCode.GDNom7Objects1= [];
gdjs.ClassementCode.GDNom7Objects2= [];
gdjs.ClassementCode.GDNom6Objects1= [];
gdjs.ClassementCode.GDNom6Objects2= [];
gdjs.ClassementCode.GDNom5Objects1= [];
gdjs.ClassementCode.GDNom5Objects2= [];
gdjs.ClassementCode.GDNom4Objects1= [];
gdjs.ClassementCode.GDNom4Objects2= [];
gdjs.ClassementCode.GDNom3Objects1= [];
gdjs.ClassementCode.GDNom3Objects2= [];
gdjs.ClassementCode.GDNom2Objects1= [];
gdjs.ClassementCode.GDNom2Objects2= [];
gdjs.ClassementCode.GDNom1Objects1= [];
gdjs.ClassementCode.GDNom1Objects2= [];
gdjs.ClassementCode.GDPTS10Objects1= [];
gdjs.ClassementCode.GDPTS10Objects2= [];
gdjs.ClassementCode.GDPTS9Objects1= [];
gdjs.ClassementCode.GDPTS9Objects2= [];
gdjs.ClassementCode.GDPTS8Objects1= [];
gdjs.ClassementCode.GDPTS8Objects2= [];
gdjs.ClassementCode.GDPTS7Objects1= [];
gdjs.ClassementCode.GDPTS7Objects2= [];
gdjs.ClassementCode.GDPTS6Objects1= [];
gdjs.ClassementCode.GDPTS6Objects2= [];
gdjs.ClassementCode.GDPTS5Objects1= [];
gdjs.ClassementCode.GDPTS5Objects2= [];
gdjs.ClassementCode.GDPTS4Objects1= [];
gdjs.ClassementCode.GDPTS4Objects2= [];
gdjs.ClassementCode.GDPTS3Objects1= [];
gdjs.ClassementCode.GDPTS3Objects2= [];
gdjs.ClassementCode.GDPTS2Objects1= [];
gdjs.ClassementCode.GDPTS2Objects2= [];
gdjs.ClassementCode.GDPTS1Objects1= [];
gdjs.ClassementCode.GDPTS1Objects2= [];
gdjs.ClassementCode.GDNomjoueur5Objects1= [];
gdjs.ClassementCode.GDNomjoueur5Objects2= [];
gdjs.ClassementCode.GDNomjoueur4Objects1= [];
gdjs.ClassementCode.GDNomjoueur4Objects2= [];
gdjs.ClassementCode.GDNomjoueur3Objects1= [];
gdjs.ClassementCode.GDNomjoueur3Objects2= [];
gdjs.ClassementCode.GDNomjoueur2Objects1= [];
gdjs.ClassementCode.GDNomjoueur2Objects2= [];
gdjs.ClassementCode.GDNomjoueurObjects1= [];
gdjs.ClassementCode.GDNomjoueurObjects2= [];
gdjs.ClassementCode.GDptsjoueur5Objects1= [];
gdjs.ClassementCode.GDptsjoueur5Objects2= [];
gdjs.ClassementCode.GDptsjoueur4Objects1= [];
gdjs.ClassementCode.GDptsjoueur4Objects2= [];
gdjs.ClassementCode.GDptsjoueur3Objects1= [];
gdjs.ClassementCode.GDptsjoueur3Objects2= [];
gdjs.ClassementCode.GDptsjoueur2Objects1= [];
gdjs.ClassementCode.GDptsjoueur2Objects2= [];
gdjs.ClassementCode.GDptsjoueurObjects1= [];
gdjs.ClassementCode.GDptsjoueurObjects2= [];
gdjs.ClassementCode.GDposjoueur5Objects1= [];
gdjs.ClassementCode.GDposjoueur5Objects2= [];
gdjs.ClassementCode.GDposjoueur4Objects1= [];
gdjs.ClassementCode.GDposjoueur4Objects2= [];
gdjs.ClassementCode.GDposjoueur3Objects1= [];
gdjs.ClassementCode.GDposjoueur3Objects2= [];
gdjs.ClassementCode.GDposjoueur2Objects1= [];
gdjs.ClassementCode.GDposjoueur2Objects2= [];
gdjs.ClassementCode.GDposjoueurObjects1= [];
gdjs.ClassementCode.GDposjoueurObjects2= [];
gdjs.ClassementCode.GDMenu_95classementObjects1= [];
gdjs.ClassementCode.GDMenu_95classementObjects2= [];
gdjs.ClassementCode.GDLoadingObjects1= [];
gdjs.ClassementCode.GDLoadingObjects2= [];
gdjs.ClassementCode.GDFirstObjects1= [];
gdjs.ClassementCode.GDFirstObjects2= [];
gdjs.ClassementCode.GDSecondObjects1= [];
gdjs.ClassementCode.GDSecondObjects2= [];

gdjs.ClassementCode.conditionTrue_0 = {val:false};
gdjs.ClassementCode.condition0IsTrue_0 = {val:false};
gdjs.ClassementCode.condition1IsTrue_0 = {val:false};
gdjs.ClassementCode.condition2IsTrue_0 = {val:false};


gdjs.ClassementCode.mapOfGDgdjs_46ClassementCode_46GDhomeObjects1Objects = Hashtable.newFrom({"home": gdjs.ClassementCode.GDhomeObjects1});gdjs.ClassementCode.mapOfGDgdjs_46ClassementCode_46GDSecondObjects1Objects = Hashtable.newFrom({"Second": gdjs.ClassementCode.GDSecondObjects1});gdjs.ClassementCode.mapOfGDgdjs_46ClassementCode_46GDFirstObjects1Objects = Hashtable.newFrom({"First": gdjs.ClassementCode.GDFirstObjects1});gdjs.ClassementCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.ClassementCode.GDhomeObjects1);

gdjs.ClassementCode.condition0IsTrue_0.val = false;
gdjs.ClassementCode.condition1IsTrue_0.val = false;
{
gdjs.ClassementCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClassementCode.mapOfGDgdjs_46ClassementCode_46GDhomeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClassementCode.condition0IsTrue_0.val ) {
{
gdjs.ClassementCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ClassementCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sfx_swooshing.wav", 1, false, 100, 1);
}}

}


{


{
{gdjs.evtTools.network.sendAsyncRequest("https://script.google.com/macros/s/AKfycbyIw1XZ0zFd-pKoRC28TShSGqwPbL-7q8z3lDMsw6vpcQw5DUY/exec?id=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name")) + "&score=" + "0", "", "GET", "", runtimeScene.getVariables().get("Raw_ranking"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.advancedWindow.setResizable(true);
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Kamata Jump - Kamata");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Nom1"), gdjs.ClassementCode.GDNom1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom10"), gdjs.ClassementCode.GDNom10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom2"), gdjs.ClassementCode.GDNom2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom3"), gdjs.ClassementCode.GDNom3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom4"), gdjs.ClassementCode.GDNom4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom5"), gdjs.ClassementCode.GDNom5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom6"), gdjs.ClassementCode.GDNom6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom7"), gdjs.ClassementCode.GDNom7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom8"), gdjs.ClassementCode.GDNom8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nom9"), gdjs.ClassementCode.GDNom9Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nomjoueur"), gdjs.ClassementCode.GDNomjoueurObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nomjoueur2"), gdjs.ClassementCode.GDNomjoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nomjoueur3"), gdjs.ClassementCode.GDNomjoueur3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nomjoueur4"), gdjs.ClassementCode.GDNomjoueur4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nomjoueur5"), gdjs.ClassementCode.GDNomjoueur5Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS1"), gdjs.ClassementCode.GDPTS1Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS10"), gdjs.ClassementCode.GDPTS10Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS2"), gdjs.ClassementCode.GDPTS2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS3"), gdjs.ClassementCode.GDPTS3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS4"), gdjs.ClassementCode.GDPTS4Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS5"), gdjs.ClassementCode.GDPTS5Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS6"), gdjs.ClassementCode.GDPTS6Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS7"), gdjs.ClassementCode.GDPTS7Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS8"), gdjs.ClassementCode.GDPTS8Objects1);
gdjs.copyArray(runtimeScene.getObjects("PTS9"), gdjs.ClassementCode.GDPTS9Objects1);
gdjs.copyArray(runtimeScene.getObjects("posjoueur"), gdjs.ClassementCode.GDposjoueurObjects1);
gdjs.copyArray(runtimeScene.getObjects("posjoueur2"), gdjs.ClassementCode.GDposjoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("posjoueur3"), gdjs.ClassementCode.GDposjoueur3Objects1);
gdjs.copyArray(runtimeScene.getObjects("posjoueur4"), gdjs.ClassementCode.GDposjoueur4Objects1);
gdjs.copyArray(runtimeScene.getObjects("posjoueur5"), gdjs.ClassementCode.GDposjoueur5Objects1);
gdjs.copyArray(runtimeScene.getObjects("ptsjoueur"), gdjs.ClassementCode.GDptsjoueurObjects1);
gdjs.copyArray(runtimeScene.getObjects("ptsjoueur2"), gdjs.ClassementCode.GDptsjoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ptsjoueur3"), gdjs.ClassementCode.GDptsjoueur3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ptsjoueur4"), gdjs.ClassementCode.GDptsjoueur4Objects1);
gdjs.copyArray(runtimeScene.getObjects("ptsjoueur5"), gdjs.ClassementCode.GDptsjoueur5Objects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Raw_ranking")), runtimeScene.getGame().getVariables().get("Ranking"));
}{for(var i = 0, len = gdjs.ClassementCode.GDNom1Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("2").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom2Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("3").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom3Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("4").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom4Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("5").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom5Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("6").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom6Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom6Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("7").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom7Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom7Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("8").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom8Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom8Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("9").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom9Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom9Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("10").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNom10Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNom10Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("11").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS1Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("2").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS2Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("3").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS3Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("4").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS4Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("5").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS5Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("6").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS6Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS6Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("7").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS7Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS7Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("8").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS8Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS8Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("9").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS9Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS9Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("10").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDPTS10Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDPTS10Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("top10").getChild("11").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNomjoueurObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNomjoueurObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDptsjoueurObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDptsjoueurObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDposjoueurObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDposjoueurObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("2")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNomjoueur2Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNomjoueur2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("3").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDptsjoueur2Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDptsjoueur2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("3").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDposjoueur2Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDposjoueur2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("3").getChild("2")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNomjoueur3Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNomjoueur3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("4").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDptsjoueur3Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDptsjoueur3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("4").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDposjoueur3Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDposjoueur3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("4").getChild("2")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNomjoueur4Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNomjoueur4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("1").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDptsjoueur4Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDptsjoueur4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("1").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDposjoueur4Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDposjoueur4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("1").getChild("2")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDNomjoueur5Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDNomjoueur5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("0").getChild("0")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDptsjoueur5Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDptsjoueur5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("0").getChild("1")));
}
}{for(var i = 0, len = gdjs.ClassementCode.GDposjoueur5Objects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDposjoueur5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("0").getChild("2")));
}
}}

}


{


gdjs.ClassementCode.condition0IsTrue_0.val = false;
{
gdjs.ClassementCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("2")) == 2;
}if (gdjs.ClassementCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("First"), gdjs.ClassementCode.GDFirstObjects1);
gdjs.ClassementCode.GDSecondObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ClassementCode.mapOfGDgdjs_46ClassementCode_46GDSecondObjects1Objects, 107, 1251, "");
}{for(var i = 0, len = gdjs.ClassementCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDSecondObjects1[i].setZOrder(80);
}
}{for(var i = 0, len = gdjs.ClassementCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDSecondObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClassementCode.GDFirstObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDFirstObjects1[i].hide();
}
}}

}


{


gdjs.ClassementCode.condition0IsTrue_0.val = false;
{
gdjs.ClassementCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("2")) == 1;
}if (gdjs.ClassementCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Second"), gdjs.ClassementCode.GDSecondObjects1);
gdjs.ClassementCode.GDFirstObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ClassementCode.mapOfGDgdjs_46ClassementCode_46GDFirstObjects1Objects, 107, 1190, "");
}{for(var i = 0, len = gdjs.ClassementCode.GDFirstObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDFirstObjects1[i].setZOrder(80);
}
}{for(var i = 0, len = gdjs.ClassementCode.GDFirstObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDFirstObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClassementCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDSecondObjects1[i].hide();
}
}}

}


{


gdjs.ClassementCode.condition0IsTrue_0.val = false;
{
gdjs.ClassementCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("2")) == 2);
}if (gdjs.ClassementCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Second"), gdjs.ClassementCode.GDSecondObjects1);
{for(var i = 0, len = gdjs.ClassementCode.GDSecondObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDSecondObjects1[i].hide();
}
}}

}


{


gdjs.ClassementCode.condition0IsTrue_0.val = false;
{
gdjs.ClassementCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Ranking").getChild("near_top").getChild("2").getChild("2")) == 1);
}if (gdjs.ClassementCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("First"), gdjs.ClassementCode.GDFirstObjects1);
{for(var i = 0, len = gdjs.ClassementCode.GDFirstObjects1.length ;i < len;++i) {
    gdjs.ClassementCode.GDFirstObjects1[i].hide();
}
}}

}


};

gdjs.ClassementCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClassementCode.GDBgObjects1.length = 0;
gdjs.ClassementCode.GDBgObjects2.length = 0;
gdjs.ClassementCode.GDGroundObjects1.length = 0;
gdjs.ClassementCode.GDGroundObjects2.length = 0;
gdjs.ClassementCode.GDNewObjectObjects1.length = 0;
gdjs.ClassementCode.GDNewObjectObjects2.length = 0;
gdjs.ClassementCode.GDhomeObjects1.length = 0;
gdjs.ClassementCode.GDhomeObjects2.length = 0;
gdjs.ClassementCode.GDNom10Objects1.length = 0;
gdjs.ClassementCode.GDNom10Objects2.length = 0;
gdjs.ClassementCode.GDNom9Objects1.length = 0;
gdjs.ClassementCode.GDNom9Objects2.length = 0;
gdjs.ClassementCode.GDNom8Objects1.length = 0;
gdjs.ClassementCode.GDNom8Objects2.length = 0;
gdjs.ClassementCode.GDNom7Objects1.length = 0;
gdjs.ClassementCode.GDNom7Objects2.length = 0;
gdjs.ClassementCode.GDNom6Objects1.length = 0;
gdjs.ClassementCode.GDNom6Objects2.length = 0;
gdjs.ClassementCode.GDNom5Objects1.length = 0;
gdjs.ClassementCode.GDNom5Objects2.length = 0;
gdjs.ClassementCode.GDNom4Objects1.length = 0;
gdjs.ClassementCode.GDNom4Objects2.length = 0;
gdjs.ClassementCode.GDNom3Objects1.length = 0;
gdjs.ClassementCode.GDNom3Objects2.length = 0;
gdjs.ClassementCode.GDNom2Objects1.length = 0;
gdjs.ClassementCode.GDNom2Objects2.length = 0;
gdjs.ClassementCode.GDNom1Objects1.length = 0;
gdjs.ClassementCode.GDNom1Objects2.length = 0;
gdjs.ClassementCode.GDPTS10Objects1.length = 0;
gdjs.ClassementCode.GDPTS10Objects2.length = 0;
gdjs.ClassementCode.GDPTS9Objects1.length = 0;
gdjs.ClassementCode.GDPTS9Objects2.length = 0;
gdjs.ClassementCode.GDPTS8Objects1.length = 0;
gdjs.ClassementCode.GDPTS8Objects2.length = 0;
gdjs.ClassementCode.GDPTS7Objects1.length = 0;
gdjs.ClassementCode.GDPTS7Objects2.length = 0;
gdjs.ClassementCode.GDPTS6Objects1.length = 0;
gdjs.ClassementCode.GDPTS6Objects2.length = 0;
gdjs.ClassementCode.GDPTS5Objects1.length = 0;
gdjs.ClassementCode.GDPTS5Objects2.length = 0;
gdjs.ClassementCode.GDPTS4Objects1.length = 0;
gdjs.ClassementCode.GDPTS4Objects2.length = 0;
gdjs.ClassementCode.GDPTS3Objects1.length = 0;
gdjs.ClassementCode.GDPTS3Objects2.length = 0;
gdjs.ClassementCode.GDPTS2Objects1.length = 0;
gdjs.ClassementCode.GDPTS2Objects2.length = 0;
gdjs.ClassementCode.GDPTS1Objects1.length = 0;
gdjs.ClassementCode.GDPTS1Objects2.length = 0;
gdjs.ClassementCode.GDNomjoueur5Objects1.length = 0;
gdjs.ClassementCode.GDNomjoueur5Objects2.length = 0;
gdjs.ClassementCode.GDNomjoueur4Objects1.length = 0;
gdjs.ClassementCode.GDNomjoueur4Objects2.length = 0;
gdjs.ClassementCode.GDNomjoueur3Objects1.length = 0;
gdjs.ClassementCode.GDNomjoueur3Objects2.length = 0;
gdjs.ClassementCode.GDNomjoueur2Objects1.length = 0;
gdjs.ClassementCode.GDNomjoueur2Objects2.length = 0;
gdjs.ClassementCode.GDNomjoueurObjects1.length = 0;
gdjs.ClassementCode.GDNomjoueurObjects2.length = 0;
gdjs.ClassementCode.GDptsjoueur5Objects1.length = 0;
gdjs.ClassementCode.GDptsjoueur5Objects2.length = 0;
gdjs.ClassementCode.GDptsjoueur4Objects1.length = 0;
gdjs.ClassementCode.GDptsjoueur4Objects2.length = 0;
gdjs.ClassementCode.GDptsjoueur3Objects1.length = 0;
gdjs.ClassementCode.GDptsjoueur3Objects2.length = 0;
gdjs.ClassementCode.GDptsjoueur2Objects1.length = 0;
gdjs.ClassementCode.GDptsjoueur2Objects2.length = 0;
gdjs.ClassementCode.GDptsjoueurObjects1.length = 0;
gdjs.ClassementCode.GDptsjoueurObjects2.length = 0;
gdjs.ClassementCode.GDposjoueur5Objects1.length = 0;
gdjs.ClassementCode.GDposjoueur5Objects2.length = 0;
gdjs.ClassementCode.GDposjoueur4Objects1.length = 0;
gdjs.ClassementCode.GDposjoueur4Objects2.length = 0;
gdjs.ClassementCode.GDposjoueur3Objects1.length = 0;
gdjs.ClassementCode.GDposjoueur3Objects2.length = 0;
gdjs.ClassementCode.GDposjoueur2Objects1.length = 0;
gdjs.ClassementCode.GDposjoueur2Objects2.length = 0;
gdjs.ClassementCode.GDposjoueurObjects1.length = 0;
gdjs.ClassementCode.GDposjoueurObjects2.length = 0;
gdjs.ClassementCode.GDMenu_95classementObjects1.length = 0;
gdjs.ClassementCode.GDMenu_95classementObjects2.length = 0;
gdjs.ClassementCode.GDLoadingObjects1.length = 0;
gdjs.ClassementCode.GDLoadingObjects2.length = 0;
gdjs.ClassementCode.GDFirstObjects1.length = 0;
gdjs.ClassementCode.GDFirstObjects2.length = 0;
gdjs.ClassementCode.GDSecondObjects1.length = 0;
gdjs.ClassementCode.GDSecondObjects2.length = 0;

gdjs.ClassementCode.eventsList0(runtimeScene);
return;

}

gdjs['ClassementCode'] = gdjs.ClassementCode;
