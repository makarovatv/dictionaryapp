import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
  

    function handleDictionResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response) {
      console.log(response.data); 
    }

    function search(event) {
        event.preventDefault();
  
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelsApiKey =
          "VTLnH0eqZSYVBwYCcROKIiPXc4jHCLUEOrpjesqStvGGS7WW2uCOrjbw";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { Autorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
}