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
const [hamster2Stats, setHamster2Stats] = useState(false)

//SET TO VISIBLE
const [isVisible, setIsVisible] = useState(false);

	//GET RANDOM HAMSTERS
	async function getRandomHamsters() {
		
		const response1 = await fetch('/hamsters/random', { method: 'GET' })
		const response2 = await fetch('/hamsters/random', { method: 'GET' })
		const data1 = await response1.json()
		const data2 = await response2.json()

		//MAKE SURE U DON'T GET 2 IDENTICAL OBJECTS
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



	//HAMSTER 1 (<-) ON CLICK/VOTE
	async function voteHamster1() {
		
		if (!hamster1 || !hamster2) {
			return
		}
		setHamster1({
			...hamster1,
			wins: hamster1.wins + 1,
			games: hamster1.games + 1
		})
		setHamster2({
			...hamster2,
			defeats: hamster2.defeats + 1,
			games: hamster2.games + 1
		})
		const changeWinner = {
			wins: hamster1.wins + 1,
			games: hamster1.games + 1
		} 

		const changeLoser = {
			defeats: hamster2.defeats + 1,
			games: hamster2.games + 1
		}

		setHamster1Stats(true)


		const response1 = await fetch('/hamsters/'+hamster1.id , { 
		method: 'PUT', 
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(changeWinner) });
		
		const response2 = await fetch('/hamsters/'+hamster2.id , { 
		method: 'PUT', 
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(changeLoser) });
	}

	//HAMSTER 1 (->) ON CLICK/VOTE
	async function voteHamster2() {
		
		if (!hamster1 || !hamster2) {
			return
		}

		setHamster2({
			...hamster2,
			wins: hamster2.wins + 1,
			games: hamster2.games + 1
		})

		setHamster1({
			...hamster1,
			defeats: hamster1.defeats + 1,
			games: hamster1.games + 1
		})

		const changeWinner = {
			wins: hamster2.wins + 1,
			games: hamster2.games + 1
		} 


		const changeLoser = {
			defeats: hamster1.defeats + 1,
			games: hamster1.games + 1
		}

		setHamster2Stats(true)


		const response1 = await fetch('/hamsters/'+hamster1.id , { 
		method: 'PUT', 
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(changeWinner) });
		
		const response2 = await fetch('/hamsters/'+hamster2.id , { 
		method: 'PUT', 
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(changeLoser) });
	}




	// IS HAMSTER OBJECT NULL?
	if (!hamster1 || !hamster2) {
			return (
				<div>Loading...</div>
			)
		}

	// RETURN JSX 
	return (
		<div className="Battle">

			<h1>BATTLE</h1>

			<div className="battleBoxes">
				<section className="battle Left">
					<img className="hamsterImg" src={`/img/${hamster1.imgName}`} alt="img of hamster" />
					<div className="hamsterInfo1">
						<BattleItem hamster={hamster1}/>
						{ hamster1Stats || hamster2Stats && 
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
						{ hamster1Stats || hamster2Stats && 
							<div>
								<p>WINS: {hamster2.wins}</p>
								<p>DEFEATS: {hamster2.defeats}</p>
								<p>GAMES: {hamster2.games}</p>
							</div>
						}

					</div>
				 
						<button 
							className="btn"
							onClick={voteHamster2}>   Vote (-&gt;)
						</button>
					
				</section>

				

			</div>
				<button className="btn" onClick={getRandomHamsters}>New Battle</button>
			<Link to="/"><h3 className="exit">EXIT(ESC)</h3></Link>

		</div>
		)

	}

export default Battle;