import s from './CustomArrow.module.scss';

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${s.customArrow} ${s.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}>
      <img src={'/assets/icons/Home/down.png'} alt='prew' />
    </div>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${s.customArrow} ${s.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}>
      <img src={'/assets/icons/Home/up.png'} alt='next' />
    </div>
  );
};
