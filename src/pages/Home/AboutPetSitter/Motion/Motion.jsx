import { motion } from 'framer-motion';

import s from './Motion.module.scss';
export function Motion() {
  const pVariants = {
    hiddenLeft: {
      x: -500,
      opacity: 0,
    },
    hiddenRight: {
      x: 500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className={s.motionFrame}>
      <div className={s.paragraphs}>
        <motion.p
          initial={'hiddenLeft'}
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.5,
          }}
          variants={pVariants}
          className={s.paragraphOne}>
          У
          <img src='/assets/icons/Home/face.png' alt='face' />
          есть любимый питомец
        </motion.p>
        <motion.p
          initial={'hiddenRight'}
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.7,
          }}
          variants={pVariants}
          className={s.paragraphTwo}>
          но вам нужно уехать
        </motion.p>
        <motion.p
          initial={'hiddenLeft'}
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.9,
          }}
          variants={pVariants}
          className={s.paragraphThree}>
          <img src='/assets/icons/Home/petsitterInherit.png' alt='petsitter' />
          придет на помощь!
        </motion.p>
        <motion.p
          initial={'hiddenRight'}
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 1.1,
          }}
          variants={pVariants}
          className={s.paragraphFore}>
          Ситтер
          <img src='/assets/icons/Home/dog.png' alt='dog' /> о питомце и
          <img src='/assets/icons/Home/cat.png' alt='cat' />
        </motion.p>
        <motion.p
          initial={'hiddenLeft'}
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 1.3,
          }}
          variants={pVariants}
          className={s.paragraphFive}>
          Пришлет вам отчет
          <img
            src='/assets/icons/Home/togever.png'
            alt='countdown'
            className={s.togetherImg}
          />
        </motion.p>
      </div>
    </div>
  );
}
