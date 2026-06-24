/* React kütüphanesinden useState'i import et */
/* İlgili dosyadan sampleData'yı import et */
/* İlgili dosyadan PostList'i import et */

import { useState } from "react";
import sampleData from "./sampleData.js";
import PostList from "./components/PostList.jsx";
import "./App.css";

function App() {
  /* Bir state oluştur, sampleData bu state'in başlangıç değeri olmalı  */
  const [place, setPlace] = useState(sampleData);

  function handleClap(postId) {
    const copyState = [...place];
    const clappedItem = copyState.filter((item) => item.id === postId)[0];
    clappedItem.claps = clappedItem.claps + 1;
    setPlace(copyState);
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>photogram.</h1>
      </div>
      <PostList items={place} clapAction={handleClap} />
    </div>
  );
}

export default App;
