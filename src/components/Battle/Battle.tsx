import './Battle.css'
import { Hamster } from '../../types/Hamster'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useEffect, useState } from 'react'
import AddHamster from '../AddHamster/AddHamster';
import { isConstructorDeclaration } from 'typescript';


const Battle = () => {
// const [hamster1, setHamster1] = useState < null | Hamster>(null)
const [hamster1, setHamster1] = useState({
	id: "",
	name: "",
	age: "", 
	favFood: "",
	loves: "",
	imgName: "", 
	wins: "", 
	defeats: "", 
	games: ""
})

const [hamster2, setHamster2] = useState({
	id: "",
	name: "",
	age: "", 
	favFood: "",
	loves: "",
	imgName: "", 
	wins: "", 
	defeats: "", 
	games: ""
})


async function getRandomHamsters() {
		const response1 = await fetch('/hamsters/random', { method: 'GET' })
		const response2 = await fetch('/hamsters/random', { method: 'GET' })
		const data1 = await response1.json()
		const data2 = await response2.json()

			// if (data1) {
			// 	setHamster1(data1) 
			// } else {
			// 	"hämtar hamstrar från API..."
			// }
			// if (data2) {
			// 	setHamster2(data2) 
			// } else{
			// 	"hämtar hamstrar från API..."
			// }
			
		
		//Make sure you don't get two simliar hamsters
		// {data1 === data2 ? getRandomHamsters() : setHamster1(data1) && setHamster2(data2)}
		// {data2 === data1 ? getRandomHamsters() : setHamster2(data2)}
			setHamster1(data1)
			setHamster2(data2)
		
}



useEffect(() => {
		getRandomHamsters()
		
	}, [])


	return (
		<div className="Battle">

			
			<h1>BATTLE</h1>

			<div className="battleBoxes">
				<section className="battle Left">
					<img className="hamsterImg" src={`/img/${hamster1.imgName}`} alt="img of hamster" />
					<div className="hamsterInfo1">
						<p>NAME: {hamster1.name.toUpperCase()} </p>
						<p>AGE: {hamster1.age}</p>
						<p>LOVES: {hamster1.loves.toUpperCase()}</p>

					</div>
					<button className="btn"> (&lt;-)   Vote</button>
				</section>

				<h2>VS</h2>

				<section className="battle Right">
					<img className="hamsterImg" src={`/img/${hamster2.imgName}`} alt="img of hamster" />
					<div className="hamsterInfo1">
						<p>NAME: {hamster2.name.toUpperCase()} </p>
						<p>AGE: {hamster2.age}</p>
						<p>LOVES: {hamster2.loves.toUpperCase()}</p>

					</div>
					<button className="btn">   Vote (-&gt;)</button>
				</section>

			</div>

			<Link to="/"><h3 className="exit">EXIT(ESC)</h3></Link>

		</div>
		)

	}

export default Battle;