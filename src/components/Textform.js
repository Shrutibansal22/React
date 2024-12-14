import React,{useState} from 'react'
// react hooks 
export default function Textform(props) {
  const [kuchbhi,setText] = useState('Enter text here');
  // setText("sdfghjk");
  // text="dgfhf";  //gives error
  const handleUppercaseClick=()=>{
    console.log("Uppercase was clicked "+ kuchbhi);
    // const words = kuchbhi.split(' '); // Split the string into an array of words
    // const capitalizedWords = words.map((word) => {
    //   // Capitalize the first letter of each word, and keep the rest of the word as is
    //   return word.charAt(0).toUpperCase() + word.slice(1);
    // });
    // const newText = capitalizedWords.join(' '); // Join the words back into a string
    let newText=kuchbhi.toUpperCase();
    setText(newText); 
  }
  const onchange=(event)=>{
    console.log("text changed");
    setText(event.target.value);
  }
  return ( 
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={onchange} value={kuchbhi} id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to uppercase</button> 
    </div>
  )
}
