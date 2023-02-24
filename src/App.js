import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<MainSection />
			<Footer />
		</div>
	);
}

export default App;
