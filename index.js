var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
var can = document.getElementById('canva');
var i = 1
var ob = new MutationObserver(() => {
    console.log(can.style.backgroundColor)
    while (i <= 9) {
        var button = document.getElementById(`${i}`)
        console.log(button)
        button.style.backgroundColor = `${can.style.backgroundColor.slice(0, can.style.backgroundColor.length - 1)}, ${i/10})`
        i++
    }
    i = 1
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
    while (x < str.length) {
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
    hex.value = color
});

ob.observe(can, {attributeFilter: ["style"]})
