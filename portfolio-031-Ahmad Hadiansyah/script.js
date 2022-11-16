let img = document.getElementById("img-pp")
window.addEventListener('scroll', function () {
    let scrol = this.window.scrollY;
    if (scrol > 300) {
        img.classList.add('img-pp')
    }
})