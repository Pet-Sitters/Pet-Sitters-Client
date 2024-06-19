import React from 'react';
import s from './PetCard.module.scss'
import {CloseOutlined} from "@ant-design/icons";

import catImg from '../../../pages/Account/MyPets/image/pets/cat.svg'
import dogImg from '../../../pages/Account/MyPets/image/pets/dog.svg'

import {useDispatch} from "react-redux";
import {deletePet} from "../../../core/store/pet/thunk.js";

const PetCard = ({id, name, species}) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deletePet(id));
	}

	return (
		<div className={s.card}>
			<button className={s.delete} onClick={handleDelete}>
				<CloseOutlined />
			</button>
			<div className={s.imgCont}>
				{species === 'CAT'
					? (
						<img src={catImg} alt="cat" />
					) : (
						<img src={dogImg} alt="dog" />
					)
				}
			</div>

			<h3 className={s.title}>{name}</h3>
			<div className={s.buttonContainer}>
				<button>Заказать ситтинг</button>
			</div>
		</div>
	);
};

export default PetCard;
