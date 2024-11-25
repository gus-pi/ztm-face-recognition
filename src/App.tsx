import ParticlesBg from 'particles-bg';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Rank from './components/Rank';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onSubmit = () => {
    console.log('click');
  };

  return (
    <div>
      <div className="particles">
        <ParticlesBg type="cobweb" color="#ADD8E6" bg={true} num={100} />
      </div>
      <Navigation />
      <Logo />
      <Rank />s
      <ImageLinkForm onQueryChange={onQueryChange} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
