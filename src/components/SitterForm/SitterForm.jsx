import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Form, Upload } from 'antd';
import _ from 'lodash';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormFieldComponentsByType } from '../../core/constants/fieldTypes.js';
import {
  createSitter,
  patchSitter,
  putSitter,
} from '../../core/store/sitterInfo/thunk.js';
import FormButton from '../UI/Buttons/FormButton/FormButton.jsx';
import s from './SitterForm.module.scss';
import { sitterFormFields } from './sitterFormFields.js';

const SitterForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  console.log('fileList', fileList);
  const dispatch = useDispatch();

  const handleFinish = async (values) => {
    const data = _.cloneDeep(values);
    data.images = [{ image: null }];

    const createSitterResponse = await dispatch(createSitter(data)).unwrap();
    const sitterId = createSitterResponse.id;

    // const formData = new FormData();
    // formData.append('avatar', fileList[0].originFileObj);
    // const formData = fileList[0].originFileObj;

    // const patchData = {
    //   id: sitterId,
    //   avatar: formData,
    // };

    // console.log('Patch Data:', patchData);

    // dispatch(putSitter(patchData));
    // dispatch(patchSitter(patchData));
  };
  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    // console.log('Error:', isError);
  };

  return (
    <ConfigProvider
      theme={{
        components:{
          Select: {
            controlHeight:74
          }
        },
        token: {
          borderRadius: 24,
        },
      }}>
      <Form
        form={form}
        layout='vertical'
        onFinishFailed={onFinishFailed}
        onFinish={handleFinish}
        encType='multipart/form-data'>
        {sitterFormFields.map((item, index) => {
          const Component = FormFieldComponentsByType[item.type];

          return (
            <Form.Item key={index} {...item.formItemProps} className={s.input}>
              <Component {...item.fieldProps} />
            </Form.Item>
          );
        })}

        {/* <div style={{ marginTop: 20 }}>
          <Upload
            name='avatar'
            listType='picture'
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // Отменяем автоматическую загрузку
          >
            <Button icon={<UploadOutlined />}>Выбрать файл</Button>
          </Upload>
        </div> */}
        {/* <Form.List name={'images'}>
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
                      name={'avatar'}
                      valuePropName='fileList'
                      getValueFromEvent={(e) => e && e.fileList}>
                      <Upload
                        name='avatar'
                        listType='picture'
                        beforeUpload={() => false}
                        fileList={fileList}
                        onChange={handleFileChange}>
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
        </Form.List> */}

        <FormButton type='primary' htmlType='submit'>
          Сохранить данные
        </FormButton>
      </Form>
    </ConfigProvider>
  );
};

export default SitterForm;
