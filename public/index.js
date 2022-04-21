//function for sticky/floating header
window.onscroll = function() {myFunction()};

const cHeader = document.getElementById('critterpedia-header')

const sticky = cHeader.offSetTop;

function myFunction() {
    if(window.pageYOffset > sticky) {
        cHeader.classList.add('sticky');
    }else{
        cHeader.classList.remove('sticky');
    }
}


function clickMap() {
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(openGoogleMaps);
}}

function openGoogleMaps(position) {
  console.log('opening goog')
  window.location =`https://maps.google.com?q=${position.coords.latitude},${position.coords.longitude}`
}
