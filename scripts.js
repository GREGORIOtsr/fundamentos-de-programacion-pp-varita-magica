// 1.
let link = document.getElementsByTagName('a');
for (i = 0; i < link.length; i++) {
    link[i].style.pointerEvents = 'none';
}


// 2.

// 2.1.
let image = document.getElementsByTagName('img');
/* for (i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function(){
        this.src = "./assets/magic-1.gif";
    })
} */

// 2.2.
let par = document.querySelectorAll("p");
function colores() {
    this.style.color = 'orange';
    this.style.backgroundColor = 'black';
}
for (i = 0; i < par.length; i++) {
    par[i].addEventListener('click', colores);
}

// 2.3.
let art = document.getElementsByTagName('article');
let sect = document.getElementsByTagName('section');
function cambiarFondo() {
    this.style.backgroundColor = 'orange';
}
for (i = 0; i < art.length; i++) {
    art[i].addEventListener('click', cambiarFondo);
}
for (i = 0; i < sect.length; i++) {
    sect[i].addEventListener('click', cambiarFondo);
}


// 3.

// 3.1.
for (i = 0; i < image.length; i++) {
    let imageSrc = image[i].src;
    image[i].addEventListener('mouseover', function(){
        this.src = './assets/abracadabra.gif';
    });
    image[i].addEventListener('mouseout', function(){
        this.src = imageSrc;
    });
}

// 3.2.
for (i = 0; i < par.length; i++) {
    par[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = 'purple';
    });
    par[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = 'white';
    });
}

// 3.3.
function colorOverOut() {
    if (this.style.backgroundColor != 'green') {
        this.style.backgroundColor = 'green';
    } else {
        this.style.backgroundColor = 'white';
    }
} 
for (i = 0; i < art.length; i++) {
    art[i].addEventListener('mouseover', colorOverOut);
    art[i].addEventListener('mouseout', colorOverOut);
}
for (i = 0; i < sect.length; i++) {
    sect[i].addEventListener('mouseover', colorOverOut);
    sect[i].addEventListener('mouseout', colorOverOut);
}


// 4.
function getRandom(arr) {
    return arr[parseInt(Math.random()*5)];
}

// 5.
let arr = ['#ffe5ec', '#ffc2d1', '#ffb3c6', '#ff8fab', '#fb6f92'];

// 6.
for (i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function(){
        let i = getRandom(arr);
        switch (i) {
            case '#ffe5ec':
                this.src = "./assets/magic-2.gif";
                break;
            case '#ffc2d1':
                this.src = "./assets/magic-3.gif";
                break;
            case '#ffb3c6':
                this.src = "./assets/magic-4.gif";
                break;
            case '#ff8fab':
                this.src = "./assets/magic-5.gif";
                break;
            default: 
                this.src = "./assets/magic-6.gif";
                break;
        }
    })
}
