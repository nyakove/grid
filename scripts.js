observer_test();

function showImage(event) {
    if (!event.target.src) return false;
    document.getElementById('splash').style.display = 'block';
    //document.getElementById('splash').innerHTML = event.target.outerHTML;
    document.getElementById('splsh').src = event.target.src;
    //console.log(event.target);
    //console.log(event.target.src);

}

function escape(event) {
    document.getElementById('splash').style.display = 'none';
}

/*
function animate() {
    if (document.getElementById('splash').style.display == 'block') {
      document.getElementById('splash').style.transition = 'all 2s ease 0s'  
    }
    else {
        document.getElementById('splash').style.transition = ''
    }
}
*/
function observer_test() {
    let target = document.querySelector('#splash');

    function callback() {
        //console.log('Mutation!')
        //document.getElementById("test").innerHTML = '<div style=\'width: 50%; height: 50%; background-color: green;\'></div>'
        document.getElementById('splash-image').style.display = 'block';
    }
    let observer = new MutationObserver(callback);

    let config = {
        attributes: true,
    }

    observer.observe(target, config);
}

document.getElementById('main').addEventListener('click', showImage);
document.getElementById('close').addEventListener('click', escape);
//document.getElementById('main').addEventListener('click', animate);
