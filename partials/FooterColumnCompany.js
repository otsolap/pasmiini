import React, { useEffect, useRef } from "react";
import Link from "next/link";
import useToggle from "@/hooks/useToggleState";
import styles from "@/styles/components/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import MarkdownBlock from "@/partials/MarkdownBlock";
import site from "@/content/settings/site.json";

const FooterColumnCompany = ({ open, title, body }) => {
  const { calender } = site
  const contentRef = useRef(null);
  const [active, setActive] = useToggle(open);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className={styles.column}>
      <div className={styles.button} onClick={toggleAccordion}>
        <div className={styles.wrapper}>
          <div className={active ? `${styles.open}` : `${styles.closed}`}>
            <div className={styles.flexBox}>
              <h4 className={styles.heading}>{title}</h4>
              <FontAwesomeIcon
                className={styles.icon}
                aria-label="Alatunnisteen lisätieto"
                icon={active ? faAngleUp : faAngleDown}
              />
            </div>
          </div>
          <div
            ref={contentRef}
            className={
              active
                ? `${styles.content} ${styles.contentDivider}`
                : `${styles.content}`
            }
          >
            {body && <MarkdownBlock markdown={body} />}
            {calender && (
              <Link className="active" href={calender.url}>{calender.title}</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterColumnCompany;
