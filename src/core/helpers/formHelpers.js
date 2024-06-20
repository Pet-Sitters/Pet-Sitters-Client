export const formHelpers = {
  /**
   *
   * @param {Object} errors [{ Field: string, Message: string }]
   * @param {form} form
   */
  setFormErrors: (errors, form) => {
    if (typeof errors === 'object') {
      const errorsArray = [];

      for (const key in errors) {
        errorsArray.push({
          name: key,
          errors: errors[key],
        });
      }

      form.setFields(errorsArray);
    }
  },
};
