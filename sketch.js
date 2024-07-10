let figura;
let urna;

let tamAnchoIni = [310 /*0*/, 170 /*1*/, 400 /*2*/, 80 /*3*/, 40 /*4*/, 67 /*5*/, 45 /*6*/, 35 /*7*/, 120 /*8*/, 205 /*9*/, 140 /*10*/, 63 /*11*/, 60 /*12*/, 72 /*13*/, 45 /*14*/, 28 /*15*/, 90 /*16*/, 30 /*17*/, 38 /*18*/, 160 /*19*/, 160 /*20*/, 195 /*21*/, 74 /*22*/, 62 /*23*/, 83 /*24*/, 94 /*25*/, 254 /*26*/, 125 /*27*/, 28 /*28*/, 56 /*29*/, 45 /*30*/, 308 /*31*/, 126 /*32*/, 125 /*33*/, 70 /*34*/, 167 /*35*/, 45 /*36*/, 96 /*37*/, 53 /*38*/, 140 /*39*/, 350 /*40*/, 70 /*41*/, 70 /*42*/, 35 /*43*/, 280 /*44*/, 100 /*45*/, 245 /*46*/, 49 /*47*/, 21 /*48*/, 420 /*49*/];

let tamAltoIni = [320 /*0*/, 250 /*1*/, 60 /*2*/, 100 /*3*/, 60 /*4*/, 100 /*5*/, 66 /*6*/, 48 /*7*/, 180 /*8*/, 400 /*9*/, 45 /*10*/, 63 /*11*/, 98 /*12*/, 74 /*13*/, 67 /*14*/, 28 /*15*/, 120 /*16*/, 45 /*17*/, 54 /*18*/, 330 /*19*/, 330 /*20*/, 165 /*21*/, 45 /*22*/, 31 /*23*/, 97 /*24*/, 87 /*25*/, 100 /*26*/, 45 /*27*/, 28 /*28*/, 21 /*29*/, 24 /*30*/, 308 /*31*/, 126 /*32*/, 45 /*33*/, 70 /*34*/, 65 /*35*/, 30 /*36*/, 120 /*37*/, 53 /*38*/, 10 /*39*/, 80 /*40*/, 20 /*41*/, 21 /*42*/, 14 /*43*/, 175 /*44*/, 400 /*45*/, 245 /*46*/, 600 /*47*/, 550 /*48*/, 35 /*49*/];

let paleta;
let colores;
let cantAplausos = 0;
let label;
let classifier;

let AMP_MIN = 0.001;
let AMP_MAX = 0.5;

let FREC_MIN = 125;
let FREC_MAX = 270;

//----AUDIO----
let mic;

let amp;
let ampCruda;
let frec;

let gestorAmp;
let gestorFrec;
let audioContext;
const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
const options = { probabilityThreshold: 0.9 };

let aplausoDetectado = false;
let img;

// IA ----------------
//let soundModel = 'https://teachablemachine.withgoogle.com/models/bOYAT_BCf/';
let soundModel = 'https://teachablemachine.withgoogle.com/models/7VRLdWBBG/';

function preload() {
    // Load SpeechCommands18w sound classifier model
    classifier = ml5.soundClassifier(soundModel + 'model.json', options);
}
//--------------

function setup() {
    createCanvas(500, windowHeight);
    urna = new Urna(50);
    numrandom = urna.sacarNumero();
    figura = new Figuras(numrandom);
    seleccionarFigurasPeque();
    seleccionarFigurasGrandes();
    classifier.classify(gotResult);

    //--------SONIDO-------------

    audioContext = getAudioContext();
    mic = new p5.AudioIn();
    mic.start(startPitch);
  
    userStartAudio(); // forzar el inicio del audio en el navegador
  
    gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
    gestorFrec = new GestorSenial(FREC_MIN, FREC_MAX);

    //------------------------------

    paleta = [
        color(2,28,92), //0
		 color(66,119,66), //1
		 color(37,27,35), //2
         color(40,41,43), //3
         color(213,156,44), //4
         color(34,35,36), //5
         color(40,41,42), //6
         color(16,43,116),//7
         color(208,172,32),//8
         color(169,69,43),//9
         color(217,161,40),//10
         color(208,164,179),//11
         color(172,63,35),//12
         color(209,148,33),//13
         color(191,81,43),//14
         color(189,86,47),//15
         color(184,73,36),//16
         color(204,169,38),//17
         color(209,172,40),//18
         color(33,32,38),//19
         color(216,56,45),//20
         color(245,167,3),//21
         color(180,51,44),//22
         color(189,39,32),//23
         color(29,26,33),//24
         color(99,134,180),//25
         color(217,167,41),//26
         color(107,50,74),//27
         color(129,30,25),//28
         color(38,34,38),//29
         color(94,126,95),//30
         color(58,58,57),//31
         color(194,153,35),//32
         color(63,112,176),//33
         color(170,31,13),//34
         color(216,157,47),//35
         color(59,100,162),//36
         color(34,33,36),//37
         color(61,111,177),//38
         color(73,93,51),//39
         color(44,49,53),//40
         color(175,36,18),//41
         color(217,160,44),//42
         color(74,93,55),//43
         color(29,47,69),//44
         color(163,47,40),//45
         color(234,177,70),//46
         color(21,24,29),//47
         color(21,24,29),//48
         color(32,30,97),//49
		 
    ];

    colores = [1];
    colores[0] = paleta[0];
    colores[1] = paleta[1];
    colores[2] = paleta[2];
    colores[3] = paleta[3];
    colores[4] = paleta[4];
    colores[5] = paleta[5];
    colores[6] = paleta[6];
    colores[7] = paleta[7];
    colores[8] = paleta[8];
    colores[9] = paleta[9];
    colores[10] = paleta[10];
    colores[11] = paleta[11];
    colores[12] = paleta[12];
    colores[13] = paleta[13];
    colores[14] = paleta[14];
    colores[15] = paleta[15];
    colores[16] = paleta[16];
    colores[17] = paleta[17];
    colores[18] = paleta[18];
    colores[19] = paleta[19];
    colores[20] = paleta[20];
    colores[21] = paleta[21];
    colores[22] = paleta[22];
    colores[23] = paleta[23];
    colores[24] = paleta[24];
    colores[25] = paleta[25];
    colores[26] = paleta[26];
    colores[27] = paleta[27];
    colores[28] = paleta[28];
    colores[29] = paleta[29];
    colores[30] = paleta[30];
    colores[31] = paleta[31];
    colores[32] = paleta[32];
    colores[33] = paleta[33];
    colores[34] = paleta[34];
    colores[35] = paleta[35];
    colores[36] = paleta[36];
    colores[37] = paleta[37];
    colores[38] = paleta[38];
    colores[39] = paleta[39];
    colores[40] = paleta[40];
    colores[41] = paleta[41];
    colores[42] = paleta[42];
    colores[43] = paleta[43];
    colores[44] = paleta[44];
    colores[45] = paleta[45];
    colores[46] = paleta[46];
    colores[47] = paleta[47];
    colores[48] = paleta[48];
    colores[49] = paleta[49];

}
//solo pueden aparecer 3 figuras grandes maximo siempre que se recargue la pagina

function seleccionarFigurasPeque() {
    let numFigurasPeque = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,40,41,42,43,47,48,49];
     seleccionadasPeque = [];
    for (let i = 0; i < 13; i++) {
        let randomIndex = int(random(numFigurasPeque.length));
        seleccionadasPeque.push(numFigurasPeque[randomIndex]);
    }
}


let gruposFiguras = [
  [0, 2, 19],
  [0,2,45],
  [31,20,2],
  [31,45,2],
  [2,19,20],
  [45, 44,0],
  [20,2,45],
  [31,44,0]
];

let indiceGrupoActual;

function seleccionarFigurasGrandes() {
  indiceGrupoActual = int(random(0,7));
  // Seleccionar el siguiente grupo de figuras grandes
  seleccionadasGrandes = gruposFiguras[indiceGrupoActual];
  
  // Incrementar el índice del grupo actual, y reiniciar si alcanza el final de la lista
  indiceGrupoActual = (indiceGrupoActual + 1) % gruposFiguras.length;
}

function draw() {

    //-----------SONIDO---------------

    gestorAmp.actualizar(mic.getLevel());// la señal directa (cruda) del mic la administra el gestor


    ampCruda = mic.getLevel();// solo para monitorear la diferencia 
    amp = gestorAmp.filtrada;
    //frec = gestorFrec.filtrada;
   
    background(245,245,220);

    //----------------------------------
    
    for (let i = 0; i < seleccionadasGrandes.length; i++) {
      let idx = seleccionadasGrandes[i];
      figura.muestra(idx, idx, colores[idx], tamAnchoIni[idx], tamAltoIni[idx]);
  }

    for (let i = 0; i < seleccionadasPeque.length; i++) {
        let idx = seleccionadasPeque[i];     
        figura.muestra(idx, idx, colores[idx], tamAnchoIni[idx], tamAltoIni[idx]);
    }
    
  

    figura.mover(frec, amp);
    seHaceSonido();
  
   }

function seHaceSonido(){
    if(label == "aplauso"){
      seleccionarFigurasGrandes();
      seleccionarFigurasPeque();
        console.log("aplauso activo");
        label = "";
    }

    if(label == "shhh"){
      cambiarColores();
      label = "";
    }
}

function cambiarColores(){
	let se_uso;
	let col;
	for (i=0; i<49; i++){
		se_uso = true;
		while (se_uso){
			col = paleta[int(random(0,paleta.length-0.01))];
			se_uso = false;
			if (i>0){
				for(x=0; x<i; x++){
					if (col == colores[x]){
						se_uso = true;
					}
					if (se_uso){break;}
				}
			}
		}
		colores[i] = col;
	}
}

//----- DETECCION DE FRECUENCIA-----
function startPitch() {
    pitch = ml5.pitchDetection(pichModel, audioContext , mic.stream, modelLoaded);
  }
  
  function modelLoaded() {
    getPitch();
  }
  
  function getPitch() {
    pitch.getPitch(function(err, frequency) {
      if (frequency) {
        gestorFrec.actualizar(frequency);
        frec = gestorFrec.filtrada;
      } else {
      }
      getPitch();
    })
  }
  
function imprimir(){
  
    push();
    
    fill(0);
    stroke(2);
    textSize(20);
    
    let texto = "amp: " + amp;
    text(texto, 20, 20)
    
    texto = "frec: " + frec;
    text(texto, 20, 40)
    
    gestorAmp.dibujar( 20, 50);
    gestorFrec.dibujar( 20, 150);
    
    let y = height - amp * height;
    ellipse(width/2 -50, y, 50, 50);
    
    y = height - ampCruda * height;
    ellipse(width/2 + 50, y, 50, 50);
    
    pop();
}

//-------- CLASIFICADOR------
function gotResult(error, results) {
    // Display error in the console
    if (error) {
      console.error(error);
    }
    // The results are in an array ordered by confidence.
    console.log(results);
    label = results[0].label;
    //console.log(label);
    
  }