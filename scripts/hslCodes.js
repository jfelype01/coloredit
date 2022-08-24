hsl.addEventListener('input', function() {
    can.style.backgroundColor = `hsl(${hsl.value})`
    let color = hexAndHslToRgb(can.style.backgroundColor);
    rgb.value = color;

    color = rgb.value.split(', ');
    for (let i = 0; i < color.length; i++) {
        color[i] = parseInt(color[i])
    }

    hex.value = `#${rgbToHex(rgb.value)}`;
})

hsl.onchange = () => {
    let hslValue = hsl.value.split(',');

    if(hslValue.length > 3) {
        hsl.value = hslValue[0]
        for (let i = 1; i < 3; i++) {
            hsl.value += `,${hslValue[i]}`
        }
    }

    hslValue = hsl.value.split(',');

    if(hslValue.length === 3) {
        if(hslValue[1][hslValue[1].length - 1] !== "%") {
            hslValue[1] += "%"
        }
        if(hslValue[2][hslValue[2].length - 1] !== "%") {
            hslValue[2] += "%"
        }
        hsl.value = hslValue.join(', ')
    } 
}