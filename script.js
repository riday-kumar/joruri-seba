function elementId(id) {
  const catchId = document.getElementById(id);
  return catchId;
}

function elementClass(clsName) {
  let catchClasses = document.getElementsByClassName(clsName);
  return catchClasses;
}

elementId("emergencyNumbers").addEventListener("click", function (e) {
  // increase Love in the nev bar
  const checkHeart = e.target.className;
  if (checkHeart.includes("heart")) {
    let initialLove = Number(elementId("love").innerText);
    initialLove++;
    console.log(initialLove);
    elementId("love").innerText = initialLove;
  }
});
