import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Radio, Upload } from 'antd';
import FormButton from '../../../components/UI/Buttons/FormButton/FormButton';
import styles from './PetForm.module.scss';

import { animalFields } from './animalFields.js';
import { catFields } from './catFields.js';
import { dogFields } from './dogFields.js';
import { FormFieldComponentsByType } from './fieldTypes.js';
import { animalTypes } from './formFields.js';

const animalTypeOptions = [
  {
    label: 'Кошка',
    value: 'CAT',
  },
  {
    label: 'Собака',
    value: 'DOG',
  },
  {
    label: 'Другое',
    value: 'OTH',
  },
];

const PetForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Form values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinishFailed={onFinishFailed}
      onFinish={handleFinish}
      initialValues={{ animalType: animalTypes[0].value }}>
      <Form.Item name='species' label='animalType'>
        <Radio.Group options={animalTypeOptions} />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {({ getFieldValue }) => {
          const species = getFieldValue('species');

          return (
            <>
              {species === 'CAT' && (
                <>
                  {catFields.map((item, index) => {
                    const Component = FormFieldComponentsByType[item.type];

                    return (
                      <Form.Item key={index} {...item.formItemProps}>
                        <Component {...item.fieldProps} />
                      </Form.Item>
                    );
                  })}
                </>
              )}
              {species === 'DOG' && (
                <>
                  {dogFields.map((item, index) => {
                    const Component = FormFieldComponentsByType[item.type];

                    return (
                      <Form.Item key={index} {...item.formItemProps}>
                        <Component {...item.fieldProps} />
                      </Form.Item>
                    );
                  })}
                </>
              )}
              {species === 'OTH' && (
                <>
                  {animalFields.map((item, index) => {
                    const Component = FormFieldComponentsByType[item.type];

                    return (
                      <Form.Item key={index} {...item.formItemProps}>
                        <Component {...item.fieldProps} />
                      </Form.Item>
                    );
                  })}
                </>
              )}
            </>
          );
        }}
      </Form.Item>
      {/* <FormRadio name='animalType' options={animalTypes} /> */}
      {/* {formInputs.map((input) => (
        <FormInput
          key={input.name}
          placeholder={input.placeholder}
          name={input.name}
          rules={input.rules}
          type={input.type}
        />
      ))}

      {formRadioGroups.map((group) => (
        <FormRadio
          key={group.name}
          name={group.name}
          label={group.label}
          options={group.options}
          rules={[{ required: true, message: 'Введите один из вариантов' }]}
        />
      ))}

      <Form.Item
        shouldUpdate={(prevValues, curValues) =>
          prevValues.isObserved !== curValues.isObserved
        }>
        {({ getFieldValue }) =>
          getFieldValue('isObserved') === 'yes' ? (
            <FormInput
              name='clinicInfo'
              placeholder='Введите информацию о клинике'
              rules={[{ required: true, message: 'Введите информацию о клинике' }]}
            />
          ) : null
        }
      </Form.Item>

      <Form.Item label='Другие важные особенности вашего питомца' name='additionalInfo'>
        <TextArea rows={4} />
      </Form.Item> */}

      {/* <Form.Item label='Добавить фото питомца' name='photo'>
        <Upload name='photo' listType='picture' beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item> */}

      <FormButton clName={styles.submitButton} type='primary' htmlType='submit'>
        Сохранить данные
      </FormButton>
    </Form>
  );
};

export default PetForm;
