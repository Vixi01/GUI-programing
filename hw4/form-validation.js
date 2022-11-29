$().ready(function () {

  $.validator.addMethod("greaterThan",
    function (value, element, param) {
      var $otherElement = $(param);
      return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
    });

  $("#inputform").validate({
    rules: {
      fnr: {
        required: true,
        pattern: /^[-+]?\d+$/,  // use regular expression to limit to integers 
        min: -500,
        max: 500
      },
      lnr: {
        required: true,
        pattern: /^[-+]?\d+$/,
        min: -500,
        max: 500,
        greaterThan: "#fnr"
      },
      fnc: {
        required: true,
        pattern: /^[-+]?\d+$/,
        min: -500,
        max: 500
      },
      lnc: {
        required: true,
        pattern: /^[-+]?\d+$/,
        min: -500,
        max: 500,
        greaterThan: "#fnc"
      }
    },
    messages: {
      fnr: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 500.",
        min: "Please enter a value greater than or equal to -500."
      },
      lnr: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 500.",
        min: "Please enter a value greater than or equal to -500.",
        greaterThan: "Please enter number greater or equal to Min value."
      },
      fnc: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 500.",
        min: "Please enter a value greater than or equal to -500."
      },
      lnc: {
        required: "Please enter a value.",
        pattern: "Please enter only integers.",
        max: "Please enter a value less than or equal to 500.",
        min: "Please enter a value greater than or equal to -500.",
        greaterThan: "Please enter number greater or equal to Min value."
      }
    },
    submitHandler: function (form) {
      removeTable();
      Table();
    }
  });

});

