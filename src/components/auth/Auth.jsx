import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Auth.module.scss'

export function Auth() {
	const userRef = useRef()
	const errRef = useRef()
	const navigate = useNavigate()
	const [username, setUser] = useState('')
	const [password, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')

	const [loading, setLoading] = useState(false)

	const LOGIN_URL = `https://api.users.skroy.ru/user/check_password`
	useEffect(() => {
		userRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [username])

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			const response = await axios.post(
				`${LOGIN_URL}?user_id=${username}`,
				`${password}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			console.log(response.data)
			if (response.data === true) {
				setUser('')
				setPwd('')
				navigate(`/profile`)
			} else {
				throw new Error('Authentication failed')
			}
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No server response')
			} else if (err.response?.status === 400) {
				setErrMsg('Не верный логин или пароль')
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized')
			} else {
				setErrMsg('Login Failed')
			}
			errRef.current.focus()
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<section className={styles.auth}>
				<div className={styles.wrapper}>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live='assertive'
					>
						{errMsg}
					</p>
					<div className={styles.title}>Авторизация</div>
					<form onSubmit={handleSubmit}>
						<label className={styles.login} htmlFor='username'></label>
						<input
							className={styles.input}
							placeholder='Логин'
							type='text'
							id='username'
							ref={userRef}
							autoComplete='on'
							onChange={(e) => setUser(e.target.value)}
							value={username}
							required
						/>
						<div className={styles.password__wrapper}>
							<label className={styles.password} htmlFor='password'></label>
							<input
								className={styles.input}
								id='password'
								onChange={(e) => setPwd(e.target.value)}
								value={password}
								required
								placeholder='Пароль'
							/>
						</div>
						<button type='submit' disabled={loading}>
							{loading ? 'Loading...' : 'Вход'}
						</button>
					</form>
				</div>
			</section>
		</>
	)
}
