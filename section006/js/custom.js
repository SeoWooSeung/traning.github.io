const MBTN = document.querySelector('.mbtn');
const GNB = document.querySelector('.gnb');

MBTN.addEventListener('click', function () {
    GNB.classList.toggle('on')
})

const MLI = document.querySelectorAll('.gnb>ul>li>a');

MLI.forEach(function (it, idx) {
    it.addEventListener('click', function (e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('on');
    });
})
