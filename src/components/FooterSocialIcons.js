import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const FooterSocialIcons = () => {
    return (
        <ul className="social-icons">
            <li><Link to="/" aria-label="Ankush's Email"><FaEnvelope /></Link></li>
            <li><Link to="/" aria-label="Link to Ankush's Facebook Profile page"><FaFacebookSquare /></Link></li>
            <li><Link to="/" aria-label="Link to Ankush's Twitter Profile page"><FaTwitterSquare /></Link></li>
            <li><Link to="/" aria-label="Link to Ankush's LinkedIn Profile page"><FaLinkedin /></Link></li>
            <li><Link to="/" aria-label="Link to Ankush's GitHub Profile page"><FaGithubSquare /></Link></li>
        </ul>
    )
}

export default FooterSocialIcons