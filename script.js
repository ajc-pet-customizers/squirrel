var features = new Map();
features.set("color",["white","white"]);
features.set("hair","mohawk");
features.set("tail","fluffy");
features.set("eye","happy");
features.set("ear","long");

setColorButtons("color_grid"); 
setEyeButtons();
setOtherButtons();

updateColor("white");
updateSecondary("white");
updateEye("happy");
updateHair("mohawk");
updateTail("fluffy");
updateEar("long");

document.getElementById("save").addEventListener("click", function() { mergeImages("save"); } );
document.getElementById("new_tab").addEventListener("click", function() { mergeImages("new_tab"); } );
document.getElementById("randomize").addEventListener("click", function() { randomize(); } );
document.getElementById("bg_contrast").addEventListener("click", function() { flip_bg(); } );
light = true;

var myVar;
function loaded() {
  myVar = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("loading_container").style.display = "none";
}

function randomize() {
  var features = [["dark red", "light red", "dark pink", "light pink", "dark purple", "light purple", "black", "white", "dark blue", "teal", "burple", "yellow", "dark green", "medium green", "lime", "mint", "dark brown", "light brown", "orange", "mustard"],["lash","boy","happy","squint","angry","sparkle"],["long","rat","bear","cat"],["bangs", "bald", "mohawk", "cowlick"],["fluffy", "shortie","smooth","noodle"]];
  var randoms = []

  for (var i = 0; i < features.length; i++) {
    if (i==0) {
      randoms.push(features[i][Math.floor(Math.random()*features[i].length)])
    }
    randoms.push(features[i][Math.floor(Math.random()*features[i].length)]);
  }
  updateColor(randoms[0]);
  updateSecondary(randoms[1]);
  updateEye(randoms[2]);
  updateEar(randoms[3]);
  updateHair(randoms[4]);
  updateTail(randoms[5]);
}

function flip_bg() {
  if (!light) {
    document.getElementById("squirrel_container").style.backgroundImage = "url('misc_assets/light bg.png'"+")";
  }
  else {
    document.getElementById("squirrel_container").style.backgroundImage = "url('misc_assets/dark bg.png'"+")";
  }
  light = !light;
}

function setColorButtons(className) {
var colorNames = ["dark red", "light red", "dark pink", "light pink", "dark purple", "light purple", "black", "white", "dark blue", "teal", "burple", "yellow", "dark green", "medium green", "lime", "mint", "dark brown", "light brown", "orange", "mustard"];
var colorRGBs = [[173, 16, 16], [235, 64, 64], [236, 90, 218], [255, 166, 255], [138, 53, 224], [167, 93, 255], [42, 42, 42], [255, 255, 255], [53, 116, 255], [82, 216, 231], [112, 112, 254], [255, 255, 0], [1, 149, 30], [53, 187, 79], [156, 231, 44], [218, 254, 163], [170, 84, 0], [198, 147, 69], [245, 122, 0], [255, 212, 9]];
for (var i = 0; i < colorNames.length; i++) {
  var b = document.createElement("BUTTON");
  b.className = "color_grid_button";
  b.id = colorNames[i]+"1";
  b.style.backgroundColor = "rgb("+colorRGBs[i].join(",")+")";
  document.getElementById(className+"_1").appendChild(b);
  b.addEventListener("click", function() { updateColor(this.id.substring(0,this.id.length - 1)) } );

  var b2 = document.createElement("BUTTON");
  b2.className = "color_grid_button";
  b2.id = colorNames[i]+"2";
  b2.style.backgroundColor = "rgb("+colorRGBs[i].join(",")+")";
  document.getElementById(className+"_2").appendChild(b2);
  b2.addEventListener("click", function() { updateSecondary(this.id.substring(0,this.id.length - 1)) } );
  }
}

function setEyeButtons() {
var eyeAssets = ["lash","boy","happy","squint","angry","sparkle"];

for (var i = 0; i < eyeAssets.length; i++) {
  var b = document.createElement("BUTTON");
  b.className = "cell_button";
  b.id = ""+eyeAssets[i];
  b.style.backgroundImage = "url('button_assets/"+eyeAssets[i]+" cell.png'"+")";
  b.addEventListener("click", function() { updateEye(this.id) } );
  document.getElementsByClassName("eye_panel_div")[0].appendChild(b);
  }
}

function setOtherButtons() {
var ear = ["bear","cat","long","rat"];
var hair = ["bald","cowlick","bangs","mohawk"];
var tail = ["noodle", "smooth","fluffy","shortie"];
for (var i = 0; i < 4; i++) {
  var h = document.createElement("BUTTON");
  h.className = "cell_button";
  h.id = ""+ear[i];
  h.style.backgroundImage = "url('button_assets/"+ear[i]+" cell.png'"+")";
  h.addEventListener("click", function() { updateEar(this.id) } );
  document.getElementsByClassName("other_panel_div")[0].appendChild(h);

  var p = document.createElement("BUTTON");
  p.className = "cell_button";
  p.id = ""+hair[i];
  p.style.backgroundImage = "url('button_assets/"+hair[i]+" cell.png'"+")";
  p.addEventListener("click", function() { updateHair(this.id) } );
  document.getElementsByClassName("other_panel_div")[0].appendChild(p);

  var a = document.createElement("BUTTON");
  a.className = "cell_button";
  a.id = ""+tail[i];
  a.style.backgroundImage = "url('button_assets/"+tail[i]+" cell.png'"+")";
  document.getElementsByClassName("other_panel_div")[0].appendChild(a);
  a.addEventListener("click", function() { updateTail(this.id) } );
  }
}

function updateBorders(buttonId, newButtonId) {
  var oldB = document.getElementById(buttonId);
  var newB = document.getElementById(newButtonId);
  if (oldB != null && newB != null) {
    oldB.style.outline = "none";
    newB.style.outline = "0.3vw solid #FBB148";
    oldB.style.zIndex = 0;
    newB.style.zIndex = 1000;
  }
}

//Functions for color/feature updating below
function updateColor(newColor) {
  document.getElementById("body").src = "squirrel_assets/body/"+newColor+".png";
  updateBorders(features.get("color")[0]+"1",newColor+"1");
  features.set("color",[newColor,features.get("color")[1]]);
  updateEar(features.get("ear"));
  updateTail(features.get("tail"));
  updateHair(features.get("hair"));
}

function updateSecondary(newColor) {
  updateBorders(features.get("color")[1]+"2",newColor+"2");
  features.set("color",[features.get("color")[0],newColor]);
  document.getElementById("belly").src = "squirrel_assets/belly/"+newColor+".png";
  updateHair(features.get("hair"));
}

function updateEye(newEye) {
  document.getElementById("eye").src = "squirrel_assets/eye/"+newEye+".png";
  updateBorders(features.get("eye"),newEye);
  features.set("eye",newEye);
}

function updateEar(newEar) {
  if (newEar == "rat") {
    document.getElementById("leftear").src = "squirrel_assets/ear/rat/left.png";
    document.getElementById("rightear").src = "squirrel_assets/ear/rat/right.png";
  }
  else {
    document.getElementById("leftear").src = "squirrel_assets/ear/"+newEar+"/left/"+features.get("color")[0]+".png";
    document.getElementById("rightear").src = "squirrel_assets/ear/"+newEar+"/right/"+features.get("color")[0]+".png";
  }
  updateBorders(features.get("ear"),newEar);
  features.set("ear",newEar);
}

function updateHair(newHair) {
  if (newHair == "bald") {
    document.getElementById("hair").src = "misc_assets/empty.png";
  }
  else if (newHair == "cowlick") {
    document.getElementById("hair").src = "squirrel_assets/hair/cowlick/"+features.get("color")[0]+".png";
  }
  else {
    document.getElementById("hair").src = "squirrel_assets/hair/"+newHair+"/"+features.get("color")[1]+".png";
  }
  updateBorders(features.get("hair"),newHair);
  features.set("hair",newHair);
}

function updateTail(newTail) {
  document.getElementById("tail").src = "squirrel_assets/tail/"+newTail+"/"+features.get("color")[0]+".png";
  document.getElementById("watermark").src = "squirrel_assets/watermark/"+newTail+".png";
  updateBorders(features.get("tail"),newTail);
  features.set("tail",newTail);
}

function mergeImages(type) {
var c=document.getElementById("squirrel_canvas");
var ctx=c.getContext("2d");
ctx.clearRect(0, 0, squirrel_canvas.width, squirrel_canvas.height);

var tail = new Image();
var belly = new Image();
var leftear = new Image();
var body = new Image();
var eye = new Image();
var hair = new Image();
var rightear = new Image();
var watermark = new Image();

tail.src = document.getElementById("tail").src;
tail.onload = function() {
ctx.drawImage(tail,0,0);
belly.src = document.getElementById("belly").src;
belly.onload = function() {
ctx.drawImage(belly,0,0);
leftear.src = document.getElementById("leftear").src;
leftear.onload = function() {
ctx.drawImage(leftear,0,0);
body.src = document.getElementById("body").src;
body.onload = function() {
ctx.drawImage(body,0,0);
eye.src = document.getElementById("eye").src;
eye.onload = function() {
ctx.drawImage(eye,0,0);
hair.src = document.getElementById("hair").src;
hair.onload = function() {
ctx.drawImage(hair,0,0);
rightear.src = document.getElementById("rightear").src;
rightear.onload = function() {
ctx.drawImage(rightear,0,0);
watermark.src = document.getElementById("watermark").src;
watermark.onload = function() {
ctx.drawImage(watermark,0,0);
var image = squirrel_canvas.toDataURL("image/png");
if (type == "new_tab") { 
  var newTab = window.open();
  newTab.document.write('<img src="'+image+'" width="1000" height="1000"/>');
}
else { 
var a  = document.createElement('a');
a.href = image;
a.download = "squirrel.png"; 
a.click();
}

}
}
}
}
}
}
}
}

}