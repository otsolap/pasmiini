import Nav from "@/content/settings/nav.json";
import Link from "next/link";
import { faPen, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import styles from "@/styles/components/footer.module.scss";

const MobileFooter = () => {
  const router = useRouter();
  const navigation = Nav.navigation.pages;
  const PRIMARY_PAGES = 3;

  const icons = {
    clipboard: faClipboardList,
    pen: faPen,
  };

  const mobileNav = navigation.slice(0, PRIMARY_PAGES).map((page, i) => {
    const icon = icons[page.icon];

    return (
      <Link
        className={router.pathname == page.path ? "active" : ""}
        href={page.path}
        key={i}
        passHref
      >
        {icon ? (
          <FontAwesomeIcon
            className={styles.mobileIcon}
            aria-label={page.title}
            icon={icon}
          />
        ) : null}
        <span className={styles.mobileLinkText}>{page.title}</span>
      </Link>
    );
  });

  return (
    <footer className={`mobile-only ${styles.mobile}`}>
      <div className={styles.mobileMenuWrapper}>{mobileNav}</div>
    </footer>
  );
};

export default MobileFooter;
