let letS = ['dear', 'darling', 'honey', 'jewel', 'love', 'duck', 'moppet', 'sweetheart']

let adj = ['anxious', 'wistful', 'curious', 'craving', 'covetous', 'avid', 'unsatisfied', 'eager',
  'keen', 'burning', 'fervent', 'ardent', 'breathless', 'impatient', 'loving', 'lovesick',
  'affectionate', 'tender', 'sweet', 'sympathetic', 'fond', 'amorous', 'erotic', 'passionate',
  'devoted', 'dear', 'precious', 'darling', 'little', 'lovable', 'adorable'];

let noun = ['desire', 'wish', 'fancy', 'liking', 'love', 'fondness', 'longing', 'yearning', 'amhition',
  'eagerness', 'ardour', 'appetite', 'hunger', 'thirst', 'lust', 'passion', 'affection',
  'sympathy', 'fellow feeling', 'tenderness', 'heart', 'devotion', 'fervour', 'enthusiasm',
  'rapture', 'enchantment', 'infatuation', 'adoration', 'charm'];

let adv = ['anxiously', 'wistfully', 'curiously', 'covetously', 'eagerly', 'avidly', 'keenly', 'burningly',
  'fervently', 'ardently', 'breathlessly', 'impatiently', 'lovingly', 'affectionately',
  'tenderly', 'fondly', 'passionately', 'devotedly', 'seductively', 'winningly',
  'beautifully'];

let verb = ['desires', 'wishes', 'longs for', 'hopes for', 'likes', 'clings to', 'wants', 'hungers for',
  'thirsts for', 'yearns for', 'lusts after', 'sighs for', 'pines for', 'pants for', 'woos',
  'attracts', 'tempts', 'loves', 'cares for', 'is wedded to', 'holds dear', 'prizes',
  'treasures', 'cherishes', 'adores']

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  let randLetS1 = floor(random(8));
  let randLetS2 = floor(random(8));

  let randAdj1 = floor(random(31));
  let randAdj2 = floor(random(31));

  let randNoun1 = floor(random(29));
  let randNoun2 = floor(random(29));

  let randAdv = floor(random(21));

  let randVerb = floor(random(25));


  background(255);
  frameRate(0.1);
  fill(10, 10, 10);
  textSize(32);
  textFont('Grotesk');
  textAlign(LEFT);
  text(letS[randLetS1] + ' ' + letS[randLetS2] + '\n' +
    'My' + ' ' + adj[randAdj1] + ' ' + noun[randNoun1] + ' ' + adv[randAdv] + ' ' + verb[randVerb] + ' your ' + adj[randAdj2] + ' ' + noun[randNoun2] + '.', 50, 60, windowWidth, windowHeight);



  // let source = join(adj, ' ')
  // let words = match(source, /\b\w{5}\b/g);

  // text(words, 50, 200, windowWidth, windowHeight);
}
