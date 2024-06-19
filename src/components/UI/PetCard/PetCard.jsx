import React from 'react';
import { Link } from 'react-router-dom'
import { OrderButton } from '../OrderButton/OrderButton.jsx'
import s from './PetCard.module.scss'

const PetCard = ({name}) => {
	return (
		<div className={s.card}>
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
				<OrderButton textButton={'Заказать ситтинг'}/>
			</div>
		</div>
	);
};

export default PetCard;
