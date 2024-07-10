class Figuras {
    constructor(numrandom) {
        imageMode(CENTER);
        this.figura = [];
        for (let i = 0; i < 50; i++) {
            this.figura.push(loadImage('img/F' + i + '.png'));
        }
        this.num = numrandom;
        this.numIni = numrandom;

        this.dirI = [
            radians(),
            radians(),
            radians(),
            radians(-51),
            radians(120),
            radians(-60),
            radians(118),
            radians(-138),  
            radians(122),
            radians(-57),
            radians(177),
            radians(-47),
            radians(120),
            radians(-60),
            radians(136),
            radians(88),
            radians(122),
            radians(-59),
            radians(128),
            radians(),
            radians(),
            radians(),
            radians(10),
            radians(-176),
            radians(-47),
            radians(-148),
            radians(15),
            radians(-160),
            radians(-86),
            radians(-157),
            radians(18),
            radians(),
            radians(),
            radians(177),
            radians(-89),
            radians(-173),
            radians(-12),
            radians(-130),
            radians(-59),
            radians(-177),
            radians(11),
            radians(-170),
            radians(1),
            radians(-178),
            radians(),
            radians(),
            radians(),
            radians(),
            radians(),
            radians(-12)
        ];
        
        this.dirD = [
            radians(),
            radians(),
            radians(),
            radians(129),
            radians(-60),
            radians(120),
            radians(-62),
            radians(42),
            radians(-58),
            radians(123),
            radians(-3),
            radians(133),
            radians(-60),
            radians(120),
            radians(-56),
            radians(-92),
            radians(-58),
            radians(121),
            radians(-62),
            radians(),
            radians(),
            radians(),
            radians(-170),
            radians(4),
            radians(133),
            radians(32),
            radians(-165),
            radians(20),
            radians(104),
            radians(23),
            radians(-162),
            radians(),
            radians(),
            radians(-3),
            radians(91),
            radians(7),
            radians(168),
            radians(60),
            radians(119),
            radians(3),
            radians(-169),
            radians(10),
            radians(-179),
            radians(2),
            radians(),
            radians(),
            radians(),
            radians(),
            radians(),
            radians(168)
        ];

        this.vel = [ 
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10)))),
            (int (random (random (4,10))))
        
        ]

        this.posx = [300 /*0*/, 160 /*1*/, 250 /*2*/, 70 /*3*/, 50 /*4*/, 50 /*5*/, 150 /*6*/, 290 /*7*/, 400 /*8*/, 250 /*9*/, 400 /*10*/, 410 /*11*/, 290 /*12*/, 100 /*13*/, 50 /*14*/, 135 /*15*/, 60 /*16*/, 180 /*17*/, 320 /*18*/, 200 /*19*/, 245 /*20*/, 150 /*21*/, 60 /*22*/, 290 /*23*/, 200 /*24*/, 315 /*25*/, 230 /*26*/, 180 /*27*/, 450 /*28*/, 330 /*29*/, 340 /*30*/, 250 /*31*/, 220 /*32*/, 170 /*33*/, 260 /*34*/, 280 /*35*/, 400 /*36*/, 70 /*37*/, 290 /*38*/, 250 /*39*/, 210 /*40*/, 70 /*41*/, 85 /*42*/, 130 /*43*/, 350 /*44*/, 100 /*45*/, 200 /*46*/, 380 /*47*/, 320 /*48*/, 280 /*49*/];

        this.posy = [300 /*0*/, 170 /*1*/, 420 /*2*/, 100 /*3*/, 180 /*4*/, 60 /*5*/, 70 /*6*/, 90 /*7*/, 120 /*8*/, 290 /*9*/, 500 /*10*/, 560 /*11*/, 620 /*12*/, 610 /*13*/, 600 /*14*/, 530 /*15*/, 520 /*16*/, 490 /*17*/, 620 /*18*/, 180 /*19*/, 310 /*20*/, 200 /*21*/, 310 /*22*/, 490 /*23*/, 600 /*24*/, 50 /*25*/, 300 /*26*/, 350 /*27*/, 350 /*28*/, 290 /*29*/, 310 /*30*/, 250 /*31*/, 220 /*32*/, 355 /*33*/, 550 /*34*/, 550 /*35*/, 620 /*36*/, 70 /*37*/, 230 /*38*/, 280 /*39*/, 500 /*40*/, 490 /*41*/, 360 /*42*/, 650 /*43*/, 250 /*44*/, 300 /*45*/, 200 /*46*/, 350 /*47*/, 280 /*48*/, 580 /*49*/];

        this.tamancho;
        this.tamalto;
        this.staticFigures = [0, 1, 2, 19, 20, 21, 31, 32, 44, 45, 46, 47, 48];
    }

    muestra(numIni, num, c, ancho, alto) {
        this.num = num;
        this.numIni = numIni;
        this.c = c;
        this.tamalto = alto;
        this.tamancho = ancho;

        push();
        tint(color(c));
        image(this.figura[this.num], this.posx[this.numIni], this.posy[this.numIni], this.tamancho, this.tamalto);
        pop();

        this.posx[this.numIni] = ( this.posx[this.numIni]>width ? this.posx[this.numIni]-width : this.posx[this.numIni]);
        this.posx[this.numIni] = ( this.posx[this.numIni]<0 ? this.posx[this.numIni]+width : this.posx[this.numIni]);
        this.posy[this.numIni] = ( this.posy[this.numIni]>height ? this.posy[this.numIni]-height : this.posy[this.numIni] );
        this.posy[this.numIni] = ( this.posy[this.numIni]<0 ? this.posy[this.numIni]+height : this.posy[this.numIni] );
    }

    mover(frec){
     
        if (amp>0.01 && frec>0.2){  //grave

            for (let i=0; i<50; i++){
                if (this.staticFigures.includes(i)) continue;
                let dx = this.vel[i] * cos( this.dirD[i] );
                let dy = this.vel[i] * sin( this.dirD[i] );
                this.posx[i] += dx;
                this.posy[i] += dy; 
                
            }
    
            } else if (amp>0.01 && frec<0.5){ //agudo
            for (let i=0; i<50; i++){
                if (this.staticFigures.includes(i)) continue;
                let dx = this.vel[i] * cos( this.dirI[i] );
                let dy = this.vel[i] * sin( this.dirI[i] );
                this.posx[i] += dx;
                this.posy[i] += dy; 
                
            }
        }
    
    }


}