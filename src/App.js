import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import MainSection from './components/MainSection/MainSection';
import './App.css';

function App() {
	const [isChatBotVisible, setIsChatBotVisible] = useState(false);
	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: 'ease',
			delay: 500,
		});
	}, []);
	return (
		<div className="App">
			<HeroSection setIsChatBotVisible={setIsChatBotVisible} />
			<MainSection isChatBotVisible={isChatBotVisible} />
			<Footer />
		</div>
	);
}

export default App;
