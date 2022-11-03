import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes/mainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/lib/owlcarousel/assets/owl.carousel.min.css';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <MainRoutes />
      <Footer />
      <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </div>
  );
}

export default App;
