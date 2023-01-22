var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
var hsl = document.getElementById('hsl');
var can = document.getElementById('canva');

function updateInputValue(a, b, c) {
    let colors = b.split(', ')
    hex.value = a
    rgb.value = b
    hsl.value = rgbToHsl(colors[0], colors[1], colors[2])
    can.style.backgroundColor = c
};

const patternsButton = {
    White() {
        updateInputValue('#ffffff', '255, 255, 255', '#ffffff')
    },
    Yellow() {
        updateInputValue('#ffff00', '255, 255, 0', '#ffff00')
    },
    Orange() {
        updateInputValue('#ffa500', '255, 165, 0', 'rgb(255, 165, 0)')
    }, 
    Red() {
        updateInputValue('#ff0000', '255, 0, 0', '#ff0000')
    },
    Brown() {
        updateInputValue('#a52a2a', '165, 42, 42', 'rgb(165, 42, 42)')
    },
    Pink() {
        updateInputValue('#ffc0cb', '255, 192, 203', '#ffc0cb')
    },
    Violet() {
        updateInputValue('#ee82ee', '238, 130, 238', 'rgb(238, 120, 238)')
    },
    Purple() {
        updateInputValue('#a020f0', '128, 0, 128', "#a020f0")
    },
    Lime() {
        updateInputValue('#00ff00', '0, 255, 0', 'rgb(0, 255, 0)')
    },
    Green() {
        updateInputValue('#008000', '0, 128, 0', "#008000")
    },
    Blue() {
        updateInputValue('#00000ff', '0, 0, 255', 'rgb(0, 0, 255)')
    },
    Dark() {
        updateInputValue('#00008b', '0, 0, 139', "#00008b")
    },
    Gray() {
        updateInputValue('#808080', '128, 128, 128', 'rgb(128, 128, 128)')
    },
    Black() {
        updateInputValue('#000000', '0, 0, 0', 'rgb(0, 0, 0')
    },
    Gold() {
        updateInputValue('#ffd700', '255, 215, 0', '#ffd700')
    },
    darkOrange() {
        updateInputValue('#ff8c00', '255, 140, 0', '#ff8c00')
    },
    orangeRed() {
        updateInputValue('#ff4500', '255, 69, 0', '#ff4500')
    },
    Coral() {
        updateInputValue('#ff7f50', '255, 127, 80', '#ff7f50')
    },
    Salmom() {
        updateInputValue('#fa8072', '250, 128, 114', '#fa8072')
    },
    darkRed() {
        updateInputValue('#8b0000', '138, 0, 0', '#8b0000')
    },
    deepPink() {
        updateInputValue('#ff1493', '255, 20, 147', '#ff1493')
    },
    Orchid() {
        updateInputValue('#da70d6', '218, 112, 214', '#da70d6')
    },
    Magenta() {
        updateInputValue('#ff00ff', '255, 0, 255', '#ff00ff')
    },
    darkViolet() {
        updateInputValue('#9400d3', '148, 0, 211', '#9400d3')
    },
    Tan() {
        updateInputValue('#d2b48c', '210, 180, 140', '#d2b48c')
    },
    blueViolet() {
        updateInputValue('#8a2be2', '138, 43, 226', '#8a2be2')
    },
    Wheat() {
        updateInputValue('#f5deb3', '245, 222, 179', '#f5deb3')
    },
    Chocolate() {
        updateInputValue('#556b2f', '85, 107, 47', '#556b2f')
    },
    Olive() {
        updateInputValue('#808000', '128, 128, 0', '#808000')
    },
    darkOliveGreen() {
        updateInputValue('#556b2f', '85, 147, 47', '#556b2f')
    },
    limeGreen() {
        updateInputValue('#32cd32', '50, 205, 50', '#32cd32')
    },
    seaGreen() {
        updateInputValue('#2e8b57', '46, 129, 87', '#2e8b57')
    },
    Pale() {
        updateInputValue('#98fb98', '152, 251, 152', '#98fb98')
    },
    cadetBlue() {
        updateInputValue('#5f9ea0', '95, 158, 160', '#5f9ea0')
    },
    Aquamarine() {
        updateInputValue('#7fffd4', '127, 255, 212', '#7fffd4')
    },
    darkCyan() {
        updateInputValue('#008b8b', '0, 139, 139', '#008b8b')
    },
    Teal() {
        updateInputValue('#008080', '0, 128, 128', '#008080')
    },
    Turquoise() {
        updateInputValue('#40e0d0', '0, 206, 209', '#40e0d0')
    },
    darkSlateGray() {
        updateInputValue('#2f4f4f', '47, 79, 79', '#2f4f4f')
    },
    steelBlue() {
        updateInputValue('#4682b4', '70, 130, 180', '#4682b4')
    },
    lightGrey() {
        updateInputValue('#d3d3d3', '211, 211, 211', '#d3d3d3')
    },
    Silver() {
        updateInputValue('#c0c0c0', '192, 192, 192', '#c0c0c0')
    },
    mediumBlue() {
        updateInputValue('#0000cd', '0, 0, 205', '#0000cd')
    },
    Navy() {
        updateInputValue('#000080', '0, 0, 128', '#000080')
    },
    midnightBlue() {
        updateInputValue('#191970', '25, 25, 112', '#191970')
    },
    Gray31() {
        updateInputValue('#4f4f4f', '79, 79, 79', '#4f4f4f')
    },
    Gray21() {
        updateInputValue('#363636', '54, 54, 54', '#363636')
    },
    Gray11() {
        updateInputValue('#1c1c1c', '28, 28, 28', '#1c1c1c')
    }
};
