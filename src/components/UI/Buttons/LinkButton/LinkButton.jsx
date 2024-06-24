import { Button, ConfigProvider } from 'antd';
import styles from './LinkButton.module.scss';
import ScrollLink from './ScrollLink';

const MAIN_COLOR = '#C896FF';
const SECONDARY_COLOR = '#DBEF98';
const COLOR = '#47156C';

const types = {
  main: {
    style: 'main',
    main_color: COLOR,
    hover_color: MAIN_COLOR,
  },
  green: {
    style: 'green',
    main_color: SECONDARY_COLOR,
    hover_color: MAIN_COLOR,
  },
  game1: {
    style: 'game1',
    main_color: SECONDARY_COLOR,
    hover_color: COLOR,
  },
  game2: {
    style: 'main',
    main_color: COLOR,
    hover_color: SECONDARY_COLOR,
  },
  light: {
    style: 'light',
    main_color: MAIN_COLOR,
    hover_color: SECONDARY_COLOR,
  },
};

const LinkButton = ({ children, buttonType, to }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: types[buttonType].main_color,
            colorPrimaryHover: types[buttonType].hover_color,
            borderRadius: 30,
            controlHeight: 60,
          },
        },
      }}>
      <ScrollLink to={to} className={styles.link}>
        <Button
          className={`${styles.mainButton} ${styles[types[buttonType].style]}`}
          type='primary'>
          {children}
        </Button>
      </ScrollLink>
    </ConfigProvider>
  );
};

export default LinkButton;
