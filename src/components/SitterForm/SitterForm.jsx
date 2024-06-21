import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Flex, Form, Upload } from 'antd';
import _ from 'lodash';
import { useDispatch } from 'react-redux';

import { FormFieldComponentsByType } from '../../core/constants/fieldTypes.js';
import { createSitter } from '../../core/store/sitterInfo/thunk.js';
import FormButton from '../UI/Buttons/FormButton/FormButton.jsx';
import { sitterFormFields } from './sitterFormFields.js';

const SitterForm = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const handleFinish = async (values) => {
    const data = _.cloneDeep(values);
    data.images = [{ image: null }];
    dispatch(createSitter(data));
    // dispatch(patchSitter({images:values.images}));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    // console.log('Error:', isError);
  };

  return (
    <div style={{ marginTop: 100 }}>
      <Form
        form={form}
        layout='vertical'
        onFinishFailed={onFinishFailed}
        onFinish={handleFinish}
        encType='multipart/form-data'>
        {sitterFormFields.map((item, index) => {
          const Component = FormFieldComponentsByType[item.type];

          return (
            <Form.Item key={index} {...item.formItemProps}>
              <Component {...item.fieldProps} />
            </Form.Item>
          );
        })}

        <Form.List name={'images'}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map(({ key }, idx) => (
                  <div
                    key={key}
                    style={{
                      padding: '12px',
                      margin: '5px 0',
                      border: '1px solid #47156C',
                      width: '100%',
                      position: 'relative',
                      borderRadius: '5px',
                    }}>
                    <Form.Item
                      label='Добавить фото'
                      name={[idx, 'image']}
                      valuePropName='fileList'
                      getValueFromEvent={(e) => e && e.fileList}>
                      {/* <input type='file' onChange={(e) => setFile(e.target.files[0])} /> */}
                      <Upload name='image' listType='picture' beforeUpload={() => false}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
                    </Form.Item>
                  </div>
                ))}
                <Flex gap={8} justify={'end'}>
                  <Button
                    type={'text'}
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    style={{ marginTop: '10px' }}>
                    Добавить
                  </Button>
                </Flex>
              </>
            );
          }}
        </Form.List>

        <FormButton type='primary' htmlType='submit'>
          Сохранить данные
        </FormButton>
      </Form>
    </div>
  );
};

export default SitterForm;
