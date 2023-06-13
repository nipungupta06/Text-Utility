import React ,{ useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleUpClick= ()=>{
        setText(text.toUpperCase())
        props.showAlert('UPPER case done','success')
    }
    const handleLowClick= ()=>{
        setText(text.toLowerCase())
        props.showAlert('lower case done','success')
    }
    const handleClearClick= ()=>{
        setText("")
        props.showAlert('Text Cleared','success')
    }
    const handleReverse = () => {
        let strArr = text.split(" ");
        strArr = strArr.reverse();
        let newText = strArr.join(" ");
        setText(newText);
        props.showAlert('Succesfully Reversed the string','success')
      };
      const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
        props.showAlert('Removed Extra Spaces','success')
    }

    
    return (
        
        <>
            <div className="mb-3 my-3" style={{color:props.mode==="light"?'black':'white'}}>
                <h1>{props.title}</h1>
                <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.color2,color:props.mode==="light"?'black':'white'}} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>UPPERCASE</button>
                <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleLowClick}>lowercase</button>
                <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleClearClick}>Clear all</button>
                <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleReverse}>Reverse Text</button>
                <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container" style={{color:props.mode==="light"?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Letters</p>
                <p> {0.008*text.split(" ").length}Min to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}

