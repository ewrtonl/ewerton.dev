import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import styles from "./nav.module.css";
import { At} from "@phosphor-icons/react/dist/ssr";

export default function Nav() {
  return (
    <nav className={[GeistSans.className, styles.menuMain].join(" ")}>
      <div className={styles.profile}>
        <At size={20} />
        <div className={styles.profileInfo}>
          <p>ewerton.dev</p>
        </div>
      </div>

      <div className={styles.menu}>
        <Link href="/" className={styles.menuLink}>
          <p>home</p>
        </Link>
        <Link href="/blog" className={styles.menuLink}>
          <p>writing</p>
        </Link>
        <Link href="/" className={styles.menuLink}>
          <p>socials</p>
        </Link>
      </div>
    </nav>
  );
}
