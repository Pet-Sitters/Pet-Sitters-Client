import { FormFieldType } from '../../core/constants/fieldTypes';

export const sitterFormFields = [
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['user', 'username'],
      label: 'email',
      // rules: [{ required: true, message: '' }],
    },
    fieldProps: {
      placeholder: 'email',
      // options: [
      //   { label: 'Мальчик', value: 'MAL' },
      //   { label: 'Девочка', value: 'FEM' },
      // ],
    },
  },
  {
    type: FormFieldType.InputNumber,
    formItemProps: {
      name: ['passport', 'pass_num'],
      // label: 'pass_num',
    },
    fieldProps: {
      placeholder: 'pass_num',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'given_dt'],
      // label: 'given_dt',
    },
    fieldProps: {
      placeholder: 'given_dt',
    },
  },
  {
    type: FormFieldType.InputNumber,
    formItemProps: {
      name: ['passport', 'given_code'],
      // label: 'given_code',
    },
    fieldProps: {
      placeholder: 'given_code',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'given_nm'],
      // label: 'given_nm',
    },
    fieldProps: {
      placeholder: 'given_nm',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'first_nm'],
      // label: 'first_nm',
    },
    fieldProps: {
      placeholder: 'first_nm',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'second_nm'],
      // label: 'second_nm',
    },
    fieldProps: {
      placeholder: 'second_nm',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'sur_nm'],
      // label: 'sur_nm',
    },
    fieldProps: {
      placeholder: 'sur_nm',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'birth_dt'],
      // label: 'birth_dt',
    },
    fieldProps: {
      placeholder: 'birth_dt',
    },
  },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: ['passport', 'addr_nm'],
      // label: 'addr_nm',
    },
    fieldProps: {
      placeholder: 'addr_nm',
    },
  },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: ['passport', 'pic_1'],
  //     // label: 'pic_1',
  //   },
  //   fieldProps: {
  //     placeholder: 'pic_1',
  //   },
  // },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: ['passport', 'pic_2'],
  //     // label: 'pic_1',
  //   },
  //   fieldProps: {
  //     placeholder: 'pic_2',
  //   },
  // },
  {
    type: FormFieldType.Input,
    formItemProps: {
      name: 'first_name',
      // label: 'first_name',
    },
    fieldProps: {
      placeholder: 'first_name',
    },
  },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: 'last_name',
  //     // label: 'last_name',
  //   },
  //   fieldProps: {
  //     placeholder: 'last_name',
  //   },
  // },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: 'patronym',
  //     // label: 'patronym',
  //   },
  //   fieldProps: {
  //     placeholder: 'patronym',
  //   },
  // },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: 'tg_nick',
  //     // label: 'tg_nick',
  //   },
  //   fieldProps: {
  //     placeholder: 'tg_nick',
  //   },
  // },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: 'phone_num',
  //     // label: 'phone_num',
  //   },
  //   fieldProps: {
  //     placeholder: 'phone_num',
  //   },
  // },
  // // {
  // //   type: FormFieldType.Input,
  // //   formItemProps: {
  // //     name: 'city',
  // //     // label: 'city',
  // //   },
  // //   fieldProps: {
  // //     placeholder: 'city',
  // //   },
  // // },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: 'address',
  //     // label: 'address',
  //   },
  //   fieldProps: {
  //     placeholder: 'address',
  //   },
  // },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: 'birth_date',
  //     // label: 'birth_date',
  //   },
  //   fieldProps: {
  //     placeholder: 'birth_date',
  //   },
  // },
  // // {
  // //   type: FormFieldType.Input,
  // //   formItemProps: {
  // //     name: 'social',
  // //     // label: 'social',
  // //   },
  // //   fieldProps: {
  // //     placeholder: 'social',
  // //   },
  // // },
  // {
  //   type: FormFieldType.Input,
  //   formItemProps: {
  //     name: 'about',
  //     // label: 'about',
  //   },
  //   fieldProps: {
  //     placeholder: 'about',
  //   },
  // },

  // // {
  // //   type: FormFieldType.Input,
  // //   formItemProps: {
  // //     name: 'tg_nick',
  // //     label: 'tg_nick',
  // //     // rules: [{ required: true, message: '' }],
  // //   },
  // //   fieldProps: {
  // //     placeholder: 'tg_nick',
  // //     // options: [
  // //     //   { label: 'Мальчик', value: 'MAL' },
  // //     //   { label: 'Девочка', value: 'FEM' },
  // //     // ],
  // //   },
  // // },
];
