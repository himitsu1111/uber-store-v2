document.querySelector('.footer_content_flexbox_left_language').addEventListener('click', function(e) {
    this.querySelector('.custom-select').classList.toggle('open');
    e.stopPropagation();
})
document.querySelector('body').addEventListener('click', function() {
    if (document.querySelector('.custom-select').classList.contains('open')) {        
        document.querySelector('.custom-select').classList.remove('open');
    }
})
for (const option of document.querySelectorAll(".custom-options_option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-options_option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.onscroll = function () {
    console.log("scroll");
    if (pageYOffset >= 200) {
        document.getElementById('backToTop').style.visibility = "visible";
    } else {
 document.getElementById('backToTop').style.visibility = "hidden";
    }
};