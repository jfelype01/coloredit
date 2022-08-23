
hex.addEventListener('input', function() {
    if (hex.value[0] === '#') {
        can.style.backgroundColor = `${hex.value}`
    }
    else {
        can.style.backgroundColor = `#${hex.value}`;
    }

    let color = can.style.backgroundColor;

    rgb.value = hexAndHslToRgb(color)

    color = rgb.value.split(', ');
    for (let i = 0; i < color.length; i++) {
        color[i] = parseInt(color[i])
    }

    hsl.value = rgbToHsl(color[0], color[1], color[2])
});


hex.onchange = () => {
    
    if (hex.value.length < 6 || (hex.value.length < 7 && hex.value[0] === '#') || hex.value.length > 6) {
        let colorx = `${can.style.backgroundColor}`
        if (colorx[3] === 'a'){
            hex.value = rgbToHex(`${colorx.slice(5, -1)}`)
        } else {
            hex.value = rgbToHex(`${colorx.slice(4, -1)}`)
    }}
    if(hex.value[0] !== '#') {
        hex.value = `#${hex.value}`
    }
    if (hex.value.length > 6) {
        hex.value = hex.value.slice(0, 7)
        can.style.backgroundColor = hex.value
        rgb.value = hexAndHslToRgb(can.style.backgroundColor)
    }
}

