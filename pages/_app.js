import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <a
    href="https://wa.me/918085890545?text=Hi%20I%20want%20to%20know%20more%20about%20Brain%20Library"
      target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "12px 16px",
          borderRadius: "50px",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          textDecoration: "none",
          zIndex: 1000
        }}
      >
        WhatsApp
      </a>
    </>
  );
}
