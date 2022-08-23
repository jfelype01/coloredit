hsl.addEventListener('input', function() {
    can.style.backgroundColor = `hsl(${hsl.value})`
    let color = hexAndHslToRgb(can.style.backgroundColor);
    rgb.value = color;

    color = rgb.value.split(', ');
    for (let i = 0; i < color.length; i++) {
        color[i] = parseInt(color[i])
    }

    hex.value = rgbToHex(rgb.value);
})