import "./footer.css";

interface FooterProps {
    urlLogo: string;
    children: React.ReactNode;
}

function Footer(props: FooterProps) {
    return (
        <footer className="footer">
            <img src={props.urlLogo} alt="logo" className="logo"/>
            <div>{props.children}</div>
        </footer>
    );
}

export default Footer;  