import React from 'react';
import { Link } from 'react-router-dom'
import { OrderButton } from '../OrderButton/OrderButton.jsx'
import s from './PetCard.module.scss'
import {CloseOutlined} from "@ant-design/icons";

import catImg from '../../../../public/assets/images/account/pets/cat.svg'
import dogImg from '../../../../public/assets/images/account/pets/dog.svg'
import LinkButton from "../Buttons/LinkButton/LinkButton.jsx";
import links from "../../../router/links.js";

const PetCard = ({id, name, species}) => {
	return (
		<div className={s.card}>
			<button className={s.delete}>
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

			{/*{img ? (*/}
			{/*	<img*/}
			{/*		src='/assets/images/account/cat.png'*/}
			{/*		alt='animal foto'*/}
			{/*		className={s.img}*/}
			{/*	/>*/}
			{/*) : (*/}
			{/*	<Link to={'/account/add-pets'} className={s.photoContainer}></Link>*/}
			{/*)}*/}

			<h3 className={s.title}>{name}</h3>
			<div className={s.buttonContainer}>
				<LinkButton buttonType='main' to={'#'}>
					Заказать ситтинг
				</LinkButton>
			</div>
		</div>
	);
};

export default PetCard;
