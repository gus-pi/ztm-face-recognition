import ParticlesBg from 'particles-bg';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Rank from './components/Rank';

function App() {
  return (
    <div>
      <div className="particles">
        <ParticlesBg type="cobweb" color="#ADD8E6" bg={true} num={100} />
      </div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
