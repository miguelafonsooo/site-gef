function handleHeaderColor() {
    var nav = document.getElementById("main-nav");
    var header = document.getElementById("main-header");
    var submenus = document.querySelectorAll(".submenu");

    var threshold = header.offsetHeight * 0.5;

    if (window.pageYOffset > threshold) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

    var scrollPercent = (window.pageYOffset - threshold) / (document.body.offsetHeight - window.innerHeight - threshold);

    var colors = [
        [13, 141, 192], 
        [255, 0, 0],    
        [244, 121, 32], 
        [13, 141, 192] 
    ];

    var interpolatedColor = interpolateColor(colors, scrollPercent);

    nav.style.backgroundColor = `rgb(${interpolatedColor.join(',')})`;

    submenus.forEach(function(submenu) {
        submenu.style.backgroundColor = `rgb(${interpolatedColor.join(',')})`;
    });
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
    handleHeaderColor();
};
