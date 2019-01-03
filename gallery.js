observerMain();

function showImage(event) {
    if (!event.target.src) return false;
    let index, prevPrev, prev, current, next, nextNext;
    let all = document.querySelectorAll('.image-gallery > img');
    for (i = 0; i < all.length; i++) {
        if (all[i].src == event.target.src) {
            console.log(i);
            index = i;
        }
    }

    prev = index - 1;
    prevPrev = index - 2;
    current = index;
    next = index + 1;
    nextNext = index + 2;

    if (index == 0) {
        prev = all.length - 1;
        prevPrev = all.length - 2;
    }

    if (index == 1) {
        prevPrev = all.length - 1;
    }

    if (index == all.length - 1) {
        next = 0;
        nextNext = 1;
    }

    if (index == all.length - 2) {
        nextNext = 0;
    }

    /*    console.log(`
    index: ${index};
    prevPrev: ${prevPrev};
    prev: ${prev};
    current: ${current};
    next: ${next};
    nextNext: ${nextNext};
    `)*/

    document.getElementById('splash').style.display = 'flex';
    document.getElementById('splsh').src = event.target.src;
    document.querySelector('#prev-prev > img').src = all[prevPrev].src;
    document.querySelector('#prev > img').src = all[prev].src;
    document.querySelector('#current > img').src = all[current].src;
    document.querySelector('#next > img').src = all[next].src;
    document.querySelector('#next-next > img').src = all[nextNext].src;

}

function escape(event) {
    document.getElementById('splash').style.display = 'none';
}

function observerMain() {
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

document.getElementById('gallery').addEventListener('click', showImage);
document.getElementById('close').addEventListener('click', escape);
