import {BrowserRouter as Router} from 'react-router-dom';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Content from './layout/Content/Content';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
