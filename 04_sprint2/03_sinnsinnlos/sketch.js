let txt;

let rules = {
  "start": "$line1",
  "line1": "$names $verbs $adjs.",
};

function preload() {
  txt = loadStrings('/assets/txt/shelley.txt');
}

function generateRules() {
  let txtJoined = join(txt, ' ');
  let words = RiTa.tokenize(txtJoined);
  let pos = RiTa.pos(txtJoined);

  let adjs = ''
  let names = ''
  let verbs = ''
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let p = pos[i];
    console.log(word, p);
    if (p === 'nn') {
      // fill(0);
      // text(word, 20, 20 + i * 10);
      names += word + ' | ';
    }
    if (p === 'jj') {
      // fill(0);
      // text(word, 20, 20 + i * 10);
      adjs += word + ' | ';
    }
    if (p.startsWith('vb')) {
      // fill(0);
      // text(word, 20, 20 + i * 10);
      verbs += word + ' | ';
    }
  }
  rules['names'] = names;
  rules['adjs'] = adjs;
  rules['verbs'] = verbs;
  // console.log(rules);
}


function setup() {
  createCanvas(400, 400);
  background(240);
  generateRules();
  noLoop();

  rg = RiTa.grammar(rules);
  result = rg.expand();
  // console.log(result);
}

function draw() {

  text(result, 20, 200);
}