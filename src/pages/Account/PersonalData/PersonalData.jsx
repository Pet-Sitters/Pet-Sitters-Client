import { Form } from 'antd'
import React from 'react'
import FormButton from '../../../components/UI/Buttons/FormButton/FormButton.jsx'
import FormInput from '../../../components/UI/FormInput/FormInput.jsx'
import styles from './PersonalData.module.scss'

import { formInputs } from './formFields.js'

const PersonalData = () => {
	const [form] = Form.useForm()

	const handleFinish = (values) => {
		console.log('Form values:', values)
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			form={form}
			layout='vertical'
			onFinishFailed={onFinishFailed}
			onFinish={handleFinish}
		>
			{formInputs.map((input) => (
				<FormInput
					key={input.name}
					placeholder={input.placeholder}
					name={input.name}
					rules={input.rules}
					type={input.type}
				/>
			))}

			<FormButton
				className={styles.submitButton}
				type='primary'
				htmlType='submit'
			>
				Сохранить данные
			</FormButton>
		</Form>
	)
}

export default PersonalData
