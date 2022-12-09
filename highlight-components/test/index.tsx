import * as ReactDOM from 'react-dom/client';
// Components
import Textarea from './components/Highlight_textarea';
// Style
import './App.css'

function assertQuerySelector(id: string) {
    let element = document.querySelector(id)
    if (element) return element 
    else throw new Error(`Element with the id of: ${id} didn't exist.` )
}

const root = ReactDOM.createRoot(assertQuerySelector('#root'));
root.render(
    <Textarea/>
)
