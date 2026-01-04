import { useEffect } from 'react';
import './AdBanner.css';

interface AdBannerProps {
    position: 'top' | 'bottom';
    className?: string;
}

// Declare adsbygoogle for TypeScript
declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export const AdBanner: React.FC<AdBannerProps> = ({ position, className = '' }) => {
    useEffect(() => {
        try {
            // Push ad to adsbygoogle
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className={`ad-banner ad-banner-${position} ${className}`}>
            <div className="ad-label">Advertisement</div>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8996242924537978"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};
