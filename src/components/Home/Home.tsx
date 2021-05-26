import './Home.css';
import hammy from "../../img/hammy.png";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



const Home = () => {
	
	return (
		<div className="Home">
			<h1>HAMSTERWARS</h1>
			<img className="hammy" src={hammy} alt="image of hammy the hamster" />
			<p className="maintxt">Hi, My name is hammy. And this is Hamsterwars! </p>
			<p className="maintxtAlt">You’ve got three options here:</p>
			<p className="maintxt"> 
			1. Press the ‘battle’ button to vote for the cutest hamster. <br />
			2. press the ‘gallery’ button to view all the hamsters. <br />
			3. Get outta here (plz don’t leave me) 
			</p>
			<Link to="/battle"><button className="btn">battle</button></Link>
			<Link to="/gallery"><button className="btn">gallery</button></Link>
		</div>
		)

	}


export default Home