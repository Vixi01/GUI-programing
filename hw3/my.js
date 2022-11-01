function Table() {

  let fr= +document.getElementById("fnr").value;
  let lr= +document.getElementById("lnr").value;
  let fc= +document.getElementById("fnc").value;
  let lc= +document.getElementById("lnc").value;
  console.log(typeof(fr));
  if(isNaN(fr)|| fr == "")
    return;
  if(isNaN(lr)|| lr == "")
    return;
  if(isNaN(fc)|| fc == "")
    return;
  if(isNaN(lc)|| lc == "")
    return;
  
  // fr = +fr;
  // lr = +lr;
  // fc = +fc;
  // lc = +lc;

  if (fr > lr)
    return;
  if (fc > lc)
    return;

  
  
  
  var tbl = document.createElement("table");
  tbl.setAttribute("id", "myTable");
  const tblBody = document.createElement("tbody");
  const row2 = document.createElement("tr");
  tblBody.appendChild(row2);
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);


  let table = document.getElementById("myTable");
  let row = table.insertRow(0);

  for (let i = fr; i <= lr; i++) {
    row.insertCell(i - fr).innerHTML = i * 1;
    table.rows[0].cells[i - fr].setAttribute("id", "thead");
  }

  row.insertCell(0).innerHTML = " ";
  table.rows[0].cells[0].setAttribute("id", "thead");
  for (let i = fc; i <= lc; i++) {
    row = table.insertRow(i-fc+1);
    row.insertCell(0).innerHTML = i * 1;
    table.rows[i-fc+1].cells[0].setAttribute("id", "thead");
    for (let j = fr; j <= lr; j++) {
      row.insertCell(j - fr+1).innerHTML = i*j;
    }
  }
}

function removeTable()
{
  var tbl = document.getElementById("myTable");
  if (tbl)
    tbl.parentNode.removeChild(tbl);
}
  