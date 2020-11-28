import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { getChallenges } from "../../utils/challengesAPI";

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [challengeList, setChallengeList] = useState();
  
    const updateInput = async (input) => {
       const filtered = challengeistDefault.filter(challenge => {
        return challenge.name.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setChallengeList(filtered);
    }
  
    useEffect( () => {fetchData()},[]);
      
    return (
      <>
        <h1>Challenge List</h1>
        <SearchBar 
         input={input} 
         onChange={updateInput}
        />
        <ChallengeList challengeList={challengeList}/>
      </>
     );
  }
  
  export default SearchPage