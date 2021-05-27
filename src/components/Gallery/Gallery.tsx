import './Gallery.css';

interface Props{
	items: HamsterItem [],
	
}

interface HamsterItem {
	name: string,
	age: number, 
	favefood: string,
	loves: string	
}


const Gallery = ({items}: Props) => {


	return (
		<div className="Gallery">
			<h1>GALLERY</h1>
			{items.length === 0 ? "Your gallery is empty" : " TODO: map all the items"}
		</div>
	)
}

export default Gallery;
export type { HamsterItem };