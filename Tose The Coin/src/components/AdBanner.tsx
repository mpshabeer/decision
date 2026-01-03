import './AdBanner.css';

interface AdBannerProps {
    position: 'top' | 'bottom';
    className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = (/* { position, className = '' } */) => {
    // Currently hidden for deployment until AdSense is approved
    return null;

    /* 
    // Uncomment this when you are ready to add ads
    return (
        <div className={`ad-banner ad-banner-${position} ${className}`}>
            <div className="ad-placeholder">
                <span className="ad-label">Advertisement</span>
            </div>
             <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                 data-ad-slot="XXXXXXXXXX"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>
    );
    */
};
