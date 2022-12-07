import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';

import { textNode, parseText, addColorProp } from '../libs/highlight';

const textarea = assertQuerySelector("textarea") as HTMLTextAreaElement

function assertQuerySelector(id: string) {
    let element = document.querySelector(id)
    if (element) return element 
    else throw new Error(`Element with the id of: ${id} didn't exist.` )
}

let [parsedText, setParsedText] = useState(textarea.value);

useEffect(() => {
    console.log(parsedText)
}, [parsedText])

function debounce(func: Function, timeout = 200) {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(args); }, timeout);
    };
}

const SpanFragments = ({textNodes}: {textNodes: textNode[]}) => {
    return (
        <React.Fragment>
            {textNodes.map((textNode: textNode) => (
                <>
                    <span style={{background: textNode.color}}>
                        {textNode.sentence}
                    </span>
                    <span>
                        {textNode.whitespaces}
                    </span>
                </>
            ))}
        </React.Fragment>
    )
}

export default SpanFragments;