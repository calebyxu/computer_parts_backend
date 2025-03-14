import './assets/css/App.css'
import Navbar from './components/NavBar.jsx'
import React, { useSate, useEffect } from "react";

function App() {
	useEffect(() => {
		fetch("http://localhost:8000")
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	});

	return (
		<>
			<Navbar />
		</>
  	);
}

export default App;

