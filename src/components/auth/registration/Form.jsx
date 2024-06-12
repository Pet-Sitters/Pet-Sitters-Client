import { ConfigProvider, Form, Input, message } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { register } from '../../../core/store/auth/thunk'
import FormButton from '../../UI/Buttons/FormButton/FormButton'
import styles from './../../../SCSS/styles-ant.module.scss'
import s from './Form.module.scss'

const FormRegistration = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [form] = Form.useForm()

	const onFinish = async (values) => {
		try {
			const action = await dispatch(register(values))
			if (register.fulfilled.match(action)) {
				message.success('Регистрация прошла успешно!')
				navigate('/')
			} else {
				throw new Error(action.payload.detail || 'Ошибка регистрации')
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
				className={s.form}
				form={form}
				name='register'
				onFinish={onFinish}
				style={{
					maxWidth: 413,
				}}
				scrollToFirstError
			>
				<Form.Item
					className={s.formInput}
					name='username'
					tooltip={{
						title: 'Введите свое имя',
						ClassName: styles.customTooltip,
					}}
					rules={[
						{
							required: true,
							message: 'Введите свое имя!',
							whitespace: true,
						},
					]}
				>
					<Input placeholder='Имя' className={s.input} />
				</Form.Item>
				<Form.Item
					name='email'
					rules={[
						{
							type: 'email',
							message: 'Введите правильный E-mail!',
						},
						{
							required: true,
							message: 'Введите ваш E-mail!',
						},
					]}
				>
					<Input placeholder='Email' className={s.input} />
				</Form.Item>

				<Form.Item
					name='password'
					rules={[
						{
							required: true,
							message: 'Введите пароль!',
						},
					]}
					hasFeedback
				>
					<Input.Password placeholder='Пароль' className={s.input} />
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
						Зарегистрироваться
					</FormButton>
				</Form.Item>
			</Form>
		</ConfigProvider>
	)
}
export default FormRegistration
