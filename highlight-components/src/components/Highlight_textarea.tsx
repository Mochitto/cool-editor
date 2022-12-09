import React, { useState} from 'react';
// Components
import SpanFragments from './Highlighted_spans';

const Textarea: React.FC = () => {

    const [text, setText] = useState<string>("")

    return (
        <section className="editor">
            <div id='text'>
                <SpanFragments text={text}/>
            </div>
            <textarea 
            name="textarea" id="textarea" 
            onInput={(event) => {setText(event.currentTarget.value)}} 
            value={text}>
            </textarea>
        </section>
    )
}

export default Textarea;