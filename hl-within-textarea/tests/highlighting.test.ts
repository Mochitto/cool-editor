import {describe, expect, test} from '@jest/globals';

import {parseText} from "../main" 
import {addColorProp} from "../main"

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
                whitespaces: " "
            }
        ]
    },
]


describe("Testing parsing text", () => {
    for (let testCase of parsingTest) {
        test(testCase.description, () => {
            expect(parseText(testCase.case)).toBe(testCase.solution)
        })
    }
})