import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Dramas from './components/Dramas';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import FanArt from './components/FanArt';
import Blogs from './components/Blogs';
import Reviews from './components/Reviews';
import AuthSection from './components/AuthSection';
import Footer from './components/Footer';

function App() {
  const [trending, setTrending] = useState([]);
  const [dramas, setDramas] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [fanArt, setFanArt] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseURL = 'http://localhost:5000/api';
        
        const [
          trendingRes,
          dramasRes,
          charactersRes,
          episodesRes,
          fanArtRes,
          blogsRes,
          reviewsRes
        ] = await Promise.all([
          fetch(`${baseURL}/trending`),
          fetch(`${baseURL}/dramas`),
          fetch(`${baseURL}/characters`),
          fetch(`${baseURL}/episodes`),
          fetch(`${baseURL}/fanart`),
          fetch(`${baseURL}/blogs`),
          fetch(`${baseURL}/reviews`)
        ]);

        setTrending(await trendingRes.json());
        setDramas(await dramasRes.json());
        setCharacters(await charactersRes.json());
        setEpisodes(await episodesRes.json());
        setFanArt(await fanArtRes.json());
        setBlogs(await blogsRes.json());
        setReviews(await reviewsRes.json());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading Anime Universe...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Trending data={trending} />
      <Dramas data={dramas} />
      <Characters data={characters} />
      <Episodes data={episodes} />
      <FanArt data={fanArt} />
      <Blogs data={blogs} />
      <Reviews data={reviews} />
      <AuthSection />
      <Footer />
    </div>
  );
}

export default App;

