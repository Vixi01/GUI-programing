// File: slider.js
// GUI Assignment: Dynamic Multiplication Table
// Brian Cheng, UMass Lowell Computer Science, Haojen_cheng@student.uml.edu
// What to submit: all program code
// Copyright (c) 2022 by Brian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Brian on Nov 30, 2022 at 12:12 AM
$().ready(function () {

  $("#slider_fnr").slider({          // create the fnr slider
    min: -100,
    max: 100,
    slide: function (event, ui) {    // Binding textbox to slider
      $("#fnr").val(ui.value);
      AutoSubmit()
    }
  });
  bind("#slider_fnr", "#fnr");


  $("#slider_lnr").slider({           // create the lnr slider
    min: -100,
    max: 100,
    slide: function (event, ui) {     // Binding textbox to slider
      $("#lnr").val(ui.value);
      AutoSubmit()
    }
  });
  bind("#slider_lnr", "#lnr");

  $("#slider_fnc").slider({           // create the fnc slider
    min: -100,
    max: 100,
    slide: function (event, ui) {     // Binding textbox to slider
      $("#fnc").val(ui.value);
      AutoSubmit()
    }
  });
  bind("#slider_fnc", "#fnc");



  $("#slider_lnc").slider({           // create the lnc slider
    min: -100,
    max: 100,
    slide: function (event, ui) {     // Binding textbox to slider
      $("#lnc").val(ui.value);
      AutoSubmit()
    }
  });
  bind("#slider_lnc", "#lnc");


});
function bind(x, b) {                    // Binding slider to textbox

  var initialValue = $(x).slider("option", "value");
  $(b).val(initialValue);
  $(b).change(function () {
    var newVal = $(this).val();
    $(x).slider("option", "value", newVal);
    AutoSubmit()
  });
};