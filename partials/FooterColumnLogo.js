import Image from "next/image";
import styles from "@/styles/components/footer.module.scss";

const FooterColumnLogo = ({ logo }) => {
  return (
    <div className={styles.column}>
      {logo && (
        <figure className={styles.logoContainer}>
          <Image src={logo} alt="" quality={100} fill sizes="100vw" />
        </figure>
      )}
    </div>
  );
};

export default FooterColumnLogo;
