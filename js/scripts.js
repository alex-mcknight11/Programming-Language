$(document).ready(function() {
  $("#submitButton").submit(function(event) {
    event.preventDefault();


const movie = $("input:radio[name=movie]:checked").val();

const wordAssociation = $("#wordAssociation").val();

const beach = $("input:radio[name=beach]:checked").val();

const eggs = $("#eggs").val();

const favoriteColor = $("#color").val();

console.log(movie);
console.log(wordAssociation);
console.log(beach);
console.log(eggs);

let cSum = 0;
let javascriptSum = 0;
let rubySum = 0;
let pythonSum = 0;
let wrenSum = 0;

if (movie === "cOption") {
  cSum = cSum + 1;
}

if (movie === "javascriptOption") {
  javascriptSum = javascriptSum + 1;
}

if (movie === "rubyOption") {
  rubySum = rubySum + 1;
}

if (movie === "pythonOption") {
  pythonSum = pythonSum + 1;
}

if (movie === "wrenOption") {
  wrenSum = wrenSum + 1;
}

if (wordAssociation === "cOption") {
  cSum = cSum + 1;
}

if (wordAssociation === "javascriptOption") {
  javascriptSum = javascriptSum + 1;
}

if (wordAssociation === "rubyOption") {
  rubySum = rubySum + 1;
}

if (wordAssociation === "pythonOption") {
  pythonSum = pythonSum + 1;
}

if (wordAssociation === "wrenOption") {
  wrenSum = wrenSum + 1;
}

if (beach === "cOption") {
  cSum = cSum + 1;
}

if (beach === "javascriptOption") {
  javascriptSum = javascriptSum + 1;
}

if (beach === "rubyOption") {
  rubySum = rubySum + 1;
}

if (beach === "pythonOption") {
  pythonSum = pythonSum + 1;
}

if (beach === "wrenOption") {
  wrenSum = wrenSum + 1;
}

if (beach === "cOption") {
  cSum = cSum + 1;
}

if (eggs === "javascriptOption") {
  javascriptSum = javascriptSum + 1;
}

if (eggs === "rubyOption") {
  rubySum = rubySum + 1;
}

if (eggs === "pythonOption") {
  pythonSum = pythonSum + 1;
}

if (eggs === "wrenOption") {
  wrenSum = wrenSum + 1;
}

console.log(cSum);
console.log(javascriptSum);
console.log(rubySum);
console.log(pythonSum);
console.log(wrenSum);

if (cSum > javascriptSum && cSum > rubySum && cSum > pythonSum && cSum > wrenSum) {
  $('#cResult').show();
}

if (javascriptSum > cSum && javascriptSum > rubySum && javascriptSum > pythonSum && javascriptSum > wrenSum) {
  $('#javascriptResult').show();
}

if (rubySum > cSum && rubySum > javascriptSum && rubySum > pythonSum && rubySum > wrenSum) {
  $('#rubyResult').show();
}

if (pythonSum > cSum && pythonSum > javascriptSum && pythonSum > rubySum && pythonSum > wrenSum) {
  $('#pythonResult').show();
}

if (wrenSum > cSum && wrenSum > javascriptSum && wrenSum > rubySum && wrenSum > pythonSum) {
  $('#wrenResult').show();
}

});
});