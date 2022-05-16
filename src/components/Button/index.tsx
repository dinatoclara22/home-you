import styles from './Button.module.scss';

interface Props {
    buttonText : string;
}

export default function Button({buttonText} : Props) {
  return (
    <button className={styles.button}>{buttonText}</button>
  );
}
