const Navigation = ({
  onRouteChange,
  isSignIn,
}: {
  onRouteChange: (s: string) => void;
  isSignIn: boolean;
}) => {
  if (isSignIn) {
    return (
      <nav className="flex justify-end">
        <p
          onClick={() => onRouteChange('signout')}
          className="font text-xl underline p-3 cursor-pointer hover:opacity-50"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <>
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p
            onClick={() => onRouteChange('signin')}
            className="font text-xl underline p-3 cursor-pointer hover:opacity-50"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange('register')}
            className="font text-xl underline p-3 cursor-pointer hover:opacity-50"
          >
            Register
          </p>
        </nav>
      </>
    );
  }
};

export default Navigation;
