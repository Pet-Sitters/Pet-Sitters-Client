import { Loading3QuartersOutlined } from '@ant-design/icons';
import { ConfigProvider, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../../core/store/auth/slice';
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
  };
  const appPrefix = 'petSitterApp_';
  message.config({
    top: 400, // отступ от верхней части экрана (в пикселях)
    duration: 3, // время показа уведомления (в секундах)
    maxCount: 3, // максимальное количество одновременно отображаемых уведомлений
  });

  // useEffect(() => {
  //   if (isSuccess) {
  //     localStorage.setItem(`${appPrefix}accessToken`, action.payload.auth_token);
  //     // handleLoginClose();
  //     // navigate(links.account.base);
  //   } else if (isError) {
  //     formHelpers.setFormErrors(authError, form);
  //     if (typeof authError === 'string') {
  //       message.error(authError);
  //     }
  //   }
  // }, [isSuccess, isError]);

  // const onFinish = async (values) => {
  //   dispatch(login(values));
  // };

  const onFinish = async (values) => {
    try {
      const action = await dispatch(login(values));
      if (login.fulfilled.match(action)) {
        message.success('Вход выполнен успешно!');
        localStorage.setItem(`${appPrefix}accessToken`, action.payload.auth_token);
        isSuccess && handleLoginClose();
      } else {
        throw new Error(action.payload.detail || 'Ошибка входа');
      }
    } catch (error) {
      message.error(error.message);
    }
  };

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
            zIndexPopup: 20,
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
              message: 'Не верный Логин (email или номер телефона)',
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
              message: 'Не верный пароль',
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
