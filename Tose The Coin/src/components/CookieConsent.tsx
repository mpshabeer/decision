import { useState, useEffect } from 'react';
import { storage, STORAGE_KEYS } from '../utils/storage';
import './CookieConsent.css';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = storage.getItem(STORAGE_KEYS.COOKIE_CONSENT);
        if (consent === null) {
            // Show banner after a short delay
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        storage.setItem(STORAGE_KEYS.COOKIE_CONSENT, 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        storage.setItem(STORAGE_KEYS.COOKIE_CONSENT, 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-content">
                <div className="cookie-text">
                    <h3>🍪 Cookie Notice</h3>
                    <p>
                        We use cookies and localStorage to save your preferences and tool settings.
                        No personal data is collected. Read our{' '}
                        <a href="/cookies" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
                        {' '}and{' '}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button className="btn btn-primary" onClick={handleAccept}>
                        Accept
                    </button>
                    <button className="btn btn-outline" onClick={handleDecline}>
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
};
