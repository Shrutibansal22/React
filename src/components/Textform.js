import React,{useState} from 'react'
// import Navbar from './Navbar';
// react hooks 
export default function Textform(props) {
  const [kuchbhi,setText] = useState('Enter text here');
  // setText("sdfghjk");
  // text="dgfhf";  //gives error
  const handleUppercaseClick=()=>{
    console.log("Uppercase was clicked "+ kuchbhi);
    let newText=kuchbhi.toUpperCase();
    setText(newText); 
    props.showAlert("converted to uppercase","danger");
  }
  const onchange=(event)=>{
    console.log("text changed");
    setText(event.target.value);
    props.showAlert("text changed","primary");
  }

  const handleLowercaseClick=()=>{
    let newText=kuchbhi.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }
  const handleClearText=()=>{
    let newText=" ";
    setText(newText);
    props.showAlert("text cleared successfully","secondary");
  }
  const handleCopyText=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied successfully ","warning");
  }
  const handleExtraSpaces=()=>{
    let newText=kuchbhi.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed successfully ","primary");
  }
  const handleCamelCase=()=>{
    const words = kuchbhi.split(' ');
    const capitalizedWords = words.map((word) => {
      // Capitalize the first letter of each word, and keep the rest of the word as is
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const newText = capitalizedWords.join(' '); // Join the words back into a string
    setText(newText);
    props.showAlert("converted to camelcase","danger");
  }
  return ( 
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={onchange} value={kuchbhi} style={{backgroundColor:props.mode==='dark'?'#1A1853':'white' ,color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
        </div> 
        <button disabled={kuchbhi.length===0} style={{backgroundColor:props.btnbg,color:'white',border:'none',borderRadius:'5px',padding:'4px',fontSize:'20px',margin:'2px 2px'}} onClick={handleUppercaseClick}>Convert to uppercase</button> 
        <button disabled={kuchbhi.length===0} style={{backgroundColor:props.btnbg,color:'white',border:'none',borderRadius:'5px',padding:'4px',fontSize:'20px',margin:'2px 2px'}} onClick={handleClearText}>Clear text</button>  
        <button disabled={kuchbhi.length===0} style={{backgroundColor:props.btnbg,color:'white',border:'none',borderRadius:'5px',padding:'4px',fontSize:'20px',margin:'2px 2px'}} onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button disabled={kuchbhi.length===0} style={{backgroundColor:props.btnbg,color:'white',border:'none',borderRadius:'5px',padding:'4px',fontSize:'20px',margin:'2px 2px'}} onClick={handleCopyText}>Copy text</button>  
        <button disabled={kuchbhi.length===0} style={{backgroundColor:props.btnbg,color:'white',border:'none',borderRadius:'5px',padding:'4px',fontSize:'20px',margin:'2px 2px'}} onClick={handleExtraSpaces}>Remove extra Spaces</button>  
        <button disabled={kuchbhi.length===0} style={{backgroundColor:props.btnbg,color:'white',border:'none',borderRadius:'5px',padding:'4px',fontSize:'20px',margin:'2px 2px'}} onClick={handleCamelCase}>Convert to camel case</button>  
    </div> 

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Ur text summary</h2>
        <p>{kuchbhi.split(" ").filter((element)=>{return element.length!==0}).length} words,{kuchbhi.length} characters</p>
        <p>Took {(kuchbhi.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{kuchbhi.length>0?kuchbhi:"Enter something to preview it here."}</p>
    </div>
    </>
  )
}
