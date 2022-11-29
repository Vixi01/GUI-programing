// File: my.js
// GUI Assignment: Dynamic Multiplication Table
// Brian Cheng, UMass Lowell Computer Science, Haojen_cheng@student.uml.edu
// What to submit: all program code
// Copyright (c) 2022 by Brian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Brian on Nov 1, 2022 at 8:30 pM
var countTable = 1;
function Table() {

  let fr = document.getElementById("fnr").value; // Getting the input value from form
  let lr = document.getElementById("lnr").value;
  let fc = document.getElementById("fnc").value;
  let lc = document.getElementById("lnc").value;



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


  let l = document.createElement("li");
  l.innerHTML = '<a href=' + "#tabs-" + countTable + '>' + fr + " to " + lr + " by " + fc + " to " + lc + '</a>' + '<span class="ui-icon ui-icon-close" role="presentation">Remove Tab</span>';
  l.setAttribute("class", "tabsli");
  $("div#tabs ul").append(
    l
  );

  myClone = table.cloneNode(true);
  let d = document.createElement("div");
  d.setAttribute("id", "tabs-" + countTable);
  d.setAttribute("class", "tabsit");

  $("div#tabs").append(
    d
  );
  d.appendChild(myClone);



  $("div#tabs").tabs("refresh");
  $("#tabs").tabs({ active: countTable - 1 });
  countTable = countTable + 1;

  if ($('ul#items li').length >= 1) {
    $("#tabs").css({
      'visibility': 'visible'
    });
    $(".delete").css({
      'visibility': 'visible'
    });
  }
}


function deleteall() {

  const t = document.querySelectorAll('.tabsit');
  t.forEach(t => {
    t.remove();
  });

  const r = document.querySelectorAll('.tabsli');
  r.forEach(r => {
    r.remove();
  });

  countTable = 1;
  if (!($('ul#items li').length >= 1)) {
    $("#tabs").css({
      'visibility': 'hidden'
    });
    $(".delete").css({
      'visibility': 'hidden'
    });
  }

};

$(function () {
  var tabs = $("#tabs").tabs();
  tabs.delegate("span.ui-icon-close", "click", function () {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panelId).remove();


    countTable = countTable - 1;
    if (!($('ul#items li').length >= 1)) {
      $("#tabs").css({
        'visibility': 'hidden'
      });
      $(".delete").css({
        'visibility': 'hidden'
      });
    }

    tabs.tabs("refresh");
  });

});

function removeTable() // remove the last table
{
  var tbl = document.getElementById("myTable");
  if (tbl)
    tbl.parentNode.removeChild(tbl);
}

function isFloat(n) {//check is float
  return Number(n) === n && n % 1 !== 0;
}