$(document).ready(function() {
  $("#Submit").submit(function(event) {
    event.preventDefault();
    console.log("test")
  });
const movie = $("input:radio[name=movie]:checked").val();

const wordAssociation = $("#wordAssociation").val();

const beach = $("input:radio[name=beach]:checked").val();

const eggs = $("#eggs").val();

const favoriteColor = $("#color").val();

let cSum = 0;
let javacriptSum = 0;
let rubySum = 0;
let pythonSum = 0;
let wrenSum = 0;

if (movie === "cOption") {
  cSum = cSum + 1
}

if (movie === "javascript") {
  javascriptSum = javascriptSum + 1
}

if (cOption > javacriptSum && cSum > rubySum && cSum > pythonSum && cSum > wrenSum) {
  $('#cResults').show();
}
});