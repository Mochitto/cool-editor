import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';

import { textNode, parseText, addColorProp } from '../libs/highlight';

function getTextNodes(text: string): textNode[] {
    const parsedText = parseText(text)
    const coloredTextNodes = addColorProp(parsedText)
    return coloredTextNodes
}

const SpanFragments = ({text}: {text: string}) => {
    return (
        <React.Fragment>
            {getTextNodes(text).map((textNode: textNode) => (
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