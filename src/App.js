import './App.css';
import { useState, useEffect } from 'react'
import {marked} from "marked"
import ReactMarkDown from "react-markdown";

const App = () => {
  const [content,setContent] = useState("")
  
  const viewContent = (e) => {
    setContent(e.target.value)
    createMarkup()
}
  const createMarkup = () => {
    return {__html:marked.parse(content)}
  }
  
  return (
    <div className = "container">
     <div className="row"> 
      <div className="col-lg-4"></div>
        <div className="col-lg-4">
        <div className="editor_contenedor">      
            <textarea id="editor" cols="30" rows="10"  onChange={viewContent}>{`
  This is a paragraph          

  # WELCOME
  ## Second WELCOME

  - list item 1
  - list item 2
  -list item 3

  [Visit THIS website](www.google.com)

  This is a inline \`<div></div>\`

  THIS IS A BLOCK OF CODE

 > THIS A BLOCKQUOTE
  \`\`\`
    let z = 1;
    let x = 2;
    let y = x + z;
  \`\`\`
  **THIS IS STRONG**
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
}</textarea>
    
        <div id="preview" dangerouslySetInnerHTML={createMarkup()}>
            </div>
          </div>
        </div>
      <div className="col-lg-4"></div>
    </div>
  </div>
  )}
export default App;
