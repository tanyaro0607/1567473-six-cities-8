import Navigation from '../navigation/navigation';
import Logo from '../logo/logo';


function Header(): JSX.Element {
  const userEmail = 'test@mail.ru';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Navigation userEmail={userEmail} />
        </div>
      </div>
    </header>
  );
}

export default Header;
