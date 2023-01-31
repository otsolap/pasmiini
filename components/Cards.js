import styles from "@/styles/components/cards.module.scss";
import CardItem from "@/partials/CardItem";

const Cards = ({ cards }) => {
  return (
    <div className={`bg-${cards.backgroundColor}`}>
      <section className={`${styles.cards}`}>
        {cards.title && (
          <header className={styles.header}>
            {cards.title && <h2>{cards.title}</h2>}
            {cards.summary && <p>{cards.summary}</p>}
          </header>
        )}
        {cards && (
          <div className={styles.wrapper}>
            {cards.items.map((item, i) => {
              return (
                <CardItem
                  key={i}
                  image={item.image}
                  title={item.title}
                  summary={item.summary}
                  className={
                    cards.backgroundColor == "green" ? "" : styles.reverseColors
                  }
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Cards;
