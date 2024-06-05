import { AddPetCard } from '../../../components/UI/AddPetCard/AddPetCard'
import s from './MyPets.module.scss'
export function MyPets() {
	return (
		<div className={s.myPets_container}>
			<AddPetCard />
			<AddPetCard />
			<AddPetCard />
			<AddPetCard />
		</div>
	)
}
