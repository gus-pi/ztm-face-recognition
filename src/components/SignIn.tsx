const SignIn = ({ onRouteChange }: { onRouteChange: (s: string) => void }) => {
  return (
    <article className="rounded-lg border border-gray-300 my-4 w-full md:w-1/2 lg:w-1/4 max-w-6xl shadow-lg mx-auto">
      <main className="p-6 text-gray-800">
        <div className="w-full">
          <fieldset id="sign_up" className="border-0 p-0 m-0">
            <legend className="text-3xl font-bold m-0">Sign In</legend>
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
              />
            </div>
          </fieldset>
          <div className="mt-6 text-center">
            <input
              onClick={() => onRouteChange('home')}
              className="font-semibold py-2 px-3 border border-black bg-transparent hover:bg-gray-900 hover:text-white cursor-pointer transition-colors"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="mt-4 text-center">
            <p
              onClick={() => onRouteChange('register')}
              className="text-sm text-gray-800 cursor-pointer hover:text-gray-900"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default SignIn;
