import { Collapse, ConfigProvider, theme } from 'antd';
import styles from './FaqArea.module.scss';
import faqs from './data/faqsList.js';
import DownImg from './data/img/down.svg';
import PawImg from './data/img/paw.svg';

const getItems = (faqs, panelStyle) => {
  return faqs.map((faq, index) => ({
    key: index.toString(),
    label: (
      <div className={styles.faqHeader}>
        <img src={PawImg} alt='Paw Icon' className={styles.faqIcon} />
        <span>{faq.question}</span>
      </div>
    ),
    children: <p dangerouslySetInnerHTML={{ __html: faq.answer }} />,
    style: panelStyle,
  }));
};

const FaqArea = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    width: 900,
    border: 'none',
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {},
        },
      }}>
      <div className={styles.container}>
        <h1>Часто задаваемые вопросы</h1>
        <Collapse
          className={styles.collapse}
          bordered={false}
          defaultActiveKey={['0']}
          expandIconPosition='end'
          expandIcon={({ isActive }) => (
            <img
              src={DownImg}
              alt='Expand Icon'
              className={`${styles.expandIcon} ${isActive ? styles.active : ''}`}
            />
          )}
          style={{
            background: token.colorBgContainer,
          }}
          items={getItems(faqs, panelStyle)}
        />
      </div>
    </ConfigProvider>
  );
};

export default FaqArea;
