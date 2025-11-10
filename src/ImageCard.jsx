function Card({ image, title, comment, author, date }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    objectPosition: "center",
    marginBottom: "10px",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />

      <h2>{title}</h2>

      <p>{comment}</p>

      <p><strong>Author:</strong> {author}</p>

      <p><strong>Uploaded:</strong> {date}</p>
    </div>
  );
}

export default Card;
