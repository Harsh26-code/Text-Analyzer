import React,{useState} from 'react'

export default function Navbar(props) {
  const handleUpClick=()=>{
    //console.log("UpperCase was Clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to ygbb UpperCase!","success");
  }
  const handleLoClick=()=>{
    //console.log("UpperCase was Clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  }
const handleClrClick=()=>{
  //console.log("UpperCase was Clicked");
  let newText=('');
  setText(newText);
  props.showAlert("Text Cleared!","success");
}
const handleCopy=()=>{
 let newText=document.getElementById("exampleFormControlTextarea1");
 newText.select();
 navigator.clipboard.writeText(newText.value);
 props.showAlert("Text Copied to Clipboard!","success");
}
const handleClick=()=>{
//  let newText=text.split(/[ ]+/);
//  setText(newText.join(" "));
 let temp=text;
 temp=temp.replace(/\s+/g, ' ').trim();
 setText(temp);
 props.showAlert("Extra space has been removed!","success");
 console.log(text);
}
const handleClickit=()=>{
  
  let words = text.split(" ");
  let capitalizedWords = words.map(word => {
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  setText( capitalizedWords.join(" "));

  props.showAlert("First letter Capitalized","success");

  // console.log(words);
}
  const handleOnChange=(event)=>{
    // console.log("UpperCase was Clicked");
    // Event.target.value is written because textarea className="form-control" iske andar ek value ha jo ki Text ke barabar ha.
    // Text ek aasa variable ha jo ki State ko belong karta handleOnChange.
    setText(event.target.value);
  }
  // State Variable
  const[text, setText] = useState(''); 
  // setText();
  return (
<> 
<div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
{/* <h2>{props.heading}</h2> */}
<h1>{props.heading}</h1>
  <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(19, 70, 110)':'white',color:props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button> 
  <button className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear Text</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleClick}>Remove Extra Space</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleClickit}>Make First Character Capital</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
  <h1 >Your Text Summary</h1>
    {/* <p>{<b style={{color: "deeppink"}}>{text.split(" ").length}</b>} <b style={{color: "blue"}}>Words</b> <b style={{color: "green"}}>and</b> {<b style={{color: "deeppink"}}>{text.length}</b>} <b style={{color: "blue"}}>Characters</b>
     </p> */}
     <p>{text.length===0?0:text.split(" ").length} Words and {text.length-text.split(" ").length+1} Characters</p>
     <h1>Preview</h1>
     <p>{text.length>0?text:"Enter something to preview here"}</p>
  </div>
</>
  )
}