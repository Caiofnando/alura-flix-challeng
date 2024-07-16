// src/pages/Home/Home.js
import React, { useState } from 'react';
import VideoCard from '../../components/VideoCard/VideoCard';
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([
    { imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg', linkUrl: 'https://www.imdb.com/title/tt6966692/', title: 'Green Book' },
    { imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjc1Mjg5NjItY2I2MS00NDk3LWI5NGYtNzZjNTNiZmMwZTA3XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg', linkUrl: 'https://www.imdb.com/title/tt10059518/', title: 'Fúria Incontrolável' },
    // Adicione mais vídeos aqui
  ]);

  const [imageUrl, setImageUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [title, setTitle] = useState('');

  const adicionarFilme = () => {
    if (imageUrl.endsWith('.jpg') || imageUrl.endsWith('.png') || imageUrl.endsWith('.jfif')) {
      setVideos([...videos, { imageUrl, linkUrl, title }]);
      setImageUrl('');
      setLinkUrl('');
      setTitle('');
    } else {
      alert('Imagem inválida');
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="page-title">Aluraflix Caio Fernando</h1>
        <img src="https://via.placeholder.com/200" className="page-logo" alt="Logo" />
        <p className="page-subtitle"><big>Escolha ou adicione o seu filme favorito!</big></p>
        <div className="form-wrapper">
          <input
            type="text"
            id="imagemFilme"
            name="filme"
            placeholder="Insira endereço de imagem"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            id="linkFilme"
            name="filme"
            placeholder="Insira endereço do link"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
          <input
            type="text"
            id="nomeFilme"
            name="filme"
            placeholder="Insira nome do filme"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={adicionarFilme}>Adicionar Filme</button>
        </div>
      </div>
      <div id="listaFilmes">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            imageUrl={video.imageUrl}
            linkUrl={video.linkUrl}
            title={video.title}
          />
        ))}
      </div>
      <a href="https://alura.com.br/" target="_blank" rel="noopener noreferrer">
        <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="Alura Logo" className="alura-logo" />
      </a>
    </div>
  );
};

export default Home;
