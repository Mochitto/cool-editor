import React, {useState, useEffect} from 'react';
import * as ReactDOM from 'react-dom/client';
import SpanFragments from './components/Highlight';
import './App.css'

import Textarea from './components/Textarea';

function assertQuerySelector(id: string) {
    let element = document.querySelector(id)
    if (element) return element 
    else throw new Error(`Element with the id of: ${id} didn't exist.` )
}

const root = ReactDOM.createRoot(assertQuerySelector('#root'));
root.render(
    <Textarea/>
)
