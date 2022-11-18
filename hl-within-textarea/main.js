const textarea = document.getElementById('textarea');

const getSentenceLength = (str) => {
    return str.split(' ').length;
}

const highlightSentence = (str) => {
    const length = getSentenceLength(str);
}

const parseText = () => {
    const text = textarea.value;
    const arr = text.split('. ') //learn regex; find a way to add a '.' to the last word
    return arr;
}

document.getElementById('textarea').addEventListener('keyup', parseText)

// $('#textarea').highlightWithinTextarea({
//     highlight: 'whatever' // string, regexp, array, function, or custom object
// });


// get the text on keydown 
// parse the text to get an array of different sentences (split at '. ', '? ', '! ' when not followed by a lower case char)
// get sentence lengths
function getSmileyDayString(input) {
    const dayStrings = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    if (input.indexOf(':)') !== -1) {
        let dayIndex = (new Date()).getDay();
        return dayStrings;
    } else {
        // no smiley, no highlighting
        return false;
    }
}

$('#textarea').highlightWithinTextarea({
    highlight: parseText
});
	