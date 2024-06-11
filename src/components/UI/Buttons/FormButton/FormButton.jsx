import { Button, ConfigProvider, Form } from 'antd'
import styles from './FormButton.module.scss'
const FormButton = ({
	children,
	buttonColor,
	buttonHoverColor,
	textColor,
	textHoverColor,
	...props
}) => {
	const customStyles = {
		'--button-color': buttonColor || '#47156C',
		'--button-hover-color': buttonHoverColor || '#C896FF',
		'--text-color': textColor || '#FFFFFF',
		'--text-hover-color': textHoverColor || '#47156C',
	}

	return (
		<ConfigProvider
			theme={{
				components: {
					Button: {
						colorPrimary: 'var(--button-color)',
						colorPrimaryHover: 'var(--button-hover-color)',
						colorPrimaryActive: 'var(--button-hover-color)',
						colorText: 'var(--text-color)',
						colorTextHover: 'var(--text-hover-color)',
					},
				},
			}}
		>
			<Form.Item>
				<Button {...props} style={customStyles} className={styles.submitButton}>
					{children}
				</Button>
			</Form.Item>
		</ConfigProvider>
	)
}
export default FormButton
