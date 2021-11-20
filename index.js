var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
var can = document.getElementById('canva');
var but = document.getElementsByClassName('but')
var i = 1
var ob = new MutationObserver(() => {
    console.log(can.style.backgroundColor)
    while (i <= 9) {
        var button = document.getElementById(`o0${i}`)
        button.style.backgroundColor = `${can.style.backgroundColor.slice(0, can.style.backgroundColor.length - 1)}, ${i/10})`
        i++
    }
    i = 1
    rgb.style.borderBottomColor = can.style.backgroundColor

    hex.style.borderBottomColor = can.style.backgroundColor
    
    for(let element of but) {
        element.style.borderBottomColor = can.style.backgroundColor
    }
    
})
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
    var array = []
    var str = string.replace(' ', '')
    str = str.split(',')
    if (str.length < 3) return ' '
    if (str[2] === ' ') return ' '
    if (str[2]==='') return ' '
    console.log(str)
    while (x < 3) {
        var element = parseInt(str[x], 10)
        var second = element % 16
        
        var first = (element - second) / 16
        if (second > 9) second = hexCodes[second]()
        if(first>9)first = hexCodes[first]()
        array.push(first)
        array.push(second)
        x++
    }

    return array.join('')
}

hex.addEventListener('input', function() {
    console.log(hex.value);
    if (hex.value[0] === '#') {
        can.style.backgroundColor = `${hex.value}`
    }
    can.style.backgroundColor = `#${hex.value}`;
    var color = can.style.backgroundColor;
    
    if (color[3] === 'a') {
        color = color.split('rgba(')
        color = color.join('')
    } else {
        color = color.split('rgb(')
        color = color.join('')
    }
    rgb.value = color.slice(0, color.length - 1)
});
rgb.addEventListener('input', function() {
    console.log(rgb.value)
    can.style.backgroundColor = `rgb(${rgb.value})`;
    var color = rgb.value
    color = rgbToHex(color)
    hex.value = '#'+color
});

ob.observe(can, {attributeFilter: ["style"]})

hex.onchange = function() {
    
    if (hex.value.length < 6 || (hex.value.length < 7 && hex.value[0] === '#') || hex.value.length > 6) {
        var colorx = `${can.style.backgroundColor}`
        if (colorx[3] === 'a'){
            console.log(colorx)
            hex.value = rgbToHex(`${colorx.slice(5, -1)}`)
        } else {
            console.log('ola')
            hex.value = rgbToHex(`${colorx.slice(4, -1)}`)
    }}
    if(hex.value[0] !== '#') {
        hex.value = `#${hex.value}`
        console.log('ol')
    }
    if (hex.value.length > 6) {
        hex.value = hex.value.slice(0, 7)
        can.style.backgroundColor = hex.value
    }
}

