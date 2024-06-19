// import {UploadOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';
import {DatePicker, Form} from 'antd';
import FormButton from '../../../components/UI/Buttons/FormButton/FormButton';
import FormRadio from "../../../components/UI/FormRadio/FormRadio.jsx";
import FormInput from "../../../components/UI/FormInput/FormInput.jsx";
import styles from './PetForm.module.scss';

import PetService from "../../testApi/api/services/PetService.js";

// import {animalFields} from './data/animalFields.js';
// import {catFields} from './data/catFields.js';
// import {dogFields} from './data/dogFields.js';
// import {FormFieldComponentsByType} from './data/fieldTypes.js';

import initialFormState from "./data/initialFormState.js";
import animalTypes from "./data/animalTypes.js";

import animalInputFields from "./data/animal/animalInputFields.js";
import animalRadioFields from "./data/animal/animalRadioFields.js";

import catInputFields from "./data/cat/catInputFields.js";
import catRadioFields from "./data/cat/catRadioFields.js";

import dogInputFields from "./data/dog/dogInputFields.js";
import dogRadioFields from "./data/dog/dogRadioFields.js";


const PetForm = () => {
    const [form] = Form.useForm();
    // const navigate = useNavigate();

    const handleFinish = async (values) => {
        values.birth_year = dayjs(values.birth_year).format('YYYY-MM-DD');
        console.log('Form values:', values);
        console.log(localStorage.getItem('accessToken'));
        try {
            const response = await PetService.postPet(values);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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

            {/*{formInputs.map((input) =>*/}
            {/*    input.type === 'year' ? (*/}
            {/*        <Form.Item*/}
            {/*            key={input.name}*/}
            {/*            name={input.name}*/}
            {/*            rules={input.rules}*/}
            {/*            label={input.placeholder}>*/}
            {/*            <DatePicker/>*/}
            {/*        </Form.Item>*/}
            {/*    ) : (*/}
            {/*        <FormInput*/}
            {/*            key={input.name}*/}
            {/*            placeholder={input.placeholder}*/}
            {/*            name={input.name}*/}
            {/*            rules={input.rules}*/}
            {/*            type={input.type}*/}
            {/*        />*/}
            {/*    )*/}
            {/*)}*/}

            {/*{formRadioGroups.map((group) => (*/}
            {/*    <FormRadio*/}
            {/*        key={group.name}*/}
            {/*        name={group.name}*/}
            {/*        label={group.label}*/}
            {/*        options={group.options}*/}
            {/*        rules={[{required: true, message: 'Введите один из вариантов'}]}*/}
            {/*    />*/}
            {/*))}*/}

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

            <FormButton type='primary' htmlType='submit'>
                Сохранить данные
            </FormButton>
        </Form>
    );
};

export default PetForm;

//     "id": 0,
//     "species": "CAT",
//     "breed": "string",
//     "name": "string",
//     "gender": "FEM",
//     "sterilized": true,
//     "birth_year": "2024-06-17",
//     "weigth": 0,
//     "immunized": true,
//     "vet_ppt": true,
//     "emergency_contact": "string",
//     "diseases": "string",
//     "fears": "string",
//     "features": "string",
//     "outside_lb": "NO",
//     "scratch": "string",
//     "pulls": "NO",
//     "picks": "NO",
//     "take": "YES",
//     "aggression": "string",
//     "no_leash": "YES",
//     "dogs_contact": "YES",
//     "wash_paws": "BATH",
//     "pee_home": "YES",
//     "gnaw_home": "NO",
//     "walk": "NO"

// aggression : "CAT"
// birth_year
//     :
//     "2024-06-03"
// breed
//     :
//     "test"
// diseases
//     :
//     "Нет"
// dogs_contact
//     :
//     "YES"
// emergency_contact
//     :
//     "123"
// fears
//     :
//     "test"
// features
//     :
//     "test"
// gender
//     :
//     "MAL"
// gnaw_home
//     :
//     "NO"
// immunized
//     :
//     true
// name
//     :
//     "test dog"
// no_leash
//     :
//     "YES"
// pee_home
//     :
//     "YES"
// picks
//     :
//     "NO"
// pulls
//     :
//     "NO"
// species
//     :
//     "DOG"
// sterilized
//     :
//     true
// take
//     :
//     "YES"
// vet_ppt
//     :
//     true
// walk
//     :
//     "1"
// wash_paws
//     :
//     "BATH"
// weight
//     :
//     "1"
