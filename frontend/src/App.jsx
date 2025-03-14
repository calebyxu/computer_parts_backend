import './assets/css/App.css'
import Navbar from './components/NavBar.jsx'
import React, { useState, useEffect } from "react";

function App() {

	const [backendData, setBackendData] = useState([{}])

	useEffect(() => {
		fetch("http://localhost:5000/api"
		).then(
			response => response.json()
		).then(
			data => {
				setBackendData(data)
			}
		);
	}, []);

	return (
		<>
			<Navbar />
			{(typeof backendData.users === 'undefined') ? (
				<p>Loading...</p>
			) : (
				backendData.users.map((user, i) => (
					<p key={i}>{user}</p>
				))
			)}
		</>
  	);
}

export default App;

