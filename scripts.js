observer_test();

function showImage(event) {
    if (!event.target.src) return false;
    document.getElementById('splash').style.display = 'block';
    document.getElementById('splsh').src = event.target.src;
    //console.log(event.target);
    //console.log(event.target.src);

}

function escape(event) {
    document.getElementById('splash').style.display = 'none';
}

function observer_test() {
    let target = document.querySelector('#splash');

    function callback() {
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
