$(document).ready(function() {
}

const movie = $("input:radio[name=movie]:checked").val();

const wordAssociation = $("#wordAssociation").val();

const beach = $("input:radio[name=beach]:checked").val();

const eggs = $("#eggs").val();

const favoriteColor = $("#color").val();

let cOption = 0;
let javacriptOption = 0;
let rubyOption = 0;
let pythonOption = 0;
let wrenOption = 0;

if (cOption > javacriptOption && cOption > rubyOption && cOption > pythonOption && cOption > wrenOption) {
  $('#cResults').show();
}
