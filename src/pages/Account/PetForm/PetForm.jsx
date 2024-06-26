import { DatePicker, Form } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import FormButton from '../../../components/UI/Buttons/FormButton/FormButton';
import FormInput from '../../../components/UI/FormInput/FormInput.jsx';
import FormRadio from '../../../components/UI/FormRadio/FormRadio.jsx';

import catRadioFields from './data/cat/catRadioFields.js';

import dogRadioFields from './data/dog/dogRadioFields.js';
import {
  resetPetFormState,
  selectPetFormIsError,
  selectPetFormIsSuccess,
} from '../../../core/store/pet/slice.js';
import { postPetForm } from '../../../core/store/pet/thunk.js';
import links from '../../../router/links.js';
import s from './PetForm.module.scss';
import animalInputFields from './data/animal/animalInputFields.js';
import animalRadioFields from './data/animal/animalRadioFields.js';
import animalTypes from './data/animalTypes.js';
import catInputFields from './data/cat/catInputFields.js';
import dogInputFields from './data/dog/dogInputFields.js';
import initialFormState from './data/initialFormState.js';

const PetForm = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isSuccess = useSelector(selectPetFormIsSuccess);
  const isError = useSelector(selectPetFormIsError);

  useEffect(() => {
    if (isSuccess) {
      navigate(`/${links.account.base}${links.account.myPets}`);
      dispatch(resetPetFormState());
    }
  }, [isSuccess, navigate, dispatch]);

  const handleFinish = async (values) => {
    values.birth_year = dayjs(values.birth_year).format('YYYY-MM-DD');
    dispatch(postPetForm(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    console.log('Error:', isError);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinishFailed={onFinishFailed}
      onFinish={handleFinish}
      initialValues={initialFormState}>
      <FormRadio name='species' options={animalTypes} />

      <Form.Item shouldUpdate={true}>
        {({ getFieldValue }) => {
          const species = getFieldValue('species');
          const fields =
            species === 'CAT'
              ? catInputFields
              : species === 'DOG'
                ? dogInputFields
                : animalInputFields;

          return (
            <>
              {fields.map((input, index) => {
                // const Component = FormFieldComponentsByType[item.type];

                return input.type === 'year' ? (
                  <Form.Item key={input.name} name={input.name} rules={input.rules}>
                    <DatePicker placeholder={input.placeholder} className={s.date} />
                  </Form.Item>
                ) : (
                  <FormInput
                    key={input.name}
                    placeholder={input.placeholder}
                    name={input.name}
                    rules={input.rules}
                    type={input.type}
                  />
                );
                // <LongForm.Item key={index} {...item.formItemProps}>
                //     <Component {...item.fieldProps} />
                // </LongForm.Item>
              })}
            </>
          );
        }}
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {({ getFieldValue }) => {
          const species = getFieldValue('species');
          const fields =
            species === 'CAT'
              ? catRadioFields
              : species === 'DOG'
                ? dogRadioFields
                : animalRadioFields;

          return (
            <>
              {fields.map((group, index) => {
                // const Component = FormFieldComponentsByType[item.type];

                return (
                  <FormRadio
                    key={index}
                    name={group.name}
                    label={group.label}
                    options={group.options}
                    rules={[{ required: true, message: 'Введите один из вариантов' }]}
                  />
                );
              })}
            </>
          );
        }}
      </Form.Item>

      {/*<LongForm.Item*/}
      {/*  shouldUpdate={(prevValues, curValues) =>*/}
      {/*    prevValues.isObserved !== curValues.isObserved*/}
      {/*  }>*/}
      {/*  {({ getFieldValue }) =>*/}
      {/*    getFieldValue('isObserved') === 'yes' ? (*/}
      {/*      <FormInput*/}
      {/*        name='clinicInfo'*/}
      {/*        placeholder='Введите информацию о клинике'*/}
      {/*        rules={[{ required: true, message: 'Введите информацию о клинике' }]}*/}
      {/*      />*/}
      {/*    ) : null*/}
      {/*  }*/}
      {/*</LongForm.Item>*/}

      {/*<LongForm.Item label='Другие важные особенности вашего питомца' name='additionalInfo'>*/}
      {/*  <TextArea rows={4} />*/}
      {/*</LongForm.Item> *!/*/}

      {/* <LongForm.Item label='Добавить фото питомца' name='photo'>
        <Upload name='photo' listType='picture' beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </LongForm.Item> */}

      <FormButton type='primary' htmlType='submit'>
        Сохранить данные
      </FormButton>
    </Form>
  );
};

export default PetForm;
