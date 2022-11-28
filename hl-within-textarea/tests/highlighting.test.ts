import {describe, expect, test} from '@jest/globals';

import {parseText} from "../libs/highlight" 
import {addColorProp} from "../libs/highlight"

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
    
]


describe("Testing parsing text", () => {
    for (let testCase of parsingTest) {
        test(testCase.description, () => {
            expect(parseText(testCase.case)).toStrictEqual(testCase.solution)
        })
    }
})