var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
var can = document.getElementById('canva');
var buttons = document.getElementById('bottomButtons');

function hello(a, b, c) {
    hex.value = a
    rgb.value = b
    can.style.backgroundColor = c
    buttons.style.borderImageSource = `linear-gradient(to right, rgba(${b}, 0.5), rgb(${b}))`
};

const test = {
    White() {
        hello('#ffffff', '255, 255, 255', '#ffffff')
    },
    Yellow() {
        hello('#ffff00', '255, 255, 0', '#ffff00')
    },
    Orange() {
        hello('#ffa500', '255, 165, 0', 'rgb(255, 165, 0)')
    }, 
    Red() {
        hello('#ff0000', '255, 0, 0', '#ff0000')
    },
    Brown() {
        hello('#a52a2a', '165, 42, 42', 'rgb(165, 42, 42)')
    },
    Pink() {
        hello('#ffc0cb', '255, 192, 203', '#ffc0cb')
    },
    Violet() {
        hello('#ee82ee', '238, 130, 238', 'rgb(238, 120, 238)')
    },
    Purple() {
        hello('#a020f0', '128, 0, 128', "#a020f0")
    },
    Lime() {
        hello('#00ff00', '0, 255, 0', 'rgb(0, 255, 0)')
    },
    Green() {
        hello('#008000', '0, 128, 0', "#008000")
    },
    Blue() {
        hello('#00000ff', '0, 0, 255', 'rgb(0, 0, 255)')
    },
    Dark() {
        hello('#00008b', '0, 0, 139', "#00008b")
    },
    Gray() {
        hello('#808080', '128, 128, 128', 'rgb(128, 128, 128)')
    },
    Black() {
        hello('#000000', '0, 0, 0', 'rgb(0, 0, 0')
    },
    Gold() {
        hello('#ffd700', '255, 215, 0', '#ffd700')
    },
    darkOrange() {
        hello('#ff8c00', '255, 140, 0', '#ff8c00')
    },
    orangeRed() {
        hello('#ff4500', '255, 69, 0', '#ff4500')
    },
    Coral() {
        hello('#ff7f50', '255, 127, 80', '#ff7f50')
    },
    Salmom() {
        hello('#fa8072', '250, 128, 114', '#fa8072')
    },
    darkRed() {
        hello('#8b0000', '138, 0, 0', '#8b0000')
    },
    deepPink() {
        hello('#ff1493', '255, 20, 147', '#ff1493')
    },
    Orchid() {
        hello('#da70d6', '218, 112, 214', '#da70d6')
    },
    Magenta() {
        hello('#ff00ff', '255, 0, 255', '#ff00ff')
    },
    darkViolet() {
        hello('#9400d3', '148, 0, 211', '#9400d3')
    },
    Tan() {
        hello('#d2b48c', '210, 180, 140', '#d2b48c')
    },
    blueViolet() {
        hello('#8a2be2', '138, 43, 226', '#8a2be2')
    },
    Wheat() {
        hello('#f5deb3', '245, 222, 179', '#f5deb3')
    },
    Chocolate() {
        hello('#556b2f', '85, 107, 47', '#556b2f')
    },
    Olive() {
        hello('#808000', '128, 128, 0', '#808000')
    },
    darkOliveGreen() {
        hello('#556b2f', '85, 147, 47', '#556b2f')
    },
    limeGreen() {
        hello('#32cd32', '50, 205, 50', '#32cd32')
    },
    seaGreen() {
        hello('#2e8b57', '46, 129, 87', '#2e8b57')
    },
    Pale() {
        hello('#98fb98', '152, 251, 152', '#98fb98')
    },
    cadetBlue() {
        hello('#5f9ea0', '95, 158, 160', '#5f9ea0')
    },
    Aquamarine() {
        hello('#7fffd4', '127, 255, 212', '#7fffd4')
    },
    darkCyan() {
        hello('#008b8b', '0, 139, 139', '#008b8b')
    },
    Teal() {
        hello('#008080', '0, 128, 128', '#008080')
    },
    Turquoise() {
        hello('#40e0d0', '0, 206, 209', '#40e0d0')
    },
    darkSlateGray() {
        hello('#2f4f4f', '47, 79, 79', '#2f4f4f')
    },
    steelBlue() {
        hello('#4682b4', '70, 130, 180', '#4682b4')
    },
    lightGrey() {
        hello('#d3d3d3', '211, 211, 211', '#d3d3d3')
    },
    Silver() {
        hello('#c0c0c0', '192, 192, 192', '#c0c0c0')
    },
    mediumBlue() {
        hello('#0000cd', '0, 0, 205', '#0000cd')
    },
    Navy() {
        hello('#000080', '0, 0, 128', '#000080')
    },
    midnightBlue() {
        hello('#191970', '25, 25, 112', '#191970')
    },
    Gray31() {
        hello('#4f4f4f', '79, 79, 79', '#4f4f4f')
    },
    Gray21() {
        hello('#363636', '54, 54, 54', '#363636')
    },
    Gray11() {
        hello('#1c1c1c', '28, 28, 28', '#1c1c1c')
    }
};
