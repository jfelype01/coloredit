function copyButton(id) {
    let input = document.getElementById(id)
    input.select();
    input.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(input.value)
}