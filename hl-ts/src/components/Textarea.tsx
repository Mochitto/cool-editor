import React, { useState, useEffect } from 'react';
import '../App.css'

import { textNode, parseText, addColorProp } from '../libs/highlight';
import SpanFragments from './Highlight';


function assertQuerySelector(id: string) {
    let element = document.querySelector(id)
    if (element) return element 
    else throw new Error(`Element with the id of: ${id} didn't exist.` )
}

const Textarea = () => {

    useEffect(() => {
        console.log(parseText(assertQuerySelector("textarea").value))
    }, [assertQuerySelector("textarea").value]);

    return (
        <section className="editor">
            <div id="text">
                <SpanFragments textNodes={test}/>   
            </div>
            <textarea name="textarea" id="textarea"></textarea>
        </section>
    )
}

export default Textarea;