import ParticlesBg from 'particles-bg';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Rank from './components/Rank';
import { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const returnClarifaiRequestOptions = (imageUrl: string) => {
  const PAT = '5c99ecce9bc84da98b455273e6bf1358';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'ci84gqtwtwmy';
  const APP_ID = 'test';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,

      app_id: APP_ID,
    },

    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT,
    },

    body: raw,
  };
  return requestOptions;
};

interface User {
  id: string;
  entries: number;
}

// Define the shape of the component's state
interface AppState {
  input: string;
  imageUrl: string;
  user: User;
  box: {};
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      user: {
        id: '', // Initialize with an empty string or actual ID if available
        entries: 0,
      },
      box: {},
    };
  }

  calculateFaceLocation = (data: any) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage') as HTMLImageElement;
    const width = Number(image?.width);
    const height = Number(image?.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box: any) => {
    this.setState({ box: box });
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log('click');
    fetch('http://localhost:3001/clarifai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl: this.state.input }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="particles">
          <ParticlesBg type="cobweb" color="#ADD8E6" bg={true} num={100} />
        </div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
