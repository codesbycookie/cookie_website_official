import Header from './components/Navbar/Header';
import Hero from './pages/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
       
      </main>
      <Footer/>
    </div>
  );
}

export default App;