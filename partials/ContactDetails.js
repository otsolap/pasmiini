import styles from "@/styles/components/footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactDetails = ({ list }) => {
  const contactInfo = list.map((contacts, i) => {
    return (
      <p className={styles.contactText} key={i}>
        {contacts.type === "phone" ? (
          <Link
            className={styles.link}
            href={`tel:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="Phone"
              icon={faPhone}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "whatsapp" ? (
          <Link
            className={styles.link}
            href={`https://wa.me/${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="Whatsapp"
              icon={faWhatsapp}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "email" ? (
          <Link
            className={styles.link}
            href={`mailto:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="Sähköposti"
              icon={faEnvelope}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "instagram" ? (
          <Link
            className={styles.link}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="Instagram"
              icon={faInstagram}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "linkedIn" ? (
          <Link
            className={styles.link}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="LinkedIn"
              icon={faLinkedin}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "facebook" ? (
          <Link
            className={styles.link}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              aria-label="Facebook"
              icon={faFacebook}
              className={styles.socialIcon}
            />
            {contacts.title}
          </Link>
        ) : null}
      </p>
    );
  });

  return <>{contactInfo}</>;
};

export default ContactDetails;
