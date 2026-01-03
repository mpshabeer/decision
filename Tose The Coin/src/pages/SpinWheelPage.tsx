import { SpinWheel } from '../components/SpinWheel';
import { SEO } from '../components/SEO';
import { AdBanner } from '../components/AdBanner';
import './ToolPage.css';

export const SpinWheelPage = () => {
    return (
        <div className="tool-page">
            <SEO
                title="Spin Wheel Decision Maker - Free Custom Picker | Decision Helper"
                description="Create a custom spin wheel with up to 10 options. Let the wheel decide for you! Perfect for games, contests, and group decisions."
                keywords="spin wheel, decision wheel, random picker, wheel of names, custom wheel spinner, random name picker, prize wheel, roulette wheel online, giveaway picker, classroom spinner, wheel of fortune online"
            />

            <div className="container">
                <div className="tool-header">
                    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="url(#wheel_gradient)" />
                            <path d="M18 18L18 4A14 14 0 0 1 32 18H18Z" fill="#8B5CF6" />
                            <path d="M18 18L32 18A14 14 0 0 1 18 32V18Z" fill="#EC4899" />
                            <path d="M18 18L18 32A14 14 0 0 1 4 18H18Z" fill="#F59E0B" />
                            <path d="M18 18L4 18A14 14 0 0 1 18 4V18Z" fill="#10B981" />
                            <circle cx="18" cy="18" r="4" fill="white" />
                            <defs>
                                <linearGradient id="wheel_gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F3F4F6" />
                                    <stop offset="1" stopColor="#E5E7EB" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Spin Wheel
                    </h1>
                    <p>Customize your wheel and let it choose</p>
                </div>

                <SpinWheel />
            </div>

            <AdBanner position="bottom" />
        </div>
    );
};
