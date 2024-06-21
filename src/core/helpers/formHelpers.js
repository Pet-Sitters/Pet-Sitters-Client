import { transformErrorMessage } from './transformErrorMessage';

export const formHelpers = {
  /**
   *
   * @param {Object} errors [{ Field: string, Message: string }]
   * @param {form} form
   */
  setFormErrors: (errors, form) => {
    if (typeof errors === 'object') {
      const errorsArray = [];

      // for (const key in errors) {
      //   errorsArray.push({
      //     name: key,
      //     errors: errors[key],
      //   });
      // }
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const transformedErrors = errors[key].map((error) =>
            transformErrorMessage(error)
          );
          errorsArray.push({
            name: key,
            errors: transformedErrors,
          });
        }
      }

      form.setFields(errorsArray);
    }
  },
};
