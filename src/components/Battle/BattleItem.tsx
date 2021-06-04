import {Hamster} from '../../types/Hamster'

interface Props {
	hamster: Hamster
}
const BattleItem = ({hamster}:Props) => {
	return (
		<div>
			<p>NAME: {hamster.name.toUpperCase()}</p>
			<p>AGE: {hamster.age}</p>
			<p>FAVORITE FOOD: {hamster.favFood.toUpperCase()}</p>
			<p>LOVES: {hamster.loves.toUpperCase()}</p>
		</div>
	)
}

export default BattleItem