import './Battle.css'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Battle = () => {
	
	return (
		<div className="Battle">
			
				<h1>BATTLE</h1>
			

			<div className="battleBoxes">
				<section className="image Left">
					<img src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="image of hamster" />
					<div className="hamsterInfo1">
						<p>Name: </p>
						<p>Age:</p>
						<p>Likes:</p>

					</div>
					<button className="btn"> (&lt;-)   Vote</button>
				</section>

				<h2>VS</h2>

				<section className="image Left">
					<img src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="image of hamster" />
					<div className="hamsterInfo2">
						<p>Name: </p>
						<p>Age:</p>
						<p>Likes:</p>
					</div>
					<button className="btn">Vote (-&gt;)</button>
				</section>

			</div>

			<Link to="/"><h3 className="exit">EXIT(ESC)</h3></Link>

		</div>
		)

	}

export default Battle;