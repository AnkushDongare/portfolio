import { Link } from "react-router-dom";
import FooterSocialIcons from "./FooterSocialIcons";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer" id="footer">
            <div>
                <p>This Website is Designed and Developed by <Link to="/">Ankush Dongre</Link></p>
            </div>
            <div>
                <div className="footer-info">
                    <p>Copyright {year}</p>
                    <p>Web Developer and UX Designer</p>
                    <p>Email: <a href="mailto:dongreankush52@gmail.com">dongreankush52@gmail.com</a></p>
                </div>
                <div className="footer-links">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="social-links">
                    <FooterSocialIcons />
                </div>
            </div>

        </footer>
    )
}

export default Footer