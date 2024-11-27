import ParticlesBg from 'particles-bg';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Rank from './components/Rank';
import { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn';
import Register from './components/Register';

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
  name: string;
  email: string;
  entries: number;
  joined: string;
}

// Define the shape of the component's state
interface AppState {
  input: string;
  imageUrl: string;
  user: User;
  box: {};
  route: string;
  isSignIn: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
    };
  }

  loadUser = (data: User) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

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
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              //@ts-ignore
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route: string) => {
    if (route === 'signout') {
      this.setState({ isSignIn: false });
    } else if (route === 'home') {
      this.setState({ isSignIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div>
        <div className="particles">
          <ParticlesBg type="cobweb" color="#ADD8E6" bg={true} num={100} />
        </div>
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignIn={this.state.isSignIn}
        />
        {this.state.route === 'home' ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </div>
        ) : this.state.route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;
