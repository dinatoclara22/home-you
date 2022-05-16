import styles from './Galeria.module.scss';
import img1 from '../../assets/galeria/img1.png';
import img2 from '../../assets/galeria/img2.png';
import img3 from '../../assets/galeria/img3.png';

export default function Galeria() {
  return (
    <section className={styles.galeria} id='galeria'>
      <div className={styles.galeria__text} data-aos="fade-down">
        <h1>Galeria</h1>
        <p>
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </p>
        <div className={styles.galeria__images} data-aos="fade-up">
          <img src={img1} alt="" className={styles.galeria__images__img1}/>
          <img src={img2} alt="" className={styles.galeria__images__img2}/>
          <img src={img3} alt="" className={styles.galeria__images__img3}/>
        </div>
      </div>
    </section>
  );
}
