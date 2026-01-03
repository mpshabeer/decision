import { DiceRoll } from '../components/DiceRoll';
import { SEO } from '../components/SEO';
import { AdBanner } from '../components/AdBanner';
import './ToolPage.css';

export const DiceRollPage = () => {
    return (
        <div className="tool-page">
            <SEO
                title="Dice Roll Online - Virtual 6-Sided Dice Roller | Decision Helper"
                description="Roll a virtual dice online with realistic animation. Perfect for games, RPG, and random number generation between 1-6."
                keywords="dice roll online, virtual dice, dice roller, roll dice, random dice, 1d6 roller, random dice generator, board game dice, virtual dice shaker, multiple dice roller"
            />

            <div className="container">
                <div className="tool-header">
                    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="28" height="28" rx="4" fill="url(#dice_gradient)" />
                            <circle cx="12" cy="12" r="2.5" fill="white" />
                            <circle cx="24" cy="12" r="2.5" fill="white" />
                            <circle cx="12" cy="24" r="2.5" fill="white" />
                            <circle cx="24" cy="24" r="2.5" fill="white" />
                            <defs>
                                <linearGradient id="dice_gradient" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F43F5E" />
                                    <stop offset="1" stopColor="#E11D48" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Dice Roll
                    </h1>
                    <p>Roll a virtual 6-sided dice</p>
                </div>

                <DiceRoll />
            </div>

            <AdBanner position="bottom" />
        </div>
    );
};
