import './Home.css';
import hammy from "../../img/hammy.png";
import { Link } from "react-router-dom";



const Home = () => {
	
	return (
		<div className="Home">
			<h1>HAMSTERWARS</h1>
			<div className="homeContainer">
				<img className="hammy" src={hammy} alt="hammy the hamster" />
				<p className="maintxt">
					HI, MY MY NAME IS HAMMY <br />
					AND THIS IS HAMSTERWARS!
				 </p>
				<p className="maintxtAlt">YOU'VE GOT THREE OPTIONS HERE</p>
				<p className="maintxt"> 
				1. PRESS THE 'BATTLE' BUTTON TO VOTE FOR THE CUTEST HAMSTER. <br />
				2. PRESS THE 'GALLERY' BUTTON TO VIEW ALL THE HAMSTERS. <br />
				3. GET OUTTA HERE (plz don’t leave me) 
				</p>
				<Link to="/battle"><button className="btn">battle</button></Link>
				<Link to="/gallery"><button className="btn">gallery</button></Link>
			</div>
		</div>
		)

	}


export default Home