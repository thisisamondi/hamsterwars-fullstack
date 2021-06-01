import './AddHamster.css'
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { getAllJSDocTagsOfKind } from 'typescript';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const AddHamster = () => {
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)
	
	const [age, setAge] = useState('')
	const [ageTouched, setAgeTouched] = useState(false)

	const [favFood, setFavFood] = useState('')
	const [favFoodTouched, setFavFoodTouched] = useState(false)

	const [loves, setLoves] = useState('')
	const [lovesTouched, setLovesTouched] = useState(false)


	//Name input
	let nameIsValid: boolean = true
	let nameErrorMessage: string = ''
	if( name === '' ) {
		nameIsValid = false
		// nameErrorMessage = 'Du har inte skrivit något namn.'
		nameErrorMessage = 'Please type your name.'
	}
	let nameClass = ''
	if( nameTouched ) {
		nameClass = (nameIsValid ? 'valid' : 'error')
	}

	//Age input
	const allowedAgeCharacters = "0123456789"
	let ageIsValid: boolean = true
	let ageErrorMessage: string = ''
	if( age === '' ) {
		ageIsValid = false
		ageErrorMessage = 'Please type your age.'
	} else if( !age.split('').every(char => allowedAgeCharacters.includes(char)) ) {
		ageIsValid = false
		ageErrorMessage = 'Type your age like this: "27".'
	}
	let ageClass = ''
	if( ageTouched ) {
		ageClass = (ageIsValid ? 'valid' : 'error')
	}

	//FavFood input
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

	//Loves input
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


	let formIsInvalid = !nameIsValid || !ageIsValid || !favFoodIsValid || !lovesIsValid;

	
	async function addHamster( url = '', data = {}) {

		const response = await fetch('/hamsters' , { 
			method: 'POST', 
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify(data) });
		//fixa statusmeddelande om det går fel. 
		alert("hamster posted")
		
		return response.json(); // parses JSON response into native JavaScript objects
		
		//redirect till gallery
		
	}
  	



	return (
	<div className="addHamsters">
		<h1>ADD HAMSTER</h1>

		<section>

		<div className="form">

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

			<div className="formInput">
				<label> AGE: </label><br />
				<input 
				type="text"
				onBlur={() => setAgeTouched(true)}
				onChange={e => setAge(e.target.value)}
				value={age}
				className={ageClass}
				/>
				{ageTouched ? <div className="message"> {ageErrorMessage} </div> : null}
			</div>

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

		

			<div>
				<button onClick={() => addHamster('/hamsters', {name, age, favFood, loves} )} disabled={formIsInvalid}> Add Hamster </button>
			</div>
			

		</div>

		</section>

		<Link to="/"><h3 className="exit">EXIT(ESC)</h3></Link>

	</div>
	)}


export default AddHamster;