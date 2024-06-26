import { Button, ConfigProvider, Form } from 'antd';
import styles from './BeSitterButton.module.scss';

const BUTTON_COLOR = '#C896FF';
const BUTTON_HOVER_COLOR = '#DBEF98';

const BeSitterButton = ({ children, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            fontWeight: 500,
            colorPrimary: BUTTON_COLOR,
            colorPrimaryHover: BUTTON_HOVER_COLOR,
            colorPrimaryActive: BUTTON_HOVER_COLOR,
          },
        },
      }}>
      <Form.Item>
        <Button {...props} className={styles.submitButton}>
          {children}
        </Button>
      </Form.Item>
    </ConfigProvider>
  );
};

export default BeSitterButton;
