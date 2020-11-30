/* eslint-disable no-use-before-define */
import React from 'react';

export default function SearchBar ({keyword,setKeyword}) {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", margin:"1rem"};
  console.log(keyword, setKeyword)
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder="Please Search for Challenges"
     onChange={(e) => {
      console.log(e.target.value) 
      setKeyword(e.target.value)
    }}
    />
  );
}