import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdBanner } from '../components/AdBanner';
import './Home.css';

export const Home = () => {
    const tools = [
        {
            path: '/coin-toss',
            title: 'Coin Toss',
            icon: '🪙',
            description: 'Classic heads or tails decision maker with smooth flip animation',
            gradient: 'linear-gradient(135deg, #ffd700, #ffed4e)'
        },
        {
            path: '/spin-wheel',
            title: 'Spin Wheel',
            icon: '🎡',
            description: 'Customize your wheel with up to 10 options and let it decide',
            gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
        },
        {
            path: '/dice-roll',
            title: 'Dice Roll',
            icon: '🎲',
            description: 'Roll a virtual 6-sided dice with realistic animation',
            gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
        },
        {
            path: '/random-number',
            title: 'Random Number',
            icon: '🔢',
            description: 'Generate random numbers within your custom range',
            gradient: 'linear-gradient(135deg, #10b981, #3b82f6)'
        },
        {
            path: '/yes-no',
            title: 'Yes / No',
            icon: '❓',
            description: 'Simple yes or no answer for quick binary decisions',
            gradient: 'linear-gradient(135deg, #ec4899, #ef4444)'
        }
    ];

    return (
        <div className="home-page">
            <SEO
                title="Decision Helper - Free Online Tools | Coin Toss, Spin Wheel & More"
                description="Free online decision making tools including coin toss, spin wheel, dice roll, random number generator, and yes/no picker. No registration required. Fast and mobile-friendly."
                keywords="coin toss online, spin wheel decision, random picker online, dice roll online, yes no decision maker, decision helper, random number generator"
            />

            <section className="hero">
                <div className="container">
                    <h1 className="hero-title fade-in">
                        <span className="text-gradient">Decision Helper</span>
                    </h1>
                    <p className="hero-subtitle slide-in-left">
                        Free online tools to help you make decisions quickly and fairly
                    </p>
                    <div className="hero-features slide-in-right">
                        <span className="feature-badge">✨ No Sign Up</span>
                        <span className="feature-badge">⚡ Instant Results</span>
                        <span className="feature-badge">📱 Mobile Friendly</span>
                        <span className="feature-badge">🎨 Beautiful Design</span>
                    </div>
                </div>
            </section>

            <section className="tools-section">
                <div className="container">
                    <h2 className="section-title">Choose Your Tool</h2>
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <Link
                                key={tool.path}
                                to={tool.path}
                                className="tool-card card-interactive"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="tool-icon" style={{ background: tool.gradient }}>
                                    <span>{tool.icon}</span>
                                </div>
                                <h3 className="tool-title">{tool.title}</h3>
                                <p className="tool-description">{tool.description}</p>
                                <div className="tool-cta">
                                    Try it now →
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Why Choose Decision Helper?</h2>
                    <div className="features-grid">
                        <div className="feature-item fade-in">
                            <div className="feature-icon">🚀</div>
                            <h3>Fast & Simple</h3>
                            <p>No complicated setup. Just click and get your result instantly.</p>
                        </div>
                        <div className="feature-item fade-in">
                            <div className="feature-icon">🔒</div>
                            <h3>Privacy First</h3>
                            <p>No account needed. Your data stays in your browser.</p>
                        </div>
                        <div className="feature-item fade-in">
                            <div className="feature-icon">🎯</div>
                            <h3>Fair & Random</h3>
                            <p>True randomness using Math.random() for unbiased results.</p>
                        </div>
                        <div className="feature-item fade-in">
                            <div className="feature-icon">💫</div>
                            <h3>Beautiful Design</h3>
                            <p>Modern, smooth animations that make decisions fun.</p>
                        </div>
                    </div>
                </div>
            </section>

            <AdBanner position="bottom" />

            <section className="cta-section">
                <div className="container text-center">
                    <h2>Ready to Make a Decision?</h2>
                    <p>Choose a tool above and let fate decide!</p>
                </div>
            </section>
        </div>
    );
};
