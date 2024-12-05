import "./Footer.css";

interface FooterProps {
  urlLogo: string;
  children: React.ReactNode;
  theme : "dark" | "light";
  handleThemeToChange : () => void;
}

const Footer = ({urlLogo, children, theme, handleThemeToChange}: FooterProps) => {
  return (
    <footer className="footer" style={{
      backgroundColor : theme === "dark" ? "black" : "lightgrey",
      color : theme === "dark" ? "black" : "lightgrey"
    }}>
      <div>{children}</div>
      <img src={urlLogo} alt="logo" className="logo" />
      <button
        onClick={handleThemeToChange}
        style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </footer>
  );
};

export default Footer;
