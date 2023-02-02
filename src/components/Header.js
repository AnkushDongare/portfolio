import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">Ankush Dongre</Link>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header