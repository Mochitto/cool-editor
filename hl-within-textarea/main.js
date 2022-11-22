const textarea = document.getElementById('textarea');

textarea.value = `This sentence has five words. Here are five more words. Five word sentences are fine. But several together become monotonous. Listen to what is happening. The writing is getting boring. The sound of it drones. It's like a stuck record. The ear demands some variety.

Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length. And sometimes when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals—sounds that say listen to this, it is important.

So write with a combination of short, medium, and long sentences. Create a sound that pleases the reader's ear. Don't just write words. Write music.`

const getSentenceLength = (str) => {
    return str.split(' ').length;
}

const highlightSentence = (str) => {
    const length = getSentenceLength(str);
}

const parseText = () => {
    const text = textarea.value;
    const arr = text.split(/\.\s+/) //learn regex; find a way to add a '.' to the last word
    const lengthRanges = {
        '1-3': [],
        '4-7': [],
        '>7': []
    }
    arr.forEach(sentence => {
        let len = sentence.split(' ').length;
        switch (true) {
            case (len <= 3):
                lengthRanges['1-3'].push(sentence);
                break;
            case (len < 7):
                lengthRanges['4-7'].push(sentence);
                break;
            default:
                lengthRanges['>7'].push(sentence);
                break;
        }
    })
    return lengthRanges;
}

document.getElementById('textarea').addEventListener('keyup', parseText)

// $('#textarea').highlightWithinTextarea({
//     highlight: 'whatever' // string, regexp, array, function, or custom object
// });


// get the text on keydown 
// parse the text to get an array of different sentences (split at '. ', '? ', '! ' when not followed by a lower case char)
// get sentence lengths
const getArrays = () => {
    return [
        {
            highlight: parseText()['1-3'],
            className: 'red'
        },
        {
            highlight: parseText()['4-7'],
            className: 'blue'
        },
        {
            highlight: parseText()['>7'],
            className: 'yellow'
        },

    ]
}

$('#textarea').highlightWithinTextarea({
    highlight: getArrays
});

console.log(parseText())
	