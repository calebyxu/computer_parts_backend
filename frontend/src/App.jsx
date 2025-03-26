import './assets/css/styles.css'
import Navbar from './components/NavBar.jsx'
import React, { useState, useEffect } from "react";
import { BsGraphDown } from "react-icons/bs";
import { TbCircuitBattery } from "react-icons/tb";

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
			{/* {(typeof backendData.users === 'undefined') ? (
				<p>Loading...</p>
			) : (
				backendData.users.map((user, i) => (
					<p key={i}>{user}</p>
				))
			)} */}
			{/* <BsGraphDown className="graph" viewBox= "0 0 100 100"/> */}
		</>
  	);
}

export default App;

