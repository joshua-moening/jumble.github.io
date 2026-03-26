let wordInput;
let button;
let greeting;

function setup() {
    createCanvas(800, 600);
    loadFont('/assets/RubikBurned-Regular.ttf', font => {
    fill('deeppink');
    textFont(font);
    greeting = createElement('h2', 'Jumble');
    greeting.position(CENTER, 5);
    greeting.style('color', 'deeppink');
    greeting.style('font-family', 'RubikBurned')
    wordInput = createInput();
    wordInput.position(650, 65);
    button = createButton('Anagram');
    button.position(815, 65);
    button.mousePressed(greet);
    wordInput.changed(greet);
    });
}

function greet() {
    // Refresh the canvas background to clear any
    // previous inputs.
    background(255);

    // Connect the name variable to the input's value.
     let word = wordInput.value();
    const strLet = [];
     for (i = 0; i != word.length + 1; i++) {
      strLet[i] = word.substring(i,i+1);
    }
    let newWordlist = [];

    let originalLength = strLet.length;
    for (i = 0; i < originalLength; i++) {
        let x = int(random(0, strLet.length));
        let letter = strLet[x];
        newWordlist[i] = letter;
        strLet.splice(x,1); 
    }
    //join the newword list into a string
    newWord = newWordlist.join('');
    // Update the greeting to state the person's name.
    //greeting.html(`Hello, ${name}!`);

    // Clear the input's value.
    wordInput.value('');

    // Draw name on the canvas
    textSize(100);
    textAlign(CENTER, CENTER);
    text(newWord, width / 2, height / 2);

    describe(`The name ${word} in large black text on a white background.`);
}