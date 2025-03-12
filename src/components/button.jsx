import React from "react";

const Button = ({ onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      View Product
    </button>
  );
};

// Button Styles
const styles = {
  button: {
    backgroundColor: "#FF6B6B",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
    marginTop: "10px",
  },
};

export default Button;
