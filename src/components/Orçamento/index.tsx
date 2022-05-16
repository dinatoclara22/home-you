import Button from '../Button';
import styles from './Orcamento.module.scss';

export default function Orcamento() {
  return (
    <section className={styles.orcamento} id='orcamento' data-aos="zoom-in">
      <h1>Orçamento</h1>
      <p>Interessado em entrar em contato com um de nossos profissionais?</p>
      <Button buttonText='Entre em contato'/>
    </section>
  );
}
