const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.data-weather-box');
const contentbox = document.querySelector('.weather-content-box');
const searchbox = document.querySelector('.search-box');

search.addEventListener('click', (e) => {
    e.preventDefault();

    contentbox.style.height = '400px';
    weatherbox.style.visibility = 'visible';
    // searchbox.style.alignItems = 'center';

});
