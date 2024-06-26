import styles from './SwiperCard.module.scss';

const SwiperCard = ({ icon, title, subtitle, description, number }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={icon} alt={title} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
        <div className={styles.description}>{description}</div>
      </div>
      <div>
        <h1 className={styles.number}>{number}</h1>
      </div>
    </div>
  );
};

export default SwiperCard;
