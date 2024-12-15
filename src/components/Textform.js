import React,{useState} from 'react'
// react hooks 
export default function Textform(props) {
  const [kuchbhi,setText] = useState('Enter text here');
  // setText("sdfghjk");
  // text="dgfhf";  //gives error
  const handleUppercaseClick=()=>{
    console.log("Uppercase was clicked "+ kuchbhi);
    let newText=kuchbhi.toUpperCase();
    setText(newText); 
  }
  const onchange=(event)=>{
    console.log("text changed");
    setText(event.target.value);
  }

  const handleLowercaseClick=()=>{
    let newText=kuchbhi.toLowerCase();
    setText(newText);
  }
  const handleClearText=()=>{
    let newText=" ";
    setText(newText);
  }
  const handleCopyText=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newText=kuchbhi.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCamelCase=()=>{
    const words = kuchbhi.split(' ');
    const capitalizedWords = words.map((word) => {
      // Capitalize the first letter of each word, and keep the rest of the word as is
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const newText = capitalizedWords.join(' '); // Join the words back into a string
    setText(newText);
  }
  return ( 
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={onchange} value={kuchbhi} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
        </div> 
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to uppercase</button> 
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear text</button>  
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy text</button>  
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>  
        <button className="btn btn-primary mx-2 my-2" onClick={handleCamelCase}>Convert to camel case</button>  
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Ur text summary</h2>
        <p>{kuchbhi.split(" ").length} words,{kuchbhi.length} characters</p>
        <p>Took {(kuchbhi.split(" ").length)*0.008} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{kuchbhi.length>0?kuchbhi:"Enter something to preview it here."}</p>
    </div>
    </>
  )
}
