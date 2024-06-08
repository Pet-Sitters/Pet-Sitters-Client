import { Button, ConfigProvider, Form } from 'antd'
import React from 'react'
import styles from './FormButton.module.scss'

const BUTTON_COLOR = '#47156C'
const BUTTON_HOVER_COLOR = '#C896FF'

const FormButton = ({ children, ...props }) => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Button: {
						colorPrimary: BUTTON_COLOR,
						colorPrimaryHover: BUTTON_HOVER_COLOR,
						colorPrimaryActive: BUTTON_HOVER_COLOR,
					},
				},
			}}
		>
			<Form.Item>
				<Button {...props} className={styles.submitButton}>
					{children}
				</Button>
			</Form.Item>
		</ConfigProvider>
	)
}

export default FormButton
