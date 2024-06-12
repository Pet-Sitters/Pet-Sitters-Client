import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import FormLogin from './FormLogin'
import s from './Login.module.scss'

export function Login({ open, onClose, visible, onCancel, onSwitch }) {
	return (
		<>
			<Dialog
				open={open}
				onClose={onClose}
				visible={visible}
				onCancel={onCancel}
				className={s.wrapper}
			>
				<DialogPanel className={s.modal}>
					<button onClick={onClose} className={s.button}>
						<img
							src='/assets/icons/Auth/close.png'
							alt='close'
							className={s.buttonImg}
						/>
					</button>

					<DialogTitle className={s.title}>Вход</DialogTitle>

					<FormLogin />
					<div className={s.linkContainer}>
						Нет аккаунта{' '}
						<a onClick={onSwitch} className={s.link}>
							Зарегистрироваться
						</a>{' '}
					</div>
					<div className={s.catContainer}>
						<img src='/assets/images/Auth/cat.png' alt='cat' />
					</div>
				</DialogPanel>
			</Dialog>
		</>
	)
}
