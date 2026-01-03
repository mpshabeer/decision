import { SEO } from '../components/SEO';
import { AdBanner } from '../components/AdBanner';
import './LegalPage.css';

export const TermsPage = () => {
    return (
        <div className="legal-page">
            <SEO
                title="Terms of Service - Decision Helper"
                description="Terms and conditions for using Decision Helper tools."
                canonical="https://decisionhelper.com/terms"
            />

            <div className="container">
                <h1>Terms of Service</h1>
                <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Decision Helper ("we", "our", or "us"), you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Decision Helper's website for personal, non-commercial transitory viewing only.
                    </p>
                </section>

                <section>
                    <h2>3. Disclaimer</h2>
                    <p>
                        The materials on Decision Helper's website are provided on an 'as is' basis. Decision Helper makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                    <p>
                        The tools provided on this website (Coin Toss, Spin Wheel, etc.) are for entertainment purposes only and should not be used for serious decision-making involving financial stakes or legal matters.
                    </p>
                </section>

                <section>
                    <h2>4. Limitations</h2>
                    <p>
                        In no event shall Decision Helper or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Decision Helper's website.
                    </p>
                </section>

                <section>
                    <h2>5. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </section>
            </div>

            <AdBanner position="bottom" />
        </div>
    );
};
