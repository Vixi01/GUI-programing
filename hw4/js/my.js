// File: my.js
// GUI Assignment: Dynamic Multiplication Table
// Brian Cheng, UMass Lowell Computer Science, Haojen_cheng@student.uml.edu
// What to submit: all program code
// Copyright (c) 2022 by Brian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Brian on Nov 30, 2022 at 12:12 AM
var countTable = 1;
var cn = 1;
var fr;
var lr;
var fc;
var lc;

function Table() {

  fr = document.getElementById("fnr").value; // Getting the input value from form
  lr = document.getElementById("lnr").value;
  fc = document.getElementById("fnc").value;
  lc = document.getElementById("lnc").value;



  fr = +fr;     // change from string to int
  lr = +lr;
  fc = +fc;
  lc = +lc;


  var tbl = document.createElement("table"); // start to make the table
  tbl.setAttribute("id", "myTable");
  const tblBody = document.createElement("tbody");
  const row2 = document.createElement("tr");
  tblBody.appendChild(row2);
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.parentNode.insertBefore(tbl, document.getElementById("tabs"));

  let table = document.getElementById("myTable");
  let row = table.insertRow(0);

  for (let i = fr; i <= lr; i++) {     // the column header
    row.insertCell(i - fr).innerHTML = i * 1;
    table.rows[0].cells[i - fr].setAttribute("class", "thead");
    table.rows[0].cells[i - fr].setAttribute("id", "frow");
  }

  row.insertCell(0).innerHTML = " ";  // blank block
  table.rows[0].cells[0].setAttribute("id", "thead");
  for (let i = fc; i <= lc; i++) {
    row = table.insertRow(i - fc + 1);
    row.insertCell(0).innerHTML = i * 1;  // the row header 
    table.rows[i - fc + 1].cells[0].setAttribute("class", "thead");
    table.rows[i - fc + 1].cells[0].setAttribute("id", "fcolumn");
    for (let j = fr; j <= lr; j++) {
      row.insertCell(j - fr + 1).innerHTML = i * j; // the table content
      if ((i - fc + 1) % 2 == 0)
        table.rows[i - fc + 1].cells[j - fr + 1].setAttribute("id", "odd");// the different color on odd rows
    }
  }


}


function removeTable() // remove the last table
{
  var tbl = document.getElementById("myTable");
  if (tbl)
    tbl.parentNode.removeChild(tbl);
}

function isFloat(n) {//check is float
  return Number(n) === n && n % 1 !== 0;
}

function AutoSubmit() { // submit the form if valid
  if ($("form#inputform").valid() == true) {
    $("form#inputform").submit();
  }
}
function save() {
  let table = document.getElementById("myTable");
  myClone = table.cloneNode(true);
  createTabs(myClone);
}

function createTabs(myClone) {  // create a tab with the table

  let l = document.createElement("li");
  l.innerHTML = '<a href=' + "#tabs-" + cn + '>' + fr + " to " + lr + " by " + fc + " to " + lc + '</a>' + '<input  type="checkbox">';
  l.setAttribute("name", "tb" + cn);
  $("div#tabs ul").append(
    l
  );


  let d = document.createElement("div");
  d.setAttribute("id", "tabs-" + cn);
  d.setAttribute("name", "tb" + cn + "n");

  $("div#tabs").append(
    d
  );
  d.appendChild(myClone);



  $("div#tabs").tabs("refresh");
  $("#tabs").tabs({ active: countTable - 1 });
  countTable = countTable + 1;
  cn = cn + 1;
  if ($('ul#items li').length >= 1) {
    $("#tabs").css({
      'visibility': 'visible'
    });
    $(".delete").css({
      'visibility': 'visible'
    });
  }
}
$("#tabs").tabs();    // let the plugin tabs to function


function deleteall() {  // delete all selet tabs



  const r = document.querySelectorAll("input[type=checkbox]:checked");


  r.forEach(r => {
    let a = r.parentElement.getAttribute("name");
    $("[name='" + a + "n" + "']").remove();
    r.parentElement.remove();
    countTable = countTable - 1;
  });


  if (!($('ul#items li').length >= 1)) {
    $("#tabs").css({
      'visibility': 'hidden'
    });
    $(".delete").css({
      'visibility': 'hidden'
    });
  }

};
