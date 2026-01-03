// SEO component for managing document head
import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    schema?: object;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'Decision Helper - Free Online Tools for Coin Toss, Spin Wheel & More',
    description = 'Free online decision making tools including coin toss, spin wheel, dice roll, random number generator, and yes/no picker. No registration required. Fast and mobile-friendly.',
    keywords = 'coin toss online, spin wheel decision, random picker online, dice roll online, yes no decision maker, decision helper, random number generator, rng tools, probability games, online decision tools, chance games, free tools',
    ogImage = '/og-image.png',
    canonical,
    schema
}) => {
    useEffect(() => {
        // Update title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Standard meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:type', 'website', true);
        updateMetaTag('og:image', ogImage, true);

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        // Canonical URL
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!link) {
                link = document.createElement('link');
                link.rel = 'canonical';
                document.head.appendChild(link);
            }
            link.href = canonical;
        }

        // JSON-LD Schema
        if (schema) {
            let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
            if (!script) {
                script = document.createElement('script');
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.text = JSON.stringify(schema);
        }
    }, [title, description, keywords, ogImage, canonical, schema]);

    return null;
};
