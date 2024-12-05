import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MaybeAuthenticUser } from "../../types";

interface NavbarProps {
  authenticatedUser : MaybeAuthenticUser,
  clearUser : () => void;
}

const NavBar = ({authenticatedUser, clearUser} : NavbarProps) => {
  const navigate = useNavigate();

  if(authenticatedUser){
    return <nav>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/add-pizza")}>Ajouter une pizza</button>
            <button onClick={() => clearUser()}>Se déconnecter</button>
          </nav>
  }

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/login")}>Se connecter</button>
      <button onClick={() => navigate("/register")}>S'inscrire</button>
    </nav>
  );
}

export default NavBar;
