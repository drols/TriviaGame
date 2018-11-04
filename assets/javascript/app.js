var marioOrigin = document.getElementById("donkey-kong");
var doom = document.getElementById("money-color");
var skyrim = document.getElementById("got");
var gaben = document.getElementById("microsoft");
var grandpa = document.getElementById("miyamoto");
var playstation = document.getElementById("nintendo-partner");
var teamFortress = document.getElementById("quake");

var correctAnswers = [marioOrigin, doom, skyrim, gaben, grandpa, playstation, teamFortress]


var rad = document.myForm.myRadios;
var prev = null;

for(var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev)? console.log(prev.value):null;
        if(this !== prev) {
            prev = this;
        }
        console.log(this.value)
    });
}