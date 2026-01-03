import { SEO } from '../components/SEO';
import './LegalPage.css';

export const ContactPage = () => {
    return (
        <div className="legal-page">
            <SEO
                title="Contact Us | Decision Helper"
                description="Get in touch with the Decision Helper team"
            />

            <div className="container">
                <div className="legal-content">
                    <h1>Contact Us</h1>

                    <section>
                        <h2>Get in Touch</h2>
                        <p>
                            We'd love to hear from you! Whether you have questions, feedback, or suggestions for new features, feel free to reach out.
                        </p>
                    </section>

                    <section>
                        <h2>Support</h2>
                        <p>
                            For support questions or technical issues, please provide as much detail as possible about the problem you're experiencing, including:
                        </p>
                        <ul>
                            <li>Which tool you're using</li>
                            <li>Your browser and device type</li>
                            <li>Steps to reproduce the issue</li>
                            <li>Any error messages you see</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Feature Requests</h2>
                        <p>
                            Have an idea for a new decision-making tool or feature? We're always looking to improve! Let us know what you'd like to see.
                        </p>
                    </section>

                    <section>
                        <h2>Business Inquiries</h2>
                        <p>
                            For business partnerships, advertising opportunities, or other professional inquiries, please reach out with details about your proposal.
                        </p>
                    </section>

                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email</h3>
                            <p><a href="mailto:mpshabeersecondry@gmail.com">mpshabeersecondry@gmail.com</a></p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">💬</div>
                            <h3>Social Media</h3>
                            <p>Follow us for updates and tips</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">ℹ️</div>
                            <h3>About</h3>
                            <p>Decision Helper provides free, easy-to-use tools for everyday decisions. We aim to keep these tools fast and registration-free.</p>
                        </div>
                    </div>

                    <section>
                        <h2>Privacy</h2>
                        <p>
                            Any information you provide will be used solely to respond to your inquiry. See our{' '}
                            <a href="/privacy">Privacy Policy</a> for more details.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
