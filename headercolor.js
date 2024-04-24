function stickyNav() {
    var nav = document.getElementById("main-nav");
    var header = document.getElementById("main-header");
    var sticky = header.offsetHeight;

    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        nav.style.backgroundColor = getBackgroundColor(window.pageYOffset);
    } else {
        nav.classList.remove("sticky");
        nav.style.backgroundColor = "";
    }
}

function getBackgroundColor(scrollPosition) {
    var header = document.getElementById("main-header");
    var sticky = header.offsetHeight;
    var maxScroll = document.body.offsetHeight - window.innerHeight;
    var scrollPercent = (scrollPosition - sticky) / (maxScroll - sticky);
    var colors = [
        [13, 141, 192],
        [255, 0, 0],
        [255, 0, 0],
        [244, 121, 32],
        [244, 121, 32],
        [13, 141, 192]
    ];
    var interpolatedColor = interpolateColor(colors, scrollPercent);
    return `rgb(${interpolatedColor.join(',')})`;
}

function interpolateColor(colors, progress) {
    var numColors = colors.length - 1;
    var colorIndex = progress * numColors;
    var startColorIndex = Math.floor(colorIndex);
    var endColorIndex = Math.ceil(colorIndex);
    var colorStart = colors[startColorIndex];
    var colorEnd = colors[endColorIndex];
    var stepProgress = colorIndex - startColorIndex;
    var interpolatedColor = [];
    for (var i = 0; i < 3; i++) {
        var component = Math.round(colorStart[i] + (colorEnd[i] - colorStart[i]) * stepProgress);
        interpolatedColor.push(component);
    }
    return interpolatedColor;
}

window.onscroll = function() {
    stickyNav();
};
