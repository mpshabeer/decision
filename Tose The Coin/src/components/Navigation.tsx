import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { storage, STORAGE_KEYS } from '../utils/storage';
import { soundManager } from '../utils/sounds';
import './Navigation.css';

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(storage.getItem<string>(STORAGE_KEYS.THEME) || 'light');
    const [soundEnabled, setSoundEnabled] = useState(storage.getItem<boolean>(STORAGE_KEYS.SOUND_ENABLED) ?? true);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        storage.setItem(STORAGE_KEYS.THEME, theme);
    }, [theme]);

    useEffect(() => {
        soundManager.setEnabled(soundEnabled);
        storage.setItem(STORAGE_KEYS.SOUND_ENABLED, soundEnabled);
    }, [soundEnabled]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
        soundManager.playBeep(600, 0.05);
    };

    const toggleSound = () => {
        setSoundEnabled(prev => !prev);
        if (!soundEnabled) {
            soundManager.playBeep(440, 0.1);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { path: '/', label: 'Home', icon: '🏠' },
        {
            path: '/coin-toss',
            label: 'Coin Toss',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="14" fill="currentColor" fontWeight="bold">$</text>
                </svg>
            )
        },
        { path: '/spin-wheel', label: 'Spin Wheel', icon: '🎡' },
        { path: '/dice-roll', label: 'Dice Roll', icon: '🎲' },
        { path: '/random-number', label: 'Random Number', icon: '🔢' },
        { path: '/yes-no', label: 'Yes/No', icon: '❓' }
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <span className="logo-icon">🎯</span>
                        <span className="logo-text">Decision Helper</span>
                    </Link>

                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                <span className="nav-icon">{link.icon}</span>
                                <span>{link.label}</span>
                            </Link>
                        ))}

                        <div className="nav-actions">
                            <button
                                className={`btn-icon theme-toggle ${theme === 'dark' ? 'active' : ''}`}
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {theme === 'dark' ? '☀️' : '🌙'}
                            </button>

                            <button
                                className={`btn-icon sound-toggle ${soundEnabled ? 'active' : ''}`}
                                onClick={toggleSound}
                                aria-label="Toggle sound"
                                title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
                            >
                                {soundEnabled ? '🔊' : '🔇'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
