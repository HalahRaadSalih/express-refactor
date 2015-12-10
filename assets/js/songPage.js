window.onload = function(){
  var currentData;
  window.localStorage.storyData ? currentData = JSON.parse(window.localStorage.storyData) : currentData = ""

  var verse = document.querySelector('h1');

  if (window.location.pathname === '/song/1' && currentData.verse1 !== "") {
    verse.innerText = currentData.verse1;
  }

  if (window.location.pathname === '/song/1/2' && currentData.verse2 !== "") {
    verse.innerText = currentData.verse2;
  }

  if (window.location.pathname === '/song/1/2/3' && currentData.verse3 !== "") {
    verse.innerText = currentData.verse3;
  }

}
