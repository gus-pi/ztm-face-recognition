import { Component } from 'react';

interface RegisterState {
  registerName: string;
  registerEmail: string;
  registerPassword: string;
}

class Register extends Component<
  { onRouteChange: (s: string) => void; loadUser: (user: any) => void },
  RegisterState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: '',
    };
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      registerName: event.target.value,
    });
  };

  onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      registerEmail: event.target.value,
    });
  };

  onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      registerPassword: event.target.value,
    });
  };

  onSubmitRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <article className="rounded-lg border border-gray-300 my-4 w-full md:w-1/2 lg:w-1/4 max-w-6xl shadow-lg mx-auto">
        <main className="p-6 text-gray-800">
          <div className="w-full">
            <fieldset id="sign_up" className="border-0 p-0 m-0">
              <legend className="text-3xl font-bold m-0">Register</legend>
              <div className="mt-4">
                <label
                  className="block font-semibold leading-tight text-sm"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="p-2 w-full border border-gray-400 bg-transparent hover:bg-gray-900 hover:text-white transition-colors"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt-4">
                <label
                  className="block font-semibold leading-tight text-sm"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="p-2 w-full border border-gray-400 bg-transparent hover:bg-gray-900 hover:text-white transition-colors"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mt-4">
                <label
                  className="block font-semibold leading-tight text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="p-2 w-full border border-gray-400 bg-transparent hover:bg-gray-900 hover:text-white transition-colors"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="mt-6 text-center">
              <input
                onClick={this.onSubmitRegister}
                className="font-semibold py-2 px-3 border border-black bg-transparent hover:bg-gray-900 hover:text-white cursor-pointer transition-colors"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
