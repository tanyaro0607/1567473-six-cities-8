import Navigation from '../navigation/navigation';
import Logo from '../logo/logo';


function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
