import { Jost, Mrs_Saint_Delafield } from 'next/font/google';
import styles from './page.module.css';

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});

const script = Mrs_Saint_Delafield({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
});

const NAV_LINKS = ['Hotel', 'Culinary', 'Activities', ' About Us'];

const WORD = ['H', 'O', 'M', 'E'];
const PEEPHOLE_INDEX = 1;

export default function Home() {
  return (
    <main className={`${jost.variable} ${script.variable} ${styles.hero}`}>
     
      <div className={styles.stage} aria-hidden="true">
        <div className={styles.backdrop} />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <nav className={styles.nav}>
        <span className={styles.wordmark}>Lala Phansi Lodge</span>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <a href="#" className={styles.navUtility}>FAQ</a>
          <a href="#" className={styles.navUtility}>Contact</a>
          <button type="button" className={styles.langSwitch}>
            EN <span className={styles.chevron}>⌄</span>
          </button>
        </div>
      </nav>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Welcome</p>

        <div className={styles.word} aria-label="Home">
          {WORD.map((letter, i) =>
            i === PEEPHOLE_INDEX ? (
              <span key={i} className={styles.peephole} aria-hidden="true" />
            ) : (
              <span key={i} className={styles.letter}>
                {letter}
              </span>
            )
          )}
        </div>

        <p className={styles.script}>at Lala Phansi Lodge.</p>
      </div>
    </main>
  );
}