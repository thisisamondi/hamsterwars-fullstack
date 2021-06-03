import './Battle.css'
import { Hamster } from '../../types/Hamster'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import BattleItem from './BattleItem'


const Battle = () => {

//HAMSTER OBJECTS
const [hamster1, setHamster1] = useState<null | Hamster>(null)
const [hamster2, setHamster2] = useState<null | Hamster>(null)

//HAMSTER STATS
const [hamster1Stats, setHamster1Stats] = useState(false)

//SET TO VISIBLE
const [isVisible, setIsVisible] = useState(false);

//GET RANDOM HAMSTERS
async function getRandomHamsters() {
	
	const response1 = await fetch('/hamsters/random', { method: 'GET' })
	const response2 = await fetch('/hamsters/random', { method: 'GET' })
	const data1 = await response1.json()
	const data2 = await response2.json()

	
	if (data1.id === data2.id) {
		getRandomHamsters()
	} else {
		setHamster1(data1)
		setHamster2(data2)
	}
			
}

	useEffect(() => {
		getRandomHamsters()
		
	}, [])

	
	async function voteHamster1() {
		
		if (!hamster1 || !hamster2) {
			return
		}
		setHamster1({
			...hamster1,
			wins: hamster1.wins + 1,
			games: hamster1.games +1,
		})
		const changeWinner = {
			wins: hamster1.wins +1,
			games: hamster1.games +1
		} 
		setHamster1Stats(true)


		const response = await fetch('/hamsters/'+hamster1.id , { 
		method: 'PUT', 
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(changeWinner) });
		
	}
	
	async function voteHamster2() {
		
		if (!hamster1 || !hamster2) {
			return
		}

		let data = {
			wins: hamster2.wins + 1,
			defeats: hamster1.defeats + 1,
			games: hamster2.games +1
		}


		const response = await fetch('/hamsters/:id' , { 
		method: 'PUT', 
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(data) });
		
		return response.json();
	}





	if (!hamster1 || !hamster2) {
			return (
				<div>Loading...</div>
			)
		}


	return (
		<div className="Battle">

			
			<h1>BATTLE</h1>

			<div className="battleBoxes">
				<section className="battle Left">
					<img className="hamsterImg" src={`/img/${hamster1.imgName}`} alt="img of hamster" />
					<div className="hamsterInfo1">
						<BattleItem hamster={hamster1}/>
						{hamster1Stats && 
							<div>
								<p>WINS: {hamster1.wins}</p>
								<p>DEFEATS: {hamster1.defeats}</p>
								<p>GAMES: {hamster1.games}</p>
							</div>
						}

					</div>

					<button 
						className="btn" 
						onClick={voteHamster1}> (&lt;-)   Vote
					</button>

				</section>

				<h2>VS</h2>

				<section className="battle Right">
					<img className="hamsterImg" src={`/img/${hamster2.imgName}`} alt="img of hamster" />

					<div className="hamsterInfo1">
						<BattleItem hamster={hamster2}/>
					</div>

					<button 
						className="btn"
						onClick={voteHamster2}>   Vote (-&gt;)
					</button>

				</section>

			</div>

			<Link to="/"><h3 className="exit">EXIT(ESC)</h3></Link>

		</div>
		)

	}

export default Battle;