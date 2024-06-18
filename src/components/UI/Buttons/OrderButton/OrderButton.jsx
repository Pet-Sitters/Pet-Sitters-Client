import { Button, ConfigProvider, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../core/store/modalOrder/slice';
import styles from './OrderButton.module.scss';

const OrderButton = ({
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
  };
  const dispatch = useDispatch();

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
      }}>
      <Form.Item>
        <Button
          {...props}
          style={customStyles}
          className={styles.submitButton}
          onClick={() => dispatch(openModal())}>
          {children}
        </Button>
      </Form.Item>
    </ConfigProvider>
  );
};
export default OrderButton;
