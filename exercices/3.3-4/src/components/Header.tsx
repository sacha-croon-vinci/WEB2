import "./Header.css";


interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
  theme : "dark" | "light";
}

const Header = ({urlLogo, children , theme}: HeaderProps) => {
  return (
    <footer className="header" style={{
      backgroundColor : theme === "dark" ? "black" : "lightgrey",
      color : theme === "dark" ? "black" : "lightgrey"
    }}>
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
    </footer>
  );
};

export default Header;
