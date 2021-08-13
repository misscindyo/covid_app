//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Copyright
// let copy = document.getElementById("date");

// document.write(new Date().getFullYear())

// Covid cases API
function getCases(){
  fetch('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure={"date":"date","newCases":"newCasesByPublishDate"}')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data[0])
    document.getElementById('cases').innerHTML = `${"Date: " + data.data[0].date + " " + "Cases: " + data.data[0].newCases}`;
  });
}
getCases();