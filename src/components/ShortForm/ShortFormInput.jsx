import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectShortFormIsLoading,
  selectShortFormIsSuccess,
} from '../../core/store/shortForm/slice';
import { postShortForm } from '../../core/store/shortForm/thunk';
import FormButton from '../UI/Buttons/FormButton/FormButton';
import FormInput from '../UI/FormInput/FormInput';
import { shortFormInputs } from './ShortFormData';
const ShortFormInputs = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const isSuccess = useSelector(selectShortFormIsSuccess);
  const isLoading = useSelector(selectShortFormIsLoading);
  const handleFinish = (values) => {
    console.log('Form values:', values);
    dispatch(postShortForm(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinishFailed={onFinishFailed}
      onFinish={handleFinish}>
      {shortFormInputs.map((input) => (
        <FormInput
          key={input.name}
          placeholder={input.placeholder}
          name={input.name}
          rules={input.rules}
          type={input.type}
        />
      ))}

      <FormButton type='primary' htmlType='submit'>
        {isLoading && <Loading3QuartersOutlined />} Продолжить
      </FormButton>
    </Form>
  );
};

export default ShortFormInputs;
