import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes/mainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/lib/owlcarousel/assets/owl.carousel.min.css';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div class="app">
      <Header />
      <Menu />
      <MainRoutes />
      <Footer />
      <a href="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>
    </div>
  );
}

export default App;
