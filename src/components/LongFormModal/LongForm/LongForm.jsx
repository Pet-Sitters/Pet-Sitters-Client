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
    resetPetFormState,
    selectPetFormIsError,
    selectPetFormIsSuccess
} from "../../../core/store/pet/slice.js";
import {getPetForm, postPetForm} from "../../../core/store/pet/thunk.js";

import {useEffect} from "react";
import detailInputFields from "./data/details/detailsRadio.js";
import {DialogTitle} from "@headlessui/react";
import detailInput from "./data/details/detailsInput.js";

import s from './LongForm.module.scss'
import {updateKeep} from "../../../core/store/keep/thunk.js";
import detailFields from "./data/details/detailFields.js";
import {closeModal} from "../../../core/store/modalLongForm/slice.js";

const LongForm = ({keepId, userId}) => {
    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const isSuccess = useSelector(selectPetFormIsSuccess)
    const isError = useSelector(selectPetFormIsError)


    // useEffect(() => {
    //     if (isSuccess) {
    //         dispatch(resetPetFormState());
    //     }
    // }, [isSuccess, dispatch]);


    const handleFinish = async (values) => {
        values.birth_year = dayjs(values.birth_year).format('YYYY-MM-DD');
        values.from_date = dayjs(values.from_date).format('YYYY-MM-DD');
        values.to_date = dayjs(values.to_date).format('YYYY-MM-DD');

        const animalValues = {};
        const detailValues = {};

        Object.keys(values).forEach((key) => {
            if (detailFields.includes(key)) {
                detailValues[key] = values[key];
            } else {
                animalValues[key] = values[key];
            }
        })

        console.log(values, animalValues, detailValues);
        console.log(`keepID: ${keepId} userId: ${userId}`);

        try {
            const petResponse = await dispatch(postPetForm(animalValues)).unwrap();

            await dispatch(resetPetFormState());
            const petsInfo = await dispatch(getPetForm()).unwrap();
            const lastPet = petsInfo[petsInfo.length - 1];
            console.log('Response:', petResponse, petsInfo, lastPet, lastPet.owner, lastPet.id);

            const updateData = { id: keepId, data: {id: keepId, pet: lastPet.id, owner: lastPet.owner, status: "active", ...detailValues }};
            console.log(updateData);
            await dispatch(updateKeep(updateData));
            await dispatch(closeModal());
        } catch (error) {
            console.log('Error:', error);
            await dispatch(closeModal());
        }
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
            initialValues={initialFormState}

            className={s.longForm}
        >
            <div className={s.pet}>
                <FormRadio name='species' options={animalTypes}/>

                <Form.Item shouldUpdate={true}>
                    {({getFieldValue}) => {
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
                                            >
                                                <DatePicker
                                                    placeholder={input.placeholder}
                                                    className={s.date}
                                                />
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
                                    );
                                })}
                            </>
                        );
                    }}
                </Form.Item>

                <Form.Item shouldUpdate={true}>
                    {({getFieldValue}) => {
                        const species = getFieldValue('species');
                        const fields =
                            species === 'CAT' ? catRadioFields : species === 'DOG' ? dogRadioFields : animalRadioFields;

                        return (
                            <>
                                {fields.map((group, index) => {

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
            </div>

            <div className={s.details}>
                <DialogTitle className={s.title}>Теперь о деталях передержки</DialogTitle>

                <Form.Item label='Укажите даты передержки'>
                    <div className={s.dates}>
                        {detailInput.map((input, index) => {
                            // const Component = FormFieldComponentsByType[item.type];

                            return (
                                <div key={input.label} className={s.dateContainer}>
                                    <p>{input.label}</p>
                                    <Form.Item
                                        key={input.name}
                                        name={input.name}
                                        rules={input.rules}
                                    >
                                        <DatePicker
                                            placeholder={input.placeholder}
                                            className={s.date}
                                        />
                                    </Form.Item>
                                </div>
                            );
                        })}
                    </div>

                </Form.Item>


                <>
                    {detailInputFields.map((group, index) => {

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
            </div>

            <div className={s.submitButton}>
                <FormButton type='primary' htmlType='submit'>
                    Сохранить данные
                </FormButton>
            </div>
        </Form>
    );
};

export default LongForm;
