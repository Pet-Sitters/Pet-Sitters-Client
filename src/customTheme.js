const HOVER_INPUT_COLOR = '#47156C';
const MAIN_COLOR = '#C896FF';
const ERROR_COLOR = '#FF1B1B';

export const customTheme = {
  token: {
    colorPrimary: MAIN_COLOR,
    colorBorder: MAIN_COLOR,
    colorPrimaryHover: HOVER_INPUT_COLOR,
    colorError: ERROR_COLOR,
    errorFontSize: 10,
  },
  components: {
    // Layout: layoutStyle,
    // Button: buttonStyle,
    // Segmented: segmentedStyle,
    // Typography: typographyStyle,
    // Modal: modalStyle,
    Form: {
      verticalLabelPadding: 4,
      // labelColor: color.whiteOp60,
      labelFontSize: 20,
      labelHeight: 24,
      itemMarginBottom: 18,
      // labelRequiredMarkColor: color.blackOp12
    },
    // Select: selectStyle,
    Input: {
      // activeBg: color.whiteOp12,
      activeBorderColor: '#8422E6',
      activeShadow: '0 0 0 2px #C896FF',
      // addonBg: color.whiteOp06,
      // addonBg: 'transparent',
      errorActiveShadow: '0 0 0 2px #C896FF',
      // warningActiveShadow: `0 0 0 2px ${color.warningOp12}`,
      // hoverBg: color.whiteOp12,
      hoverBorderColor: '#8422E6',
      // filledHandleBg: color.successOp12,
      // handleActiveBg: color.success,
      // handleBg: color.success,
      // handleBorderColor: color.success,
      // handleFontSize: 20,
      // handleHoverColor: color.success,
      // handleVisible: true,
      // handleWidth: 10,
      inputFontSize: 20,
      paddingBlock: 10,
      paddingInline: 24,
    },
    // InputNumber: inputNumberStyle,
    // Radio: radioStyle,
  },
};
