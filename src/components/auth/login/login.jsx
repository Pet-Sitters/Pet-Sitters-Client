import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../../core/store/auth/thunk'

import s from './login.module.scss'

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

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
		<div className={s.authForm}>
			{
				<Form
					name='normal_login'
					className='login-form'
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name='username'
						rules={[
							{
								required: true,
								message: 'Please input your Username!',
							},
						]}
					>
						<Input
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='Username'
						/>
					</Form.Item>
					{/* <Form.Item
				name='email'
				rules={[
					{
						required: true,
						message: 'Please input your Email!',
					},
				]}
			>
				<Input
					prefix={<UserOutlined className='site-form-item-icon' />}
					placeholder='Email'
				/>
			</Form.Item> */}
					<Form.Item
						name='password'
						rules={[
							{
								required: true,
								message: 'Please input your Password!',
							},
						]}
					>
						<Input
							prefix={<LockOutlined className='site-form-item-icon' />}
							type='password'
							placeholder='Password'
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name='remember' valuePropName='checked' noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className='login-form-forgot' href=''>
							Forgot password
						</a>
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
						>
							Log in
						</Button>
						Or <a href=''>register now!</a>
					</Form.Item>
				</Form>
			}
		</div>
	)
}
export default Login
