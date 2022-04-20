//function for sticky/floating header
window.onscroll = function() {myFunction()};

const cHeader = document.getElementById('critterpedia-header')

const sticky = critterpedia-header.offSetTop;

function myFunction() {
    if(window.pageYOffset > sticky) {
        critterpedia-header.classList.add('sticky');
    }else{
        critterpedia-header.classList.remove('sticky');
    }
}


function clickMap() {
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(openGoogleMaps);
}}

function openGoogleMaps(position) {
  window.location =`https://maps.google.com?q=${position.coords.latitude},${position.coords.longitude}`
}
