
import Footer from '../footer/footer';
import Header from '../header/header';
function NotFound(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <div className="container">
        <section>
          <h1>404. Page not found</h1>
          <a href="/">Вернуться на главную</a>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;
