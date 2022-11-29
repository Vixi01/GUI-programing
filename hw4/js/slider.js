$().ready(function () {

    $("#slider_fnr").slider({
      min: -500,
      max: 500,
      slide: function (event, ui) {
        $("#fnr").val(ui.value);
      }
    });
    bind("#slider_fnr","#fnr");
    

    $("#slider_lnr").slider({
      min: -500,
      max: 500,
      slide: function (event, ui) {
        $("#lnr").val(ui.value);
      }
    });
    bind("#slider_lnr","#lnr");

    $("#slider_fnc").slider({
      min: -500,
      max: 500,
      slide: function (event, ui) {
        $("#fnc").val(ui.value);
      }
    });
    bind("#slider_fnc","#fnc");



    $("#slider_lnc").slider({
      min: -500,
      max: 500,
      slide: function (event, ui) {
        $("#lnc").val(ui.value);
      }
    });
    bind("#slider_lnc","#lnc");

    
});
function bind(x,b) {

    var initialValue = $(x).slider("option", "value");
    $(b).val(initialValue);
    $(b).change(function () {
        var oldVal = $(x).slider("option", "value");
        var newVal = $(this).val();
        $(x).slider("option", "value", newVal);
    });
  
};
