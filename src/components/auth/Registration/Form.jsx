import { Loading3QuartersOutlined } from '@ant-design/icons';
import { ConfigProvider, Form, Input, message } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formHelpers } from '../../../core/helpers/formHelpers';
import { transformErrorMessage } from '../../../core/helpers/transformErrorMessage';
import { AuthState, resetAuthState } from '../../../core/store/auth/slice';
import { register } from '../../../core/store/auth/thunk';
import { closeRegistrationModal } from '../../../core/store/modalRegistration/slice';
import FormButton from '../../UI/Buttons/FormButton/FormButton';
import eye from '../img/eye.svg';
import open_eye from '../img/eye_open.svg';
import s from './Form.module.scss';

const FormRegistration = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { isSuccess, isLoading, isError, authError } = useSelector(AuthState);
  const handleRegistrationClose = () => {
    dispatch(closeRegistrationModal());
  };
  message.config({
    top: 400, // отступ от верхней части экрана (в пикселях)
    duration: 3, // время показа уведомления (в секундах)
    maxCount: 3, // максимальное количество одновременно отображаемых уведомлений
  });

  useEffect(() => {
    if (isSuccess) {
      message.success('Регистрация выполнена успешно!');
      dispatch(resetAuthState());
      handleRegistrationClose();
    } else if (isError) {
      formHelpers.setFormErrors(authError, form);
      if (typeof authError === 'string') {
        const transformedError = transformErrorMessage(authError);
        message.error(transformedError);
      }
    }
  }, [isSuccess, isError, form, authError, dispatch]);

  const onFinish = async (values) => {
    // TODO: если поле username убрать - то использовать этот запрос
    form.setFieldsValue({
      email: values.username,
    });
    dispatch(register({ ...values, email: values.username }));
    //TODO: если поле username оставить - то использовать этот запрос
    // dispatch(register(values));
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
        className={s.form}
        form={form}
        name='register'
        onFinish={onFinish}
        scrollToFirstError>
        <Form.Item
          className={s.formInput}
          name='username'
          tooltip={{
            title: 'Введите свой Email',
            ClassName: s.customTooltip,
          }}
          rules={[
            {
              required: true,
              message: 'Введите свой Email!',
              whitespace: true,
            },
          ]}>
          <Input placeholder='Email' autoComplete='false' className={s.input} />
        </Form.Item>
        {/* <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'Введите правильный E-mail!',
            },
            {
              required: true,
              message: 'Введите ваш E-mail!',
            },
          ]}>
          <Input placeholder='Email' className={s.input} />
        </Form.Item> */}
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Введите пароль!',
            },
          ]}
          hasFeedback>
          <Input.Password
            placeholder='Пароль'
            className={s.input}
            iconRender={(visible) =>
              visible ? (
                <img src={eye} alt='Show Password' />
              ) : (
                <img src={open_eye} height={18} alt='Hide Password' />
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
            {(isLoading && <Loading3QuartersOutlined />) || 'Зарегистрироваться'}
          </FormButton>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
export default FormRegistration;
