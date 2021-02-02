let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
readMore.addEventListener('click', function(){ showInfo1(readMore, moreInfo); });
moreInfo.addEventListener('mouseover', function(){ showInfo2(moreInfo); });

function showInfo1(eventTarget1, eventTarget2) {
  eventTarget1.style.backgroundColor = "red";
  eventTarget2.innerHTML = "This is the new info you requested!";
  eventTarget2.style.display = "block";  
}

function showInfo2(eventTarget) {
  eventTarget.style.color = "blue";
}