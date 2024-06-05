import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
	selectAuthError,
	selectAuthErrorMessage,
} from '../../../core/store/auth/slice'
import { login } from '../../../core/store/auth/thunk'

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isError = useSelector(selectAuthError)
	console.log(isError)
	const errorMessage = useSelector(selectAuthErrorMessage)
	console.log(errorMessage)
	const onFinish = (values) => {
		// console.log('Received values of form: ', values)
		dispatch(login(values))
			.then((action) => {
				if (action.payload && action.payload.auth_token) {
					localStorage.setItem('accessToken', action.payload.auth_token)
					navigate('/')
				} else {
					console.error('Authentication failed')
				}
			})
			.catch((error) => {
				console.error('Error during authentication:', error)
			})
	}
	return (
		<div>
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
			{isError && <div className={s.error}>{errorMessage}</div>}
		</div>
	)
}
export default Login
