import styles from './Principal.module.scss';
import casa from '../../assets/img.png';
import Button from '../Button';

export default function Principal() {
  return (
    <section className={styles.principal} id='principal'>
      <div className={styles.principal__container} >

        <div data-aos="fade-right" className={styles.principal__information}>
          <h1>Ajudar você a encontrar o melhor conforto,{'\n'} é nossa prioridade.</h1>
          <p>
            Encontre uma variedade de propriedades que combinam com você.
            Esqueça todas as dificuldades em encontrar uma residência
          </p>
          <div className={styles.principal__information__click}>
            <Button buttonText='Entre em contato'/>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.principal__img}>
          <img src={casa} alt="Casa Moderna" />
        </div>
        
      </div>
    </section>
  );
}
