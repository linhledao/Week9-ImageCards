import { useState } from 'react'
import './App.css'
import Card from "./ImageCard";

function App() {
  const images = [
    {
      image: "https://i.ibb.co/MxzkWDp4/gettyimages-500177214-612x612.jpg",
      title: "Ocean",
      comment: "Blue waves hitting the beach.",
      author: "Bob",
      date: "19/10/2025 11:30 PM"
    },
    {
      image: "https://i.ibb.co/PvqrPyCf/gettyimages-583809524-612x612.jpg",
      title: "Mountains",
      comment: "Mountains in the morning.",
      author: "Alice",
      date: "20/10/2025 10:15 AM"
    },
    {
      image: "https://i.ibb.co/TBjff7Hc/gettyimages-691930476-612x612.jpg",
      title: "Tuscany landscape",
      comment: "Tuscany landscape at sunrise with low fog.",
      author: "Charlie",
      date: "21/10/2025 8:00 AM"
    },
    {
      image: "https://i.ibb.co/jkRxf4ZY/gettyimages-1458782106-612x612.jpg",
      title: "River",
      comment: "A river surrounded by trees.",
      author: "Diana",
      date: "22/10/2025 7:30 PM"
    },
    {
      image: "https://i.ibb.co/fd2FHGTV/gettyimages-1696167872-612x612.jpg",
      title: "Forest",
      comment: "A peaceful forest landscape.",
      author: "Edward",
      date: "23/10/2025 3:10 PM"
    },
    {
      image: "https://i.ibb.co/4ZY6Dk0x/gettyimages-1822247032-612x612.jpg",
      title: "Road",
      comment: "A long empty road.",
      author: "Fiona",
      date: "24/10/2025 4:55 PM"
    }
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  return (
    <div style={gridStyle}>
      {images.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          comment={item.comment}
          author={item.author}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default App;
