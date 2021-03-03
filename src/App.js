import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';
import Navbar from './Components/NavBar/Navbar';

function App() {
  const [articles,setArticle] = useState([]);
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=78579c5cdc3c4f07ae7fce1c4e75bb75';

    fetch(url)
    .then(res => res.json())
    .then(data => setArticle(data.articles))
  },[])
  return (
    <div>
      <Navbar></Navbar>
      <h2>headlines: {articles.length}</h2>
      {
        articles.map(article=> <News article={article}></News>)
      }
    </div>
  );
}

export default App;
