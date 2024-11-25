import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Rank from './components/Rank';

function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
