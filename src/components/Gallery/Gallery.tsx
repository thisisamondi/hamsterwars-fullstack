import './Gallery.css';
import { useEffect, useState } from 'react'
import { Hamster } from '../../types/Hamster'


const Gallery = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)

	useEffect(() => {
		async function getHamsters() {
			const response = await fetch('/hamsters', { method: 'GET' })
			const data: Hamster[] = await response.json()
			// Använd "mountedRef" här
			setHamsters(data)
			// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är MOUNTED
		}
		getHamsters()
	}, [])


	return (
		<div>
			{hamsters? hamsters.map(hamster => (
					<div key={hamster.id}>
						<img src={`/img/${hamster.imgName}`} alt="img of hamster" /> <br />
						{hamster.name} <br/>

						<button> Mer info </button>
					</div>
				))
				: 'Hämtar produkter från API...'
			}
		</div>
	)
}

export default Gallery