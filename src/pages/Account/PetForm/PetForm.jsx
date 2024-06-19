import dayjs from 'dayjs';
import {DatePicker, Form} from 'antd';
import FormButton from '../../../components/UI/Buttons/FormButton/FormButton';
import FormRadio from "../../../components/UI/FormRadio/FormRadio.jsx";
import FormInput from "../../../components/UI/FormInput/FormInput.jsx";
import {useDispatch, useSelector} from "react-redux";

import initialFormState from "./data/initialFormState.js";
import animalTypes from "./data/animalTypes.js";

import animalInputFields from "./data/animal/animalInputFields.js";
import animalRadioFields from "./data/animal/animalRadioFields.js";

import catInputFields from "./data/cat/catInputFields.js";
import catRadioFields from "./data/cat/catRadioFields.js";

import dogInputFields from "./data/dog/dogInputFields.js";
import dogRadioFields from "./data/dog/dogRadioFields.js";
import {
    selectPetFormIsError,
    selectPetFormIsLoading,
    selectPetFormIsSuccess
    } from "../../../core/store/pet/slice.js";
import {postPetForm} from "../../../core/store/pet/thunk.js";


const PetForm = () => {
    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const isSuccess = useSelector(selectPetFormIsSuccess)
    const isError = useSelector(selectPetFormIsError)

    const handleFinish = async (values) => {
        values.birth_year = dayjs(values.birth_year).format('YYYY-MM-DD');
        console.log('Form values:', values);
        dispatch(postPetForm(values))
    }

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

            <FormRadio name='species' options={animalTypes}/>

            <Form.Item shouldUpdate={true}>
                {({ getFieldValue }) => {
                    const species = getFieldValue('species');
                    const fields =
                        species === 'CAT' ? catInputFields : species === 'DOG' ? dogInputFields : animalInputFields;

                    return (
                        <>
                            {fields.map((input, index) => {
                                // const Component = FormFieldComponentsByType[item.type];

                                return (
                                    input.type === 'year' ? (
                                        <Form.Item
                                            key={input.name}
                                            name={input.name}
                                            rules={input.rules}
                                            label={input.placeholder}>
                                            <DatePicker/>
                                        </Form.Item>
                                    ) : (
                                        <FormInput
                                            key={input.name}
                                            placeholder={input.placeholder}
                                            name={input.name}
                                            rules={input.rules}
                                            type={input.type}
                                        />
                                    )
                                    // <Form.Item key={index} {...item.formItemProps}>
                                    //     <Component {...item.fieldProps} />
                                    // </Form.Item>
                                );
                            })}
                        </>
                    );
                }}
            </Form.Item>

            <Form.Item shouldUpdate={true}>
                {({ getFieldValue }) => {
                    const species = getFieldValue('species');
                    const fields =
                        species === 'CAT' ? catRadioFields : species === 'DOG' ? dogRadioFields : animalRadioFields;

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
                                        rules={[{required: true, message: 'Введите один из вариантов'}]}
                                    />
                                );
                            })}
                        </>
                    );
                }}
            </Form.Item>


      {/*<Form.Item*/}
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
      {/*</Form.Item>*/}

      {/*<Form.Item label='Другие важные особенности вашего питомца' name='additionalInfo'>*/}
      {/*  <TextArea rows={4} />*/}
      {/*</Form.Item> *!/*/}

            {/* <Form.Item label='Добавить фото питомца' name='photo'>
        <Upload name='photo' listType='picture' beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item> */}

            <FormButton type='primary' htmlType='submit'>
                Сохранить данные
            </FormButton>
        </Form>
    );
};

export default PetForm;
