import './Gallery.css';
import { useEffect, useState } from 'react'
import { Hamster } from '../../types/Hamster'
import { useParams } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Icon, InlineIcon } from '@iconify/react';
import deleteBin6Line from '@iconify/icons-ri/delete-bin-6-line';


const Gallery = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)

	async function getHamsters() {
		const response = await fetch('/hamsters', { method: 'GET' })
		const data: Hamster[] = await response.json()
		setHamsters(data)
	}

	useEffect(() => {
		getHamsters()
		
	}, [])


	
    // DELETE request using fetch with async/await
	async function deleteHamster(id: string) {

		//fetch request med id som param (id:t finns sedan när man mappar)
		await fetch('/hamsters/' + id , { method: 'DELETE' });
		//fixa statusmeddelande om det går fel. 

		//get hamsters igen för att uppdatera galleriet för användaren. 
		getHamsters()
	}

	return (
		<div className="gallery">
			<h1>GALLERY</h1>
			<p className="galleryInfo">
			1. Hover over image to see more info about a hamster<br />
			2. Press the "X" to remove specific hamster from gallery</p>
			
			<Link to="/add-hamster"> <button className="addHamster">+ Click here to add new hamster</button> </Link>
			<section className ="container">
				{hamsters ? hamsters.map(hamster => (
						<div key={hamster.id} >
							<button onClick={() => deleteHamster(hamster.id)} className="removeHamster">
								<Icon icon={deleteBin6Line} style={{color: '#ff9800', fontSize: '24px'}} />
							</button>

							<div className="image">
								<img className="img" src={`/img/${hamster.imgName}`} alt="img of hamster" />
									<div className ="infoOverlay">
										<p>Age: {hamster.age}</p>
										<p>FavFood: {hamster.favFood}</p>
										<p>Loves: {hamster.loves}</p>
										<p>Wins: {hamster.wins}</p>
										<p>Defeats: {hamster.defeats}</p>
										<p>Games: {hamster.games}</p>
									</div>
							</div>

								<p className="hamsterName">
								{hamster.name.toUpperCase()}
								</p>
							
						</div>
					))
					: 'Hämtar hamstrar från API...'
				}
			</section>
			<Link to="/"><h3 className="exit">EXIT(ESC)</h3></Link>
		</div>
	)
}

export default Gallery