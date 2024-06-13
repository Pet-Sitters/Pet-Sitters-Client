import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { ConfigProvider, Form, Input, message } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../../core/store/auth/thunk'
import FormButton from '../../UI/Buttons/FormButton/FormButton'
import s from './FormLogin.module.scss'
import eye from './eye.svg'
import open_eye from './open_eye.png'

const FormLogin = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const MyCustomEyeIcon = () => <img src={yey} alt='Custom Eye Icon' />
	message.config({
		top: 400, // отступ от верхней части экрана (в пикселях)
		duration: 3, // время показа уведомления (в секундах)
		maxCount: 3, // максимальное количество одновременно отображаемых уведомлений
	})

	const onFinish = async (values) => {
		try {
			const action = await dispatch(login(values))
			if (login.fulfilled.match(action)) {
				message.success('Вход выполнен успешно!')
				localStorage.setItem('accessToken', action.payload.auth_token)
				navigate('/')
			} else {
				throw new Error(action.payload.detail || 'Ошибка входа')
			}
		} catch (error) {
			message.error(error.message)
		}
	}
	return (
		<ConfigProvider
			theme={{
				components: {
					Input: {
						colorPlaceholder: 'transparent',
						boxShadow: 'none',
						colorBgContainer: '#FFFFFF',
						colorBgContainerDisabled: '#FFFFFF',
						colorBgContainerHover: '#FFFFFF',
						colorBgContainerActive: '#FFFFFF',
						paddingBlock: 10,
					},
					Message: {
						colorBgDefault: '#FFFAE6',
						colorText: '#333333',
						borderRadius: '4px',
						padding: '2px',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
					},
					Tooltip: {
						colorBgDefault: '#FFFAE6',
						colorText: '#333333',
						borderRadius: '4px',
						padding: '2px',
						zIndexPopup: 1070,
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
					},
				},
			}}
		>
			<Form
				name='normal_login'
				className={s.form}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<Form.Item
					className={s.formInput}
					name='username'
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
				>
					<Input
						className={s.input}
						placeholder='Логин (email или номер телефона)'
					/>
				</Form.Item>

				<Form.Item
					className={s.formInput}
					name='password'
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
				>
					<Input.Password
						className={s.input}
						type='password'
						placeholder='Пароль'
						iconRender={(visible) =>
							visible ? (
								<img src={eye} alt='Show Password'/>
							) : (
								<img src={open_eye} alt='Hide Password'/>
							)
						}
					/>
				</Form.Item>

				<Form.Item className={s.buttonContainer}>
					<FormButton
						buttonColor='#47156C'
						buttonHoverColor='#C8A5FC'
						textColor='#FFFFFF'
						textHoverColor='#FFFFFF'
						type='primary'
						htmlType='submit'
					>
						Войти
					</FormButton>
				</Form.Item>
			</Form>
		</ConfigProvider>
	)
}
export default FormLogin
