import './AddHamster.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Hamster } from '../../types/Hamster'


const AddHamster = () => {
	
	const id = ''

	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)
	
	const [age, setAge] = useState('')
	const [ageTouched, setAgeTouched] = useState(false)

	const [favFood, setFavFood] = useState('')
	const [favFoodTouched, setFavFoodTouched] = useState(false)

	const [loves, setLoves] = useState('')
	const [lovesTouched, setLovesTouched] = useState(false)

	const [img, setImg] = useState('')
	const [imgTouched, setImgTouched] = useState(false)


	//NAME INPUT VALIDATION
	let nameIsValid: boolean = true
	let nameErrorMessage: string = ''
	if( name === '' ) {
		nameIsValid = false
		nameErrorMessage = 'Please type your name.'
	}
	let nameClass = ''
	if( nameTouched ) {
		nameClass = (nameIsValid ? 'valid' : 'error')
	}

	//AGE INNPUT VALIDATION
	const allowedAgeCharacters = "0123456789"
	let ageIsValid: boolean = true
	let ageErrorMessage: string = ''

	if( age === '' ) {
		ageIsValid = false
		ageErrorMessage = 'Please type your age.'

	} 
	else if( !age.split('').every(char => allowedAgeCharacters.includes(char)) ) {
		ageIsValid = false
		ageErrorMessage = 'Type your age like this: "27".'
	}
	let ageClass = ''
	if( ageTouched ) {
		ageClass = (ageIsValid ? 'valid' : 'error')
	}

	//FAV FOOD INPUT VALIDATION
	let favFoodIsValid: boolean = true
    let favFoodErrorMessage: string = ''
    if( favFood === '' ) {
        favFoodIsValid = false
        favFoodErrorMessage = 'Please type your favorite food.'
    } 
	let favFoodClass = ''
	if( favFoodTouched ) {
		favFoodClass = (favFoodIsValid ? 'valid' : 'error')
	}

	//LOVES INPUT VALIDATION
    let lovesIsValid: boolean = true
    let lovesErrorMessage: string = ''
    if( loves === '' ) {
        lovesIsValid = false
        lovesErrorMessage = 'Please type in what you love.'
    }
	let lovesClass = ''
	if( lovesTouched ) {
		lovesClass = (lovesIsValid ? 'valid' : 'error')
	}

	//IMAGE INPUT VALIDATION
	let imgIsValid: boolean = true
    let imgErrorMessage: string = ''
    if( img === '' ) {
        imgIsValid = false
        imgErrorMessage = 'Please type url to img'
    }
	let imgClass = ''
	if( imgTouched ) {
		imgClass = (imgIsValid ? 'valid' : 'error')
	}


	let formIsInvalid = !nameIsValid || !ageIsValid || !favFoodIsValid || !lovesIsValid || !imgIsValid;

	//BTN ON CLICK ADD HAMSTER
	async function addHamster() {
			
		let data: Hamster = {
			id: id,
			name: name, 
			age: Number(age),
			favFood: favFood, 
			loves: loves,
			imgName: img, 
			wins: 0, 
			defeats: 0, 
			games: 0, 

		}

		const response = await fetch('/hamsters' , { 
		method: 'POST', 
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(data) });
		//fixa statusmeddelande om det g??r fel. 
		
		return response.json(); // parses JSON response into native JavaScript objects
	
		//redirect till gallery
		
	}
  	



	return (
	<div className="addHamsters">
		<h1>ADD HAMSTER</h1>

		<section>

		<div className="form">
			{/* NAME */}
			<div className="formInput">
				<label> NAME: </label><br />
				<input 
				type="text"
				onBlur={() => setNameTouched(true)}
				onChange={e => setName(e.target.value)}
				value={name}
				className={nameClass}
				/>
				{nameTouched ? <div className="message"> {nameErrorMessage} </div> : null}
			</div>
			
			{/* AGE */}
			<div className="formInput">
				<label> AGE: </label><br />
				<input 
				type="number"
				onBlur={() => setAgeTouched(true)}
				onChange={e => setAge(e.target.value)}
				value={age}
				className={ageClass}
				/>
				{ageTouched ? <div className="message"> {ageErrorMessage} </div> : null}
			</div>

			{/* FAV FOOD */}
			<div className="formInput">
				<label> FAVORITE FOOD: </label><br />
				<input 
				type="text"
				onBlur={() => setFavFoodTouched(true)}
				onChange={e => setFavFood(e.target.value)}
				value={favFood}
				className={favFoodClass}
				/>
				{favFoodTouched ? <div className="message"> {favFoodErrorMessage} </div> : null}
			</div>

			{/* LOVES */}
			<div className="formInput">
				<label> LOVES: </label><br />
				<input 
				type="text"
				onBlur={() => setLovesTouched(true)}
				onChange={e => setLoves(e.target.value)}
				value={loves}
				className={lovesClass}
				/>
				{lovesTouched ? <div className="message"> {lovesErrorMessage} </div> : null}
			</div>

			{/* IMAGE */}
			<div className="formInput">
				<label> IMAGE: </label><br />
				<input 
				type="text"
				onBlur={() => setImgTouched(true)}
				onChange={e => setImg(e.target.value)}
				value={img}
				className={imgClass}
				/>
				{imgTouched ? <div className="message"> {imgErrorMessage} </div> : null}
			</div>

		
			{/* ADD BUTTON */}
			<div>
				<button onClick={() => addHamster()} disabled={formIsInvalid}> Add Hamster </button>
			</div>
			
		</div>

		</section>
		
		{/* EXIT */}
		<Link to="/"><h3 className="exit">EXIT(ESC)</h3></Link>

	</div>
	)}


export default AddHamster;