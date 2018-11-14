function showImage (event) {
document.getElementById('splash').style.display = 'block';
document.getElementById('splash').innerHTML = event.target.outerHTML; 
}

function escape (event) {
   document.getElementById('splash').style.display = 'none'; 
}

document.getElementById('main').addEventListener('click', showImage);
document.getElementById('splash').addEventListener('click', escape);
