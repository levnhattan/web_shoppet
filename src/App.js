import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Nav from './component/Nav';
import Routers from './component/router/Routers';
function App() {
  return (
    <div >
      <Header/>
      <Nav/>
      <Routers/>
      <Footer/>
      {/* <Home />
      <Product/> */}
    </div>
  );
}

export default App;
