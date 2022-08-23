

rgb.addEventListener('input', function() {
    can.style.backgroundColor = `rgb(${rgb.value})`;
    let color = rgbToHex(rgb.value)
    hex.value = '#'+color

    color = rgb.value.split(', ');
    for (let i = 0; i < color.length; i++) {
        if (color[i] === '') {
            color[i] = undefined;

        } else {
            color[i] = parseInt(color[i]);
        }
    }

    hsl.value = rgbToHsl(color[0], color[1], color[2])
});

rgb.onchange = () => {
    if (rgb.value.length > 13) {
        rgb.value = rgb.value.slice(0, 13)
        can.style.backgroundColor = `rgb(${rgb.value})`
    }
}