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

