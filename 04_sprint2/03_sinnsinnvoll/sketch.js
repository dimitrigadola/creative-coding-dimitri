let txt, font;

let rules = {
  "start": "$part1 $part2",

  "part1": "$sing | $plur",
  "part2": "$P21 | $P22 | $P23 | $P24",

  "sing": "Is $nounS | Is $nounSP | Is $CNumber",
  "plur": "Are $nounP",

  "P21": "$adj?",
  "P22": "$adv $adj?",
  "P23": "$dt $noun?",
  "P24": "$nounS or $nounS.nr?",

};

function preload() {
  txt = loadStrings('/assets/txt/aliceinwl.txt');
  // txt = ['20', '10'];

  font = loadFont('font/GT-Eesti-Display-Medium.otf');
}

function generateRules() {
  let txtJoined = join(txt, ' ');
  let words = RiTa.tokenize(txtJoined);
  let pos = RiTa.pos(txtJoined);



  let nounS = ''
  let nounSP = ''
  let CNumber = ''
  let nounP = ''
  let adj = ''
  let adv = ''
  let dt = ''
  let noun = ''



  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let p = pos[i];

    console.log(word, p);

    if (p === 'nn') {
      nounS += word + ' | ';
    }
    if (p === 'nnp') {
      nounSP += word + ' | ';
    }
    if (p === 'cd') {
      CNumber += word + ' | ';
    }
    if (p === 'nns') {
      nounP += word + ' | ';
    }
    if (p === 'jj') {
      adj += word + ' | ';
    }
    if (p === 'rb') {
      adv += word + ' | ';
    }
    if (p === 'dt') {
      dt += word + ' | ';
    }
    if (p === 'rb') {
      adv += word + ' | ';
    }
    if (p.startsWith('nn')) {
      noun += word + ' | ';
    }

  }

  rules['nounS'] = nounS;
  rules['nounSP'] = nounSP;
  rules['CNumber'] = CNumber;
  rules['nounP'] = nounP;
  rules['adj'] = adj;
  rules['adv'] = adv;
  rules['dt'] = dt;
  rules['noun'] = noun;

  // console.log(rules);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  generateRules();
  noLoop();

  rg = RiTa.grammar(rules);
  result = rg.expand();

  console.log(result);
}

function draw() {
  background(255);
  textFont(font);
  textSize(96);
  textAlign(CENTER, BASELINE);
  fill(20, 60, 100);
  text(result, width / 2, height / 2);
}



function mousePressed() {
  generateRules();
  rg = RiTa.grammar(rules);
  result = rg.expand();
  draw();
}