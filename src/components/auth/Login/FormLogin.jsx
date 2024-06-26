import { Loading3QuartersOutlined } from '@ant-design/icons';
import { ConfigProvider, Form, Input, message } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formHelpers } from '../../../core/helpers/formHelpers';
import { AuthState, resetAuthState } from '../../../core/store/auth/slice';
import { login } from '../../../core/store/auth/thunk';
import { closeLoginModal } from '../../../core/store/modalLogin/slice';
import FormButton from '../../UI/Buttons/FormButton/FormButton';
import eye from '../img/eye.svg';
import open_eye from '../img/eye_open.svg';
import s from './FormLogin.module.scss';

const FormLogin = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { isSuccess, isLoading, isError, authError } = useSelector(AuthState);

  const handleLoginClose = () => {
    dispatch(closeLoginModal());
    dispatch(resetAuthState());
  };

  useEffect(() => {
    console.log('isSuccess:', isSuccess);
    console.log('isError:', isError);
    console.log('authError:', authError);
    if (isSuccess) {
      dispatch(resetAuthState());
      handleLoginClose();
    } else if (isError) {
      formHelpers.setFormErrors(authError, form);
      if (typeof authError === 'string') {
        message.error(authError);
      }
    }
  }, [isSuccess, isError, dispatch, form, authError]);

  const onFinish = async (values) => {
    dispatch(login(values));
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#C896FF',
          colorBorder: '#C896FF',
          colorPrimaryHover: '#8422E6',
        },
        components: {
          Input: {
            paddingBlock: 10,
            controlOutline: 1,
            lineWidth: 2,
          },
          Message: {
            colorBgDefault: '#FFFAE6',
            colorText: '#333333',
            borderRadius: '4px',
            padding: '2px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          },
        },
      }}>
      <Form
        name='normal_login'
        className={s.form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}>
        <Form.Item
          className={s.formInput}
          name='username'
          rules={[
            {
              required: true,
              message: 'Введите ваш E-mail',
            },
          ]}>
          <Input className={s.input} placeholder='Логин (email или номер телефона)' />
        </Form.Item>

        <Form.Item
          className={s.formInput}
          name='password'
          rules={[
            {
              required: true,
              message: 'Введите пароль',
            },
          ]}>
          <Input.Password
            className={s.input}
            type='password'
            placeholder='Пароль'
            iconRender={(visible) =>
              visible ? (
                <img src={eye} alt='Show Password' />
              ) : (
                <img src={open_eye} alt='Hide Password' />
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
            htmlType='submit'>
            {(isLoading && <Loading3QuartersOutlined />) || 'Войти'}
          </FormButton>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
export default FormLogin;
