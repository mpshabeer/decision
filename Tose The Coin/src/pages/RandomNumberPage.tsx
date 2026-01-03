import { RandomNumber } from '../components/RandomNumber';
import { SEO } from '../components/SEO';
import { AdBanner } from '../components/AdBanner';
import './ToolPage.css';

export const RandomNumberPage = () => {
    return (
        <div className="tool-page">
            <SEO
                title="Random Number Generator - Free Online Tool | Decision Helper"
                description="Generate random numbers within any range. Perfect for raffles, lotteries, games, and numerical decisions. Free and instant."
                keywords="random number generator, random number, number picker, random generator online, rng generator, random integer generator, pick a number, lottery number generator, random sequence, true random number"
            />

            <div className="container">
                <div className="tool-header">
                    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#rnd_gradient)" />
                            <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.9" />
                            <circle cx="28" cy="28" r="3" fill="white" fillOpacity="0.9" />
                            <circle cx="28" cy="12" r="3" fill="white" fillOpacity="0.9" />
                            <circle cx="12" cy="28" r="3" fill="white" fillOpacity="0.9" />
                            <circle cx="20" cy="20" r="3" fill="white" fillOpacity="0.9" />
                            <defs>
                                <linearGradient id="rnd_gradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#8B5CF6" />
                                    <stop offset="1" stopColor="#EC4899" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Random Number Generator
                    </h1>
                    <p>Generate a random number within your range</p>
                </div>

                <RandomNumber />
            </div>

            <AdBanner position="bottom" />
        </div>
    );
};
