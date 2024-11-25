import ParticlesBg from 'particles-bg';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Rank from './components/Rank';
import { Component } from 'react';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      input: '',
    };
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log('click');
  };

  render() {
    return (
      <div>
        <div className="particles">
          <ParticlesBg type="cobweb" color="#ADD8E6" bg={true} num={100} />
        </div>
        <Navigation />
        <Logo />
        <Rank />s
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
