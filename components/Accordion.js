import Image from "next/image";
import AccordionItem from "@/partials/AccordionItem";
import styles from "@/styles/components/accordion.module.scss";

const Accordion = ({ accordion }) => {
  return (
    <div className={`bg-${accordion.backgroundColor}`}>
    <section className={styles.accordion}>
      <div className={styles.container}>
        {accordion.image ? (
          <figure className={styles.imgContainer}>
            <Image
              src={accordion.image}
              alt=""
              quality={100}
              width={500}
              height={500}
              sizes="50vw"
            />
          </figure>
        ) : null}
        {accordion.items && (
          <div className={styles.content}>
            {accordion.items.map((item, i) => (
              <AccordionItem key={i} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
    </div>
  );
};

export default Accordion;
