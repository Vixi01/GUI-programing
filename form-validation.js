// File: form-validation.js
// GUI Assignment: Dynamic Multiplication Table 
// Brian Cheng, UMass Lowell Computer Science, Haojen_cheng@student.uml.edu
// What to submit: all program code
// Copyright (c) 2022 by Brian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Brian on Nov 30, 2022 at 12:12 AM
$().ready(function () {

  $.validator.addMethod("greaterThan", // adding greater than to rule
    function (value, element, param) {
      var $otherElement = $(param);
      return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
    });

  $("#inputform").validate({
    rules: {                    // setting rules for the textbox
      fnr: {
        required: true,
        pattern: /^[-+]?\d+$/,  // use regular expression to limit to integers 
        min: -100,
        max: 100
      },
      lnr: {
        required: true,
        pattern: /^[-+]?\d+$/,  // use regular expression to limit to integers 
        min: -100,
        max: 100,
        greaterThan: "#fnr"
      },
      fnc: {
        required: true,
        pattern: /^[-+]?\d+$/,  // use regular expression to limit to integers 
        min: -100,
        max: 100
      },
      lnc: {
        required: true,
        pattern: /^[-+]?\d+$/,  // use regular expression to limit to integers 
        min: -100,
        max: 100,
        greaterThan: "#fnc"
      }
    },
    messages: {       // setting the error message for the textbox
      fnr: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 100.",
        min: "Please enter a value greater than or equal to -100."
      },
      lnr: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 100.",
        min: "Please enter a value greater than or equal to -100.",
        greaterThan: "Please enter number greater or equal to Min value."
      },
      fnc: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 100.",
        min: "Please enter a value greater than or equal to -100."
      },
      lnc: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 100.",
        min: "Please enter a value greater than or equal to -100.",
        greaterThan: "Please enter number greater or equal to Min value."
      }
    },
    submitHandler: function (form) {  // call removeTable() and Table()when the form submit
      removeTable();
      Table();
    }
  });

});

