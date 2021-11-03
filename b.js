var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
var can = document.getElementById('canva');

function hello(a, b, c) {
    hex.value = a
    rgb.value = b
    can.style.backgroundColor = c
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
    }
};
