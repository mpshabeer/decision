import { SEO } from '../components/SEO';
import './LegalPage.css';

export const PrivacyPage = () => {
    return (
        <div className="legal-page">
            <SEO
                title="Privacy Policy | Decision Helper"
                description="Privacy policy for Decision Helper - Learn how we protect your privacy"
            />

            <div className="container">
                <div className="legal-content">
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last updated: January 2, 2026</p>

                    <section>
                        <h2>1. Information We Collect</h2>
                        <p>
                            Decision Helper is a privacy-first application. We do NOT collect, store, or transmit any personal information to our servers. All data is stored locally in your browser.
                        </p>
                    </section>

                    <section>
                        <h2>2. Local Storage</h2>
                        <p>
                            We use browser localStorage and cookies to save your preferences and tool settings, including:
                        </p>
                        <ul>
                            <li>Theme preference (light/dark mode)</li>
                            <li>Sound settings (enabled/disabled)</li>
                            <li>Coin toss history (last 5 results)</li>
                            <li>Spin wheel custom items</li>
                            <li>Cookie consent preference</li>
                        </ul>
                        <p>
                            This data remains on your device and is never transmitted to our servers.
                        </p>
                    </section>

                    <section>
                        <h2>3. Third-Party Services</h2>
                        <p>
                            We may use Google AdSense to display advertisements. Google may use cookies and other tracking technologies. Please refer to{' '}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                Google's Privacy Policy
                            </a>{' '}
                            for more information.
                        </p>
                    </section>

                    <section>
                        <h2>4. Your Rights</h2>
                        <p>
                            You can clear all locally stored data at any time by clearing your browser's cache and cookies.
                        </p>
                    </section>

                    <section>
                        <h2>5. Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                        </p>
                    </section>

                    <section>
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy, please visit our <a href="/contact">Contact page</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
