import s from './AboutSitter.module.scss';
export function AboutSitter({ data }) {
  return (
    <article className={s.aboutSitter}>
      <h4 className={s.title}>О себе</h4>
      <p className={s.about}>{data.about}</p>
      <div className={s.imageContainer}>
        <img src='/assets/images/Sitter/dogs.png' alt='dogs' className={s.dogs} />
      </div>
    </article>
  );
}
