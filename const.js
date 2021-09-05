var hex = document.getElementById('hex');
var rgb = document.getElementById('rgb');
var can = document.getElementById('canva');

const js = {
    0.1() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.1)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.1)`
            }
        },
    0.2() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.2)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.2)`
            }
        },
    0.3() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.3)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.3)`
        }}
    , 
    0.4() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.4)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.4)`
            }
        },
    0.5() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.5)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.5)`
            }
        },
    0.6() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.6)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.6)`
        }}
    , 
    0.7() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.7)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.7)`
            }
        },
    0.8() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.8)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.8)`
            }
        },
    0.9() {
        let colr = can.style.backgroundColor;
        if (colr.split(',').length > 3) {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 5)} 0.9)`
        } else {
            can.style.backgroundColor = `${colr.slice(0, colr.length - 1)}, 0.9)`
            }
        }
}