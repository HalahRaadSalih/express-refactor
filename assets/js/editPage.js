window.onload = function(){
  var textInputs = document.querySelectorAll('form > p > input[type=text]');

  var currentData;

  window.localStorage.storyData ? currentData = JSON.parse(window.localStorage.storyData) : currentData = ""

  textInputs[0].value = currentData.verse1 || "";
  textInputs[1].value = currentData.verse2 || "";
  textInputs[2].value = currentData.verse3 || "";

  var submit = document.querySelector('form > p > input[type=submit]');
  var reset = document.querySelector('form > p > button');

  // update a story
  submit.addEventListener('click', function(e){
      window.localStorage.clear();

      storyData = {
        verse1: textInputs[0].value,
        verse2: textInputs[1].value,
        verse3: textInputs[2].value,
      }

      window.localStorage.storyData = JSON.stringify(storyData);
  })

  // reseting a story
  reset.addEventListener('click', function(e) {
    textInputs[0].value = "This is the song that never ends"
    textInputs[1].value = "Yea some people started it not knowing what it was"
    textInputs[2].value = "and they'll continue singing it because"
    submit.click();
  })

}
