
import Footer from '../footer/footer';
import Header from '../header/header';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <div className="container">
        <section>
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;
