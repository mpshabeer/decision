import { YesNo } from '../components/YesNo';
import { SEO } from '../components/SEO';
import { AdBanner } from '../components/AdBanner';
import './ToolPage.css';

export const YesNoPage = () => {
    return (
        <div className="tool-page">
            <SEO
                title="Yes or No Picker - Simple Decision Maker | Decision Helper"
                description="Get a quick yes or no answer for your decisions. Simple, fast, and unbiased. Perfect for binary choices."
                keywords="yes or no, yes no picker, decision maker, yes no generator, binary decision, yes or no oracle, tarot yes no, decide for me, should i do it, random answer generator"
            />

            <div className="container">
                <div className="tool-header">
                    <h1>❓ Yes / No Picker</h1>
                    <p>Get a simple yes or no answer</p>
                </div>

                <YesNo />
            </div>

            <AdBanner position="bottom" />
        </div>
    );
};
