import { CoinToss } from '../components/CoinToss';
import { SEO } from '../components/SEO';
import { AdBanner } from '../components/AdBanner';
import './ToolPage.css';

export const CoinTossPage = () => {
    return (
        <div className="tool-page">
            <SEO
                title="Coin Toss Online - Free Heads or Tails Flipper | Decision Helper"
                description="Flip a virtual coin online with realistic animation. Perfect for making quick decisions between two choices. Free, no login required."
                keywords="coin toss online, flip coin, heads or tails, coin flipper, virtual coin toss, toss a coin, digital coin flip, probability of heads, coin flip simulator, heads or tails online"
            />

            <div className="container">
                <div className="tool-header">
                    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="url(#coin_gradient)" />
                            <circle cx="18" cy="18" r="14" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">$</text>
                            <defs>
                                <linearGradient id="coin_gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F59E0B" />
                                    <stop offset="1" stopColor="#D97706" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Coin Toss
                    </h1>
                    <p>Let the coin decide between two options</p>
                </div>

                <CoinToss />
            </div>

            <AdBanner position="bottom" />
        </div>
    );
};
