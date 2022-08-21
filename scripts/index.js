var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
var hsl = document.getElementById('hsl');
var can = document.getElementById('canva');

const hexCodes = {
    10() {return'a'},
    11() {return'b'},
    12() {return'c'},
    13() {return'd'},
    14() {return 'e'},
    15() {return'f'},
}
function rgbToHex(string) {
    let x = 0
    let array = []
    let str = string.replace(' ', '')
    str = str.split(',')
    if (str.length < 3) return ' '
    if (str[2] === ' ') return ' '
    if (str[2]==='') return ' '
    while (x < 3) {
        let element = parseInt(str[x], 10)
        let second = element % 16
        
        let first = (element - second) / 16
        if (second > 9) second = hexCodes[second]()
        if(first>9)first = hexCodes[first]()
        array.push(first)
        array.push(second)
        x++
    }

    return array.join('')
}

function hexAndHslToRgb(rgbColor) {
    if (rgbColor[3] === 'a') {
        rgbColor = rgbColor.split('rgba(')
        rgbColor = rgbColor.join('')
    } else {
        rgbColor = rgbColor.split('rgb(')
        rgbColor = rgbColor.join('')
    }
    return rgbColor.slice(0, rgbColor.length - 1)
}

function rgbToHsl(red, green, blue) {

    if (red === undefined || green === undefined || blue === undefined){
        return ' '
    }

    red /= 255;
    green /= 255;
    blue /= 255;





    let colorMin = Math.min(red, green, blue);
    let colorMax = Math.max(red, green, red);
    let variation = colorMax - colorMin;

    let h = 0;
    let s = 0;
    let l = 0;

    if (variation === 0){
        h = 0;
    } else if (colorMax === red) {
        h = ((green - blue)/variation) % 6;
    } else if (colorMax === green) {
        h = ((blue - red)/ variation) + 2;
    } else {
        h = ((red - green)/variation) + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
        h += 360;
    }

    l = (colorMax + colorMin) / 2;

    s = variation === 0 ? 0 : variation / (1 - Math.abs(2*l - 1));

    l = (l*100).toFixed(0)
    s = (s*100).toFixed(0)

    return `${h}, ${s}%, ${l}%`
}

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

hsl.addEventListener('input', function() {
    can.style.backgroundColor = `hsl(${hsl.value})`
    let color = hexAndHslToRgb(can.style.backgroundColor);
    rgb.value = color;

    color = rgb.value.split(', ');
    for (let i = 0; i < color.length; i++) {
        color[i] = parseInt(color[i])
    }

    hex.value = rgbToHex(color[0], color[1], color[2]);
})

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

rgb.onchange = () => {
    if (rgb.value.length > 13) {
        rgb.value = rgb.value.slice(0, 13)
        can.style.backgroundColor = `rgb(${rgb.value})`
    }
}
