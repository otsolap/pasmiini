import styles from "@/styles/components/cards.module.scss";
import CardItem from "@/partials/CardItem";
import Waves from "@/partials/Waves";

const Cards = ({ cards }) => {
  return (
    <section className={`${styles.cards} bg-${cards.backgroundColor}`}>
    <Waves currentColor={cards.backgroundColor}  />
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
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Cards;
