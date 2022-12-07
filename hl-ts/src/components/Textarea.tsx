import React, { useState, useEffect } from 'react';
import '../App.css'

import { textNode, parseText, addColorProp } from '../libs/highlight';
import SpanFragments from './Highlight';

const textarea = assertQuerySelector("textarea") as HTMLTextAreaElement;

function assertQuerySelector(id: string) {
    let element = document.querySelector(id)
    if (element) return element 
    else throw new Error(`Element with the id of: ${id} didn't exist.` )
}

const Textarea = () => {
    let [taVal, setTaVal] = useState(textarea.value);

    useEffect(() => {
        console.log(parseText(taVal))
    }, [taVal]);

    return (
        <section className="editor">
            <div id="text">
                <SpanFragments textNodes={test}/>   
            </div>
            <textarea name="textarea" id="textarea" onInput={()=> setTaVal(textarea.value)}></textarea>
        </section>
    )
}

export default Textarea;