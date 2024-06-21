import { Input, InputNumber, Radio, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export const FormFieldType = {
  Input: 'input',
  InputNumber: 'inpitNumber',
  Textarea: 'textarea',
  Select: 'select',
  Radio: 'radio',
  Upload: 'upload',
};

export const FormFieldComponentsByType = {
  [FormFieldType.Input]: Input,
  [FormFieldType.InputNumber]: InputNumber,
  [FormFieldType.Select]: Select,
  [FormFieldType.Radio]: Radio.Group,
  [FormFieldType.Textarea]: TextArea,
  [FormFieldType.Upload]: Upload,
};
