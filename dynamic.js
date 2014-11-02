
window.onload = function () {
    var lanMenu = document.getElementById("yuyan");
    var thisImage = 0;
    lanMenu.onclick = function () {
        var menuList = document.getElementById("langu").hidden;
        var links = document.getElementsByClassName("js-language-link js-tooltip");
       
        if (menuList == true) {
            document.getElementById("langu").hidden = false;
        }
        else {
            document.getElementById("langu").hidden = true;
        }
        for(var i=0;i<links.length;i++){
            links[i].onmouseover = "this.style.backgroundcolor='lightblue'";
            links[i].onmouseout = "this.style.backgroundcolor='white'";
        }
       
        return false;
    }
    rotate();
    function rotate() {
        var disc = document.getElementsByClassName("companion-tweet");
        var bgImages = new Array("Images/exp_photo_set_astro_reid.jpg", "Images/exp_photo_set_gopro.jpg", "Images/exp_wc2014_gen_laurenlemon.jpg"
        , "Images/exp_wc2014_gen_timtrueman.jpg");
        thisImage++;
        if (thisImage == bgImages.length) {
            thisImage = 0;
        }
        img = bgImages[thisImage];

        document.getElementById("bgImage").style.backgroundImage = "url(" + img + ")";
        for (var j = 0; j < disc.length; j++) {
            if (j == thisImage) {
                disc[j].style.display = "block";
            }
            else
                disc[j].style.display = "none";
        }
       
        setTimeout(rotate, 8 * 1000);
    }

}
