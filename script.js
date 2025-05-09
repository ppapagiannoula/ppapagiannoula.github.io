$(document).ready(function () {
    $(".title").lettering();
});

$(document).ready(function () {
    animation();
}, 1000);

function animation() {
    var title1 = new TimelineMax();
    title1.staggerFromTo(".title span", 0.5,
        { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
        { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05);
}