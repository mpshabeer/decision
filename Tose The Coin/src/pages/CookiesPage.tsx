import { SEO } from '../components/SEO';
import './LegalPage.css';

export const CookiesPage = () => {
    return (
        <div className="legal-page">
            <SEO
                title="Cookie Policy | Decision Helper"
                description="Cookie policy for Decision Helper - Understanding how we use cookies"
            />

            <div className="container">
                <div className="legal-content">
                    <h1>Cookie Policy</h1>
                    <p className="last-updated">Last updated: January 2, 2026</p>

                    <section>
                        <h2>1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files stored on your device that help websites remember your preferences and improve your experience.
                        </p>
                    </section>

                    <section>
                        <h2>2. Cookies We Use</h2>

                        <h3>Essential Cookies</h3>
                        <p>These cookies are necessary for the website to function:</p>
                        <ul>
                            <li><strong>decision-helper-cookie-consent</strong> - Stores your cookie consent preference</li>
                        </ul>

                        <h3>Preference Cookies</h3>
                        <p>These cookies remember your choices:</p>
                        <ul>
                            <li><strong>decision-helper-theme</strong> - Your theme preference (light/dark mode)</li>
                            <li><strong>decision-helper-sound</strong> - Your sound preference (on/off)</li>
                        </ul>

                        <h3>Functional Cookies</h3>
                        <p>These cookies enable enhanced functionality:</p>
                        <ul>
                            <li><strong>decision-helper-wheel-items</strong> - Your custom spin wheel items</li>
                            <li><strong>decision-helper-coin-history</strong> - Recent coin toss results</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Third-Party Cookies</h2>
                        <p>
                            We may use Google AdSense, which may set cookies for advertising purposes. You can manage these through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2>4. Managing Cookies</h2>
                        <p>
                            You can control and delete cookies through your browser settings. Note that disabling cookies may affect the functionality of this website.
                        </p>
                    </section>

                    <section>
                        <h2>5. Contact Us</h2>
                        <p>
                            For questions about our cookie policy, please visit our <a href="/contact">Contact page</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
