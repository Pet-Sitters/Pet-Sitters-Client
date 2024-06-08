import { Button, Checkbox, Form, Input, Select, message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { register } from '../../../core/store/auth/thunk'
import s from './registration.module.scss'
const { Option } = Select

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
}
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
}
const Registration = () => {
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
	const prefixSelector = (
		<Form.Item name='prefix' noStyle>
			<Select
				style={{
					width: 70,
				}}
			>
				<Option value='86'>+7</Option>
				<Option value='87'>8</Option>
			</Select>
		</Form.Item>
	)

	return (
		<div className={s.registration_container}>
			{
				<Form
					{...formItemLayout}
					form={form}
					name='register'
					onFinish={onFinish}
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '+7',
					}}
					style={{
						maxWidth: 600,
					}}
					scrollToFirstError
				>
					<Form.Item
						name='username'
						label='Имя пользователя'
						tooltip='Как вы хотите, чтобы вас называли?'
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите свое имя пользователя!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name='email'
						label='E-mail'
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='password'
						label='Пароль'
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name='confirm'
						label='Повторите пароль'
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please confirm your password!',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve()
									}
									return Promise.reject(
										new Error(
											'Новый пароль, который вы ввели, не соответствует!'
										)
									)
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name='agreement'
						valuePropName='checked'
						rules={[
							{
								validator: (_, value) =>
									value
										? Promise.resolve()
										: Promise.reject(new Error('Should accept agreement')),
							},
						]}
						{...tailFormItemLayout}
					>
						<Checkbox>
							Я прочитал <a href=''>соглашение</a>
						</Checkbox>
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type='primary' htmlType='submit'>
							Зарегистрироваться
						</Button>
					</Form.Item>
				</Form>
			}
		</div>
	)
}
export default Registration
