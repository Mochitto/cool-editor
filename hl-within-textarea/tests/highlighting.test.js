"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const highlight_1 = require("../libs/highlight");
const highlight_2 = require("../libs/highlight");
const parsingTest = [
    {
        description: "Testing for ellipsis",
        case: "This... is.",
        solution: [
            {
                sentence: "This...",
                whitespaces: " "
            },
            {
                sentence: "is.",
                whitespaces: ""
            }
        ]
    },
    {
        description: "Testing for exclamation point",
        case: "This! is.",
        solution: [
            {
                sentence: "This!",
                whitespaces: " "
            },
            {
                sentence: "is.",
                whitespaces: ""
            }
        ]
    },
    {
        description: "Testing for question mark",
        case: "This? is.",
        solution: [
            {
                sentence: "This?",
                whitespaces: " "
            },
            {
                sentence: "is.",
                whitespaces: ""
            }
        ]
    },
    {
        description: "Testing for mixed symbols",
        case: "This?!.? is.",
        solution: [
            {
                sentence: "This?!.?",
                whitespaces: " "
            },
            {
                sentence: "is.",
                whitespaces: ""
            }
        ]
    },
    {
        description: "Testing for whitespace before symbols",
        case: "This ?? is.",
        solution: [
            {
                sentence: "This ??",
                whitespaces: " "
            },
            {
                sentence: "is.",
                whitespaces: ""
            }
        ]
    },
    {
        description: "Testing for whitespace",
        case: "This? \n is.",
        solution: [
            {
                sentence: "This?",
                whitespaces: " \n "
            },
            {
                sentence: "is.",
                whitespaces: ""
            }
        ]
    },
];
const colorTest = [
    {
        description: "Testing for two words",
        case: [{
                sentence: "This is",
                whitespaces: " "
            }],
        solution: [{
                sentence: "This is",
                whitespaces: " ",
                color: "red"
            }]
    },
    {
        description: "Testing for four words",
        case: [{
                sentence: "This is a sentence",
                whitespaces: " "
            }],
        solution: [{
                sentence: "This is a sentence",
                whitespaces: " ",
                color: "green"
            }]
    },
    {
        description: "Testing for six words",
        case: [{
                sentence: "This is a long long sentence",
                whitespaces: " "
            }],
        solution: [{
                sentence: "This is a long long sentence",
                whitespaces: " ",
                color: "blue"
            }]
    },
    {
        description: "Testing for nine words",
        case: [{
                sentence: "This is a long long sentence that gets longer",
                whitespaces: " "
            }],
        solution: [{
                sentence: "This is a long long sentence that gets longer",
                whitespaces: " ",
                color: "yellow"
            }]
    },
    {
        description: "Testing for 13 words",
        case: [{
                sentence: "This is a long long sentence that gets longer and longer and longer",
                whitespaces: " "
            }],
        solution: [{
                sentence: "This is a long long sentence that gets longer and longer and longer",
                whitespaces: " ",
                color: "pink"
            }]
    },
    {
        description: "Testing for mixed sentences",
        case: [{
                sentence: "This is a long long sentence that gets longer",
                whitespaces: " "
            },
            {
                sentence: "This is a long long sentence that gets longer and longer and longer",
                whitespaces: " "
            }],
        solution: [{
                sentence: "This is a long long sentence that gets longer",
                whitespaces: " ",
                color: "yellow"
            },
            {
                sentence: "This is a long long sentence that gets longer and longer and longer",
                whitespaces: " ",
                color: "pink"
            }]
    },
];
(0, globals_1.describe)("Testing parsing text", () => {
    for (let testCase of parsingTest) {
        (0, globals_1.test)(testCase.description, () => {
            (0, globals_1.expect)((0, highlight_1.parseText)(testCase.case)).toStrictEqual(testCase.solution);
        });
    }
});
(0, globals_1.describe)("Testing adding colours to textNodes", () => {
    for (let testCase of colorTest) {
        (0, globals_1.test)(testCase.description, () => {
            (0, globals_1.expect)((0, highlight_2.addColorProp)(testCase.case)).toStrictEqual(testCase.solution);
        });
    }
});
