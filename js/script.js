let foco = document.querySelector('img')
foco.onclick =function () {
    let myScr = foco.getAttribute('src')
    if (myScr === 'img/focoOff.png') {
        foco.setAttribute ('src', 'img/focoOn.png')
        
    } else {
        foco.setAttribute ('src', 'img/focoOff.png')
    }
}