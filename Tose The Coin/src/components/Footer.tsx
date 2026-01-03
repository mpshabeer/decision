import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Decision Helper</h3>
                        <p>Free online tools for making decisions quickly and fairly.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Tools</h4>
                        <ul className="footer-links">
                            <li><Link to="/coin-toss">Coin Toss</Link></li>
                            <li><Link to="/spin-wheel">Spin Wheel</Link></li>
                            <li><Link to="/dice-roll">Dice Roll</Link></li>
                            <li><Link to="/random-number">Random Number</Link></li>
                            <li><Link to="/yes-no">Yes / No</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul className="footer-links">
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/cookies">Cookie Policy</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Made With</h4>
                        <ul className="footer-links">
                            <li>⚛️ React</li>
                            <li>⚡ Vite</li>
                            <li>💜 Love</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Decision Helper. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
