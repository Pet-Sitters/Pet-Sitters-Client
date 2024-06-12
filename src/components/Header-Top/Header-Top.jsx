import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Login } from '../auth/Login/Login'
import { Registration } from '../auth/Registration/Registration'
import s from './Header-Top.module.scss'

export function Header_Top() {
	const [isLoginModalVisible, setIsLoginVisible] = useState(false)
	const [isRegisterModalVisible, setIsRegistrationVisible] = useState(false)
	const openRegistrationModal = () => {
		setIsRegistrationVisible(true)
		setIsLoginVisible(false)
	}

	const openLoginModal = () => {
		setIsLoginVisible(true)
		setIsRegistrationVisible(false)
	}

	const closeModals = () => {
		setIsRegistrationVisible(false)
		setIsLoginVisible(false)
	}

	return (
		<>
			<div className={s.headerTop_container}>
				<div className={s.leftBlock}>
					<Link to={'/'} className={s.link}>
						Контакты
					</Link>
					<img src='/assets/icons/button-arrow.png' alt='arrow' />
				</div>
				<div className={s.rightBlock}>
					<button onClick={() => openLoginModal(true)} className={s.link}>
						Войти
					</button>{' '}
					/{' '}
					<button
						onClick={() => openRegistrationModal(true)}
						className={s.link}
					>
						Зарегистрироваться
					</button>
				</div>
			</div>
			<Login
				visible={isLoginModalVisible}
				onCancel={closeModals}
				onSwitch={openRegistrationModal}
				open={isLoginModalVisible}
				onClose={() => setIsLoginVisible(false)}
			/>
			<Registration
				visible={isRegisterModalVisible}
				onCancel={closeModals}
				onSwitch={openLoginModal}
				open={isRegisterModalVisible}
				onClose={() => setIsRegistrationVisible(false)}
			/>
		</>
	)
}
