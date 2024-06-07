import React from 'react';
import {Button, Form, Input} from "antd";

const AddInput = () => {
    return (
        <Form.List name="additionalInfo">
            {(fields, { add, remove }) => (
                <>
                    <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.isObserved !== curValues.isObserved}>
                        {() =>
                            form.getFieldValue('isObserved') === 'yes' ? (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Form.Item
                                            key={key}
                                            name={[name, 'clinicInfo']}
                                            fieldKey={[fieldKey, 'clinicInfo']}
                                            rules={[{ required: true, message: 'Введите информацию о клинике' }]}
                                        >
                                            <Input placeholder="Введите информацию о клинике" />
                                        </Form.Item>
                                    ))}
                                    <Button type="dashed" onClick={() => add()} block>
                                        Добавить информацию о клинике
                                    </Button>
                                </>
                            ) : null
                        }
                    </Form.Item>
                </>
            )}
        </Form.List>
    );
};

export default AddInput;