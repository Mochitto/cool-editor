import React from 'react';
// Libs
import { textNode, getTextNodes } from '../libs/highlight';

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