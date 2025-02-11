import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("home");

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #1f1c2c, #928dab)",
      color: "white",
      transition: "all 0.5s ease-in-out",
    },
    nav: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      background: "#ff6f61",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      background: "#ff3b2f",
    },
    content: {
      marginTop: "20px",
      fontSize: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to My Website</h1>
      <nav style={styles.nav}>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseOut={(e) =>
            (e.target.style.background = styles.button.background)
          }
          onClick={() => setPage("home")}
        >
          Home
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseOut={(e) =>
            (e.target.style.background = styles.button.background)
          }
          onClick={() => setPage("about")}
        >
          About
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseOut={(e) =>
            (e.target.style.background = styles.button.background)
          }
          onClick={() => setPage("contact")}
        >
          Contact
        </button>
      </nav>
      <div style={styles.content}>
        {page === "home" && <p>Welcome to the homepage! Enjoy your stay.</p>}
        {page === "about" && <p>About us: We create amazing experiences.</p>}
        {page === "contact" && <p>Contact us at: contact@example.com</p>}
      </div>
    </div>
  );
};