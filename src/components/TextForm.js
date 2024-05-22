import React,{useState} from 'react'

//import PropTypes from 'prop-types'



export default function TextForm(props) {
  const handleUpClick =() =>{
    //console.log("Button is clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText);
  }
  const handleLoClick =() =>{
    //console.log("Button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick =() =>{
    //console.log("Button is clicked");
    let newText = '';
    setText(newText);
    props.showAlert("All the text got cleared","warning")
  }
  const handleOnChange =(event) =>{
    //console.log("Handle on Change");
    setText(event.target.value)
  }
  const handleCopy =() =>{
    var text =document.getElementById("myBox");
    text.select();
    console.log("Text Copied");
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied to clipboard","success")
    
    
  }
  const handleExtraSpaces =() =>{
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed","success")
  }
  
    
  
  
  const [text,setText] = useState('');
  return (
    <>
    <div className ="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className ="mb-3">
        <h1>{props.heading} </h1>
        <textarea id ="myBox" className = "form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} value ={text} onChange ={handleOnChange} rows ="8"></textarea>
      </div>
      <button className ="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className ="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className ="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear</button>
      <button className ="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className ="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Word Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length}Minutes to read</p>
      <h2>Preview</h2>
      {text.length>0?text:"Enter the text to privew"}
    </div>
    </>
  )
}

//TextForm.propTypes ={
 // heading:PropTypes.string,
//}
//TextForm.defaultProp ={
  //heading:'Enter text here'
//}
