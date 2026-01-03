import { useState, useRef, useEffect } from 'react';
import { storage, STORAGE_KEYS } from '../utils/storage';
import { soundManager } from '../utils/sounds';
import './CoinToss.css';

type CoinResult = 'heads' | 'tails';

export const CoinToss = () => {
    const [result, setResult] = useState<CoinResult | null>(null);
    const [isFlipping, setIsFlipping] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [history, setHistory] = useState<CoinResult[]>(
        storage.getItem<CoinResult[]>(STORAGE_KEYS.COIN_HISTORY) || []
    );
    const resultRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to result when it appears
    useEffect(() => {
        if (result && !isFlipping && resultRef.current) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }, [result, isFlipping]);

    const flipCoin = () => {
        if (isFlipping) return;

        setIsFlipping(true);
        setResult(null); // Clear previous result text during flip
        soundManager.playCoinFlip();

        // 1. Determine Result Deterministically
        const newResult: CoinResult = Math.random() < 0.5 ? 'heads' : 'tails';

        // 2. Calculate Rotation
        // We want to rotate at least 5 times (1800 degrees)
        // Heads = 0deg mod 360
        // Tails = 180deg mod 360
        const spins = 5;
        const baseRotation = spins * 360;

        // Current rotation mod 360
        const currentMod = rotation % 360;

        // Target mod: 0 for heads, 180 for tails
        const targetMod = newResult === 'heads' ? 0 : 180;

        // Calculate difference to reach target forward
        let diff = targetMod - currentMod;
        if (diff < 0) diff += 360;

        // Add extra full spins + the difference
        const totalAdd = baseRotation + diff;
        const newRotation = rotation + totalAdd;

        setRotation(newRotation);

        // 3. Wait for animation to finish
        setTimeout(() => {
            setResult(newResult);

            // Update history (keep last 5)
            const newHistory = [newResult, ...history.slice(0, 4)];
            setHistory(newHistory);
            storage.setItem(STORAGE_KEYS.COIN_HISTORY, newHistory);

            soundManager.playCoinLand();
            setIsFlipping(false);
        }, 3000); // Match CSS transition duration
    };

    const clearHistory = () => {
        setHistory([]);
        storage.removeItem(STORAGE_KEYS.COIN_HISTORY);
        soundManager.playClick();
    };

    return (
        <div className="coin-toss-container">
            <div className="coin-stage">
                <div
                    className={`coin-3d ${isFlipping ? 'flipping' : ''}`}
                    style={{ transform: `rotateY(${rotation}deg)` }}
                >
                    <div className="coin-face front">
                        <div className="face-ring"></div>
                        <div className="face-content">
                            <span className="face-icon">♕</span>
                            <span className="face-text">HEADS</span>
                        </div>
                        <div className="shine"></div>
                    </div>
                    <div className="coin-face back">
                        <div className="face-ring"></div>
                        <div className="face-content">
                            <span className="face-icon">★</span>
                            <span className="face-text">TAILS</span>
                        </div>
                        <div className="shine"></div>
                    </div>
                    {/* Multi-layered side for thickness illusion */}
                    <div className="side"></div>
                    <div className="side-pattern"></div>
                </div>
            </div>

            <div className="coin-controls">
                <button
                    className="btn btn-primary btn-lg"
                    onClick={flipCoin}
                    disabled={isFlipping}
                    aria-label={isFlipping ? "Coin is flipping" : "Flip the coin"}
                >
                    {isFlipping ? 'Paying...' : 'Flip Coin'}
                </button>
            </div>

            {result && !isFlipping && (
                <div ref={resultRef} className="result-display fade-in">
                    <h2 className="result-text">
                        {result === 'heads' ? '♕ HEADS' : '★ TAILS'}
                    </h2>
                    <p>The coin landed on {result}!</p>
                </div>
            )}

            {history.length > 0 && (
                <div className="history-section fade-in">
                    <div className="history-header">
                        <h3>Recent Results</h3>
                        <button className="btn-clear" onClick={clearHistory}>
                            Clear
                        </button>
                    </div>
                    <ul className="history-list">
                        {history.map((item, index) => (
                            <li key={index} className={`history-item ${item}`}>
                                {item === 'heads' ? '♕' : '★'} {item.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
