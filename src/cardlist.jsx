import React, { useEffect, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import "./cardlist.css";

const descriptions = [
  "Perfect for small apartments with limited space.",
  "Energy-efficient and eco-friendly design.",
  "Elegant and modern finish to match your decor.",
  "Highly durable with 10-year warranty.",
  "Crafted from premium-quality wood.",
  "Multi-purpose and space-saving furniture.",
  "Designed with user comfort in mind.",
  "Budget-friendly and reliable.",
  "Made from recycled materials.",
  "Ideal for indoor or outdoor use.",
];

const generateCards = (count) =>{
     const card1=[];
     for(let i=0;i<count;i++){
      card1.push({
        id:i+1,
        title:`product ${i+1}`,
        image:`https://picsum.photos/seed/${i + 1}/200/150`,
        description:descriptions[i%descriptions.length]
          })
     }
     return card1;
    }


function Cardlist() {
  const cards = generateCards(1000);
  const columnCount = 4;
  const rowCount = Math.ceil(cards.length / columnCount);
  const gridOuterRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const container = gridOuterRef.current;

    const handleScroll = () => {
      if (container?.scrollTop > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    gridOuterRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= cards.length) return null;

    const card = cards[index];

    return (
      <div className="card-contain" style={style}>
        <h3>{card.title}</h3>
        <img src={card.image} alt="product image" className="car-img" />
        <p>{card.description}</p>
      </div>
    );
  };

  return (
    <div className="card">
      <h1>Home Products lists</h1>

      <Grid
        columnCount={columnCount}
        columnWidth={340}
        rowCount={rowCount}
        rowHeight={250}
        height={600}
        width={1400}
        outerRef={gridOuterRef}
        className="card-grid"
      >
        {Cell}
      </Grid>

      {showScrollTop && (
        <button className="scroll-btn" onClick={scrollToTop}>
          top
        </button>
      )}
    </div>
  );
}

export default Cardlist;
