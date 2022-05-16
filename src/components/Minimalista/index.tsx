import styles from './Minimalista.module.scss';
import imagem from '../../assets/minimalista/img_minimalista.png';

export default function Minimalista() {
  return (
    <section className={styles.design}>
      <div className={styles.design__container}>
        <div className={styles.design__blackContainer} data-aos="fade-down">
          <img
            src={imagem}
            alt="Sala de Estar"
            className={styles.design__blackContainer__img}
          />
        </div>
        <div className={styles.design__contentContainer} data-aos="fade-down"> 
          <div className={styles.design__contentContainer__content}>
            <h1>Design Minimalista</h1>
            <p>
              Móveis apenas essenciais e com design moderno, além de
              revestimentos bonitos e em cores neutras para manter a casa sempre
              com um estilo clean e suave.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
