import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [btnName, setBtnName] = useState('Copy Text');
  const convertToUppercase = () => {
    setText(text.toUpperCase());
  };
  const convertToLowercase = () => {
    setText(text.toLowerCase());
  };
  const removeExtraSpaces = () => {
    setText(text.split(' ').filter(word => word).join(' ').trim());
  };
  const clearText = () => {
    setText('');
  };
  const copyText = () => {
    navigator.clipboard.writeText(text)
    setBtnName('Copied')
    setTimeout(() => {
      setBtnName('Copy Text')
    }, 2000);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const trimedText = text.trim()
  return (
    <div className={`container text-${props.mode === 'dark' ? 'white' : 'black'}`}>
      <div className="container my-3 ">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control border-dark rounded"
            style={{backgroundColor:props.mode === 'dark' ? 'black' : 'white',color:'white'}}
            id="myText"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-dark m-1"
          onClick={convertToUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-dark m-1"
          onClick={convertToLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-dark m-1"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-dark m-1"
          onClick={copyText}
        >
          {btnName}
        </button>
        <button
          className="btn btn-dark m-1"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div className="container">
        <h4>Your text summary 🔎...</h4>
        <p>{trimedText.length === 0 ? 0 : trimedText.split(' ').length } words and {trimedText.length} characters</p>
      </div>
    </div>
  );
}

TextForm.prototype = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "set heading here",
};
