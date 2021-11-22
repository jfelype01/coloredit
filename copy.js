var hex = document.getElementById('hex')
var rgb = document.getElementById('rgb')

function copyButton() {
    hex.select();
    hex.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(hex.value)
}

function copyB() {
    rgb.select();
    rgb.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(`rgb(${rgb.value})`)
}