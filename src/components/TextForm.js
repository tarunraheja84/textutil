import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Text has been cleared","success")
    }
    const handleAlternateClick=()=>{
        let chars = text.toLowerCase().split("");
  for (let i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  setText(chars.join(""));
  props.showAlert("Text has been alternated","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const countWords=(text)=>{
        let arr=text.split(" ");
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]!=="")
            count++;
        }
        return count;
    }
    
    const [text, setText]=useState("");
    return (
        <>
    <div className="container">
    <h1>{props.heading}</h1>
      <div className="mb-3" >
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  rows="8" ></textarea>
</div>
  <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleUpClick }>Convert to Upper Case</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleLoClick }>Convert to Lower Case</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleClearClick }>Clear Text</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleAlternateClick }>Alternate Text</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?"white":"black"}}>
      <h2>Your Text summary</h2>
      <p>{countWords(text)} words ,{text.length} characters</p>
      <p>{0.008*countWords(text)} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to preview it here"}</p>     
  </div>
  </>
  )
}
