
// File: my.js
// GUI Assignment: Dynamic Multiplication Table
// Brian Cheng, UMass Lowell Computer Science, Haojen_cheng@student.uml.edu
// What to submit: all program code
// Copyright (c) 2022 by Brian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Brian on Nov 1, 2022 at 8:30 pM

function Table() {

  let fr= document.getElementById("fnr").value; // Getting the input value from form
  let lr= document.getElementById("lnr").value;
  let fc= document.getElementById("fnc").value;
  let lc= document.getElementById("lnc").value;

  if(isNaN(fr)|| (fr =="")){  // checking if there is errors in the input value
    document.getElementById("notification").innerHTML="Warning: Minimum Row value missing or error!";
    return;
  }
  if(isNaN(lr)|| (lr =="")){
    document.getElementById("notification").innerHTML="Warning: Maximum Row value missing or error!";
    return;
  }
  if(isNaN(fc)|| (fc =="")){
    document.getElementById("notification").innerHTML="Warning: Minimum column value missing or error!";
    return;
  }
  if(isNaN(lc)|| (lc =="")){
    document.getElementById("notification").innerHTML="Warning: Maximum column value missing or error!";
    return;
  }
  
  fr = +fr;     // change from string to int
  lr = +lr;
  fc = +fc;
  lc = +lc;

  

  if(isFloat(fr)){  // checking if the input value is float
    document.getElementById("notification").innerHTML="Warning: Minimum Row value missing or error!";
    return;
  }
  if(isFloat(lr)){
    document.getElementById("notification").innerHTML="Warning: Maximum Row value missing or error!";
    return;
  }
  if(isFloat(fc)){
    document.getElementById("notification").innerHTML="Warning: Minimum column value missing or error!";
    return;
  }
  if(isFloat(lc)){
    document.getElementById("notification").innerHTML="Warning: Maximum column value missing or error!";
    return;
  }

  if (fr > lr){    // check if the value in max is greater than in min
    document.getElementById("notification").innerHTML="Warning: Mini value greater than Max value in row!";
    return;
  }
  if (fc > lc){
    document.getElementById("notification").innerHTML="Warning: Mini value greater than Max value in column!";
    return;
  }

  
  
  
  var tbl = document.createElement("table"); // start to make the table
  tbl.setAttribute("id", "myTable");
  const tblBody = document.createElement("tbody");
  const row2 = document.createElement("tr");
  tblBody.appendChild(row2);
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.parentNode.insertBefore(tbl,document.getElementById("alert"));

  let table = document.getElementById("myTable");   
  let row = table.insertRow(0);

  for (let i = fr; i <= lr; i++) {     // the column header
    row.insertCell(i - fr).innerHTML = i * 1;
    table.rows[0].cells[i - fr].setAttribute("id", "thead");
  }

  row.insertCell(0).innerHTML = " ";  // blank block
  table.rows[0].cells[0].setAttribute("id", "thead");
  for (let i = fc; i <= lc; i++) {
    row = table.insertRow(i-fc+1);
    row.insertCell(0).innerHTML = i * 1;  // the row header 
    table.rows[i-fc+1].cells[0].setAttribute("id", "thead");
    for (let j = fr; j <= lr; j++) {
      row.insertCell(j - fr+1).innerHTML = i*j; // the table content
      if((i-fc+1)%2 == 0)                     
        table.rows[i-fc+1].cells[j - fr+1].setAttribute("id", "odd");// the different color on odd rows
    }
  }


}

function removeAlert(){ // remove the warining message
  document.getElementById("notification").innerHTML="";
}
function removeTable() // remove the last table
{
  var tbl = document.getElementById("myTable");
  if (tbl)
    tbl.parentNode.removeChild(tbl);
}

function isFloat(n){//check is float
    return Number(n) === n && n % 1 !== 0;
}