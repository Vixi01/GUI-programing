// File: my.js
// GUI Assignment: scrabble table
// Brian Cheng, UMass Lowell Computer Science, Haojen_cheng@student.uml.edu
// What to submit: all program code
// Copyright (c) 2022 by Brian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Brian on Dec 20, 2022 at 11:02 PM
const text_original = { // Json data
  "pieces": [
    { "letter": "A", "value": 1, "amount": 9 },
    { "letter": "B", "value": 3, "amount": 2 },
    { "letter": "C", "value": 3, "amount": 2 },
    { "letter": "D", "value": 2, "amount": 4 },
    { "letter": "E", "value": 1, "amount": 12 },
    { "letter": "F", "value": 4, "amount": 2 },
    { "letter": "G", "value": 2, "amount": 3 },
    { "letter": "H", "value": 4, "amount": 2 },
    { "letter": "I", "value": 1, "amount": 9 },
    { "letter": "J", "value": 8, "amount": 1 },
    { "letter": "K", "value": 5, "amount": 1 },
    { "letter": "L", "value": 1, "amount": 4 },
    { "letter": "M", "value": 3, "amount": 2 },
    { "letter": "N", "value": 1, "amount": 5 },
    { "letter": "O", "value": 1, "amount": 8 },
    { "letter": "P", "value": 3, "amount": 2 },
    { "letter": "Q", "value": 10, "amount": 1 },
    { "letter": "R", "value": 1, "amount": 6 },
    { "letter": "S", "value": 1, "amount": 4 },
    { "letter": "T", "value": 1, "amount": 6 },
    { "letter": "U", "value": 1, "amount": 4 },
    { "letter": "V", "value": 4, "amount": 2 },
    { "letter": "W", "value": 4, "amount": 2 },
    { "letter": "X", "value": 8, "amount": 1 },
    { "letter": "Y", "value": 4, "amount": 2 },
    { "letter": "Z", "value": 10, "amount": 1 },
    { "letter": "_", "value": 0, "amount": 2 }
  ],
  "creator": "Ramon Meza"
};
const tileNum = 7;

// let text =text_original;

var text = JSON.parse(JSON.stringify(text_original)); //use shallow copy of the data
var Score = 0;
var highScore = 0;
let strarr = [" ", " ", " ", " ", " ", " ", " "];     // represent the word on the board
let str = "";
let tileArr = [];
for (let i = 0; i <= 26; i++) {
  tileArr.push(i);
}


function table() {                      // create the letter remain table
  document.querySelectorAll('#t1 tbody tr td').forEach(function (elem) {
    elem.remove();
  });
  let t = 0;
  let a = document.querySelectorAll("#t1 tbody tr");
  for (let i = 0; i < 9; i++, t++) {
    a[0].insertCell(i).innerHTML = text.pieces[t].letter + ": " + text.pieces[t].amount;
  }
  for (let i = 0; i < 9; i++, t++) {
    a[1].insertCell(i).innerHTML = text.pieces[t].letter + ": " + text.pieces[t].amount;
  }
  for (let i = 0; i < 9; i++, t++) {
    a[2].insertCell(i).innerHTML = text.pieces[t].letter + ": " + text.pieces[t].amount;
  }

}
function tilesEmpty(k) {
  return (text.pieces[k].amount == 0)
}

function tiles(b) {                   // create the tiles on holder

  let a = 0;
  for (let i = 0; i < b; i++) {
    if (tileArr.every(tilesEmpty)) {
      alert("Game over no tiles left!!");
      return
    }
    do {
      a = Math.floor(Math.random() * (26 - 0 + 1) + 0);

    } while (text.pieces[a].amount <= 0);

    text.pieces[a].amount = text.pieces[a].amount - 1;
    let tile = 0;
    tile = document.createElement("img"); // start to make the tile
    tile.setAttribute("class", "draggable");
    tile.setAttribute("id", a);
    tile.src = '../data/Scrabble_Tiles/Scrabble_Tile_' + text.pieces[a].letter + '.jpg';
    document.querySelector("#holder").appendChild(tile);
    $(".draggable").draggable({ revert: "invalid" });
  }

}
function Pdisplay() {               // display the line of word: current score and high score

  for (let i = 0; i < 7; i++) {                   // update the strarr[] with the tile on the board
    if ($("#tile_" + i).children().length == 1) {
      let a = $("#tile_" + i).children('img')[0];
      a = a.id;
      strarr[i] = text.pieces[a].letter;
    } else {
      strarr[i] = " ";
    }
  }

  str = strarr.join('');

  if (countWords(str) == 0) {                     // make strArr into string and chack if there is space in between 
    str = "       ";
    $("button[type=Submit]").attr("disabled", false);
  } else if (countWords(str) == 1) {
    str = strarr.join('');
    $("button[type=Submit]").attr("disabled", false);
  } else {
    var input = strarr.join('');
    var R = /(\w|\s)*\w(?=")|\w+/g;
    var output = input.match(R);
    str = output.join('..');
    $("button[type=Submit]").attr("disabled", true);
  }

  document.querySelector("#WordDisplay").innerHTML = "<p>Word: " + str + "   Score:" + Score + "  Highest score:" + highScore + "</p>"; // display the line
}


function submit() {                             // submit button
  let b = 7 - $("#holder").children().length;
  tiles(b);
  score();
  cleanboard();
  table();
  Pdisplay();
  $("button[type=Submit]").attr("disabled", true);
}

function cleanboard() {                         // clean up the tile on the board
  for (let i = 0; i < 7; i++) {
    if ($("#tile_" + i).children().length == 1) {
      let a = $("#tile_" + i).children('img')[0];
      a.remove();
    }
  }

  strarr = [" ", " ", " ", " ", " ", " ", " "];
}

function score() {                            // calculate the score
  let x = 1;
  for (let i = 0; i < 7; i++) {
    if ($("#tile_" + i).children().length == 1) {
      if (i == 1 || i == 5) { x = 2; } else { x = 1; }
      let a = $("#tile_" + i).children('img')[0];
      a = a.id;
      Score = Score + text.pieces[a].value * x;
    }
  }
  if (Score > highScore)
    highScore = Score;
}
function cleanholder() {                    // clean up the tiles on holder
  console.log($("#holder").children().length);
  for (let i = 0; i < $("#holder").children().length;) {
    let a = $("#holder").children('img')[0];
    a.remove();
  }

  strarr = [" ", " ", " ", " ", " ", " ", " "];
}

function restart() {                        // restart button
  Score = 0;
  cleanholder();
  cleanboard();
  text = JSON.parse(JSON.stringify(text_original));
  tiles(tileNum);
  table();
  Pdisplay()
  $("button[type=Submit]").attr("disabled", true);
}


$().ready(function () {                     // call functions when webpage load
  tiles(7);
  table();

  $(".droppable.tileBoard").droppable({     // droppable function for the board 

    tolerance: "pointer",
    accept: function () {
      if ($(this).children().length < 1) {
        return true;
      } else {
        return false;
      }
    },
    drop: function (event, ui) {            // reposition the drag item
      $(ui.draggable).css("top", "");       //
      $(ui.draggable).css("left", "");      //
      $(this).append(ui.draggable);         //
      Pdisplay();
    }

  });


  $(".droppable#holder").droppable({        // droppable function for holder
    tolerance: "pointer",
    drop: function (event, ui) {
      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);
      Pdisplay();
    }
  });


});

function countWords(str) {                    //code from stackoverflow to count how many words in a string
  var matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}
