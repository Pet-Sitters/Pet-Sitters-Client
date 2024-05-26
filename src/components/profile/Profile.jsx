import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Profile.module.scss'

export function Profile() {
	// const { auth } = useContext(AuthContext) // Получаем объект auth из контекста
	const isAuthenticated = true

	const id = 'd19f7d2a-d3bf-4d14-98d0-6df13b71686d'
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.users.skroy.ru/user/${id}`
				)
				if (response.data && Object.keys(response.data).length !== 0) {
					setData(response.data)
				}
				setLoading(false)
			} catch (error) {
				console.error('Error fetching userInfo:', error)
			}
		}
		fetchData()
	}, [isAuthenticated])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className={s.container}>
			{isAuthenticated ? (
				<div className={s.wrapper}>
					<div>
						<p className={s.userinfo}>
							<span>Имя: </span>
							{data.additional_info.field2}
						</p>
					</div>
					<div>
						<p className={s.userinfo}>
							<span>Возраст: </span>
							{data.additional_info.field3} Лет
						</p>
					</div>

					<div className={s.awards}>вы авторизованы</div>
				</div>
			) : (
				<div className={s.wrapper}>
					<div className={s.awards}>Вы не авторизованы</div>

					<Link to='/' className={s.regLink}>
						Зарегистрироваться
					</Link>
					<Link to='/' className={s.logIn}>
						Войти
					</Link>
				</div>
			)}
		</div>
	)
}
