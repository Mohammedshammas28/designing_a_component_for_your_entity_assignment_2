import React from "react";
import Button from "../components/Button"; // Importing Button Component

const Productcard = () => {
  // Static product details
  const productImage = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTv5I0fLKuGV-QtY9ItIjeSMxM4vGF9CHOHL2mKEyKf1P4nP14Tpsq8COPSugxJJ_Qy3BM_k7_E7h-k5XtaLCbN10ga1YhIuNmxqYKS63AGGR2DIAehU3RLLQ";
  const productName = "Sennheiser HD-599 Around-Ear Headphones";
  const productPrice = "$99.99";

  // Click handler for button
  const handleViewProduct = () => {
    alert(`Viewing details for: ${productName}`);
    console.log(`Viewing details for: ${productName}`);
  };

  return (
    <div style={styles.card}>
      <img src={productImage} alt="Product" style={styles.image} />
      <h3 style={styles.name}>{productName}</h3>
      <p style={styles.price}>{productPrice}</p>
      <Button onClick={handleViewProduct} /> {/* Passing click handler */}
    </div>
  );
};

// Styles for Product Card
const styles = {
  card: {
    background: "#040303",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    width: "220px",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "80%",
    borderRadius: "10px",
    marginBottom: "12px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "White",
  },
  price: {
    fontSize: "14px",
    color: "white",
    margin: "5px 0",
  },
};

export default Productcard;
