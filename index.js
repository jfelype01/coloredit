var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
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
    let controle = 0
    let x = 0
    var y = 0
    var array = []
    str = string.replace('', ' ')
    var str = str.split(',')
    while (x < str.length) {
        var element = parseInt(str[x], 10)
        y = 0
        if (element % 2 === 0) {
            while (y < 16) {
                if ((element - y)%16!==0) {
                    y++
                    y++
                    controle++
                    if (controle > 130) return 0
                } else {
                    var a = y
                    if (y > 9){
                         a = hexCodes[y]
                         a = a()
                         console.log(a)
                    }
                    var b = (element - y)/16
                    if (b > 9) {
                        b = hexCodes[b]
                        b = b()
                    }
                    x++
                    array.push(b, a)
                    y = 20
                }
            }
        } else {
            y++
            while (y < 16) {
                if((element-y)%16===0) {
                    let a = `${y}`
                    if(y>=10){
                        a=hexCodes[a]()
                        console.log(a)
                    }
                    let b = `${((element-y)/16)}`
                    if(((element-y)/16)>9){
                        b = hexCodes[b]()
                    }
                    y = 20
                    array.push(b, a)
                    x++
                } else {
                    y++
                    y++
                    controle++
                    if(130<controle) return 0
                }
            }
        }
    }
    console.log(array)
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
