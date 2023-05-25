import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
  

    function handleDictionResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    function handlePicturesResponse(response) {
      setPhotos(response.data.photos); 
    }

    function search(event) {
        event.preventDefault();
  
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleDictionResponse);

        let picturesApiKey = "7c7c01b3o61054ff6ad979eactc00ad2";
        let picturesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${picturesApiKey}`;
        axios.get(picturesApiUrl).then(handlePicturesResponse);
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
          <Results results={results} />
          <Photos photos={photos} />
        </section>
      </div>
    );
}