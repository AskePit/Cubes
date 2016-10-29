function Color(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;

    this.toSepia = function() {
        var r = this.r;
        var g = this.g;
        var b = this.b;

        this.r = Math.floor((r*.393) + (g*.769) + (b*.189));
        this.g = Math.floor((r*.349) + (g*.686) + (b*.168));
        this.b = Math.floor((r*.272) + (g*.534) + (b*.131));
    }

    this.toGray = function () {
        var w = Math.floor(this.r*0.2989 + this.g*0.587 + this.b*0.114);

        this.r = w;
        this.g = w;
        this.b = w;
    }

    this.toPale = function() {
        this.a = 0.5;
    }

    this.toBW = function() {
        this.toGray();
        if(this.r > 125) {
            this.r = 255;
            this.g = 255;
            this.b = 255;
        } else {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }
    }

    this.toSat = function() {
        if(this.r >= this.g && this.r >= this.b) {
            this.r = 255;
            this.g = 0;
            this.b = 0;
        } else if(this.g >= this.r && this.g >= this.b) {
            this.r = 0;
            this.g = 255;
            this.b = 0;
        } else {
            this.r = 0;
            this.g = 0;
            this.b = 255;
        }
    }
}

var cubes = [];

function makeBW() {
    l = cubes.length;
    for(var i = 0; i<l; ++i) {
        cube = cubes[i];
        var c = getRandColor();
        c.toBW();
        cube.style.background = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ', ' + c.a + ')';
    }
}

function makeGray() {
    l = cubes.length;
    for(var i = 0; i<l; ++i) {
        cube = cubes[i];
        var c = getRandColor();
        c.toGray();
        cube.style.background = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ', ' + c.a + ')';
    }
}

function makeSepia() {
    l = cubes.length;
    for(var i = 0; i<l; ++i) {
        cube = cubes[i];
        var c = getRandColor();
        c.toSepia();
        cube.style.background = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ', ' + c.a + ')';
    }
}


function makePale() {
    l = cubes.length;
    for(var i = 0; i<l; ++i) {
        cube = cubes[i];
        var c = getRandColor();
        c.toPale();
        cube.style.background = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ', ' + c.a + ')';
    }
}

function makeNormal() {
    l = cubes.length;
    for(var i = 0; i<l; ++i) {
        cube = cubes[i];
        var c = getRandColor();
        cube.style.background = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ', ' + c.a + ')';
    }
}

function makeSat() {
    l = cubes.length;
    for(var i = 0; i<l; ++i) {
        cube = cubes[i];
        var c = getRandColor();
        c.toSat();
        cube.style.background = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ', ' + c.a + ')';
    }
}

function getRand255() {
    return Math.floor(Math.random()*255);
}

function getRandColor() {
    return new Color(getRand255(), getRand255(), getRand255(), 1);
}

for(var i = 0; i<100; ++i) {
    var cube = document.createElement('div');
    cube.setAttribute('class', 'cube');

    var c = getRandColor();

    cube.style.background = 'rgba(170, 170, 170, 1)';
    cubes.push(cube);
    document.getElementById('cubes').appendChild(cube);
}

document.getElementById("bwButton").onclick = makeBW;
document.getElementById("grayButton").onclick = makeGray;
document.getElementById("sepiaButton").onclick = makeSepia;
document.getElementById("paleButton").onclick = makePale;
document.getElementById("normalButton").onclick = makeNormal;
document.getElementById("satButton").onclick = makeSat;
