import { useState, useRef, useEffect } from 'react';
import { storage, STORAGE_KEYS } from '../utils/storage';
import { soundManager } from '../utils/sounds';
import './SpinWheel.css';

interface WheelItem {
    id: number;
    text: string;
    color: string;
}

const defaultColors = [
    '#EF4444', // Red
    '#F97316', // Orange
    '#F59E0B', // Amber
    '#84CC16', // Lime
    '#10B981', // Emerald
    '#06B6D4', // Cyan
    '#3B82F6', // Blue
    '#6366F1', // Indigo
    '#8B5CF6', // Violet
    '#D946EF', // Fuchsia
    '#F43F5E', // Rose
    '#64748B'  // Slate
];

export const SpinWheel = () => {
    const [items, setItems] = useState<WheelItem[]>(() => {
        const saved = storage.getItem<WheelItem[]>(STORAGE_KEYS.WHEEL_ITEMS);
        return saved || [
            { id: 1, text: 'Option 1', color: defaultColors[0] },
            { id: 2, text: 'Option 2', color: defaultColors[1] },
            { id: 3, text: 'Option 3', color: defaultColors[2] },
            { id: 4, text: 'Option 4', color: defaultColors[3] }
        ];
    });
    const [newItemText, setNewItemText] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const [editingId, setEditingId] = useState<number | null>(null);

    // Physics state
    const rotationRef = useRef(0);
    const velocityRef = useRef(0);
    const requestRef = useRef<number | undefined>(undefined);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    // Initial draw
    useEffect(() => {
        drawWheel(rotationRef.current);
    }, [items]);

    useEffect(() => {
        storage.setItem(STORAGE_KEYS.WHEEL_ITEMS, items);
    }, [items]);

    // ... (keep drawWheel and adjustBrightness same)

    const drawWheel = (currentRotation: number) => {
        const canvas = canvasRef.current;
        if (!canvas || items.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        // Reduce radius slightly to make room for the rim
        const outerRadius = Math.min(centerX, centerY) - 20;
        const radius = outerRadius - 15; // Actual wheel radius
        const anglePerItem = (2 * Math.PI) / items.length;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((currentRotation * Math.PI) / 180);

        // 1. Draw Outer Rim / Casing
        const rimGradient = ctx.createRadialGradient(0, 0, radius, 0, 0, outerRadius);
        rimGradient.addColorStop(0, '#334155');
        rimGradient.addColorStop(1, '#1e293b');

        ctx.beginPath();
        ctx.arc(0, 0, outerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = rimGradient;
        ctx.fill();
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 2. Draw Segments
        items.forEach((item, index) => {
            const startAngle = index * anglePerItem - Math.PI / 2;
            const endAngle = startAngle + anglePerItem;

            const gradient = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius);
            gradient.addColorStop(0, item.color);
            gradient.addColorStop(1, adjustBrightness(item.color, -20));

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();

            // Segment Border
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Text
            ctx.save();
            ctx.rotate(startAngle + anglePerItem / 2);
            ctx.textAlign = 'right'; // Align text to the outer edge
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 18px "Inter", sans-serif';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetY = 1;
            // Position text
            ctx.fillText(item.text, radius - 20, 6);
            ctx.restore();
        });

        // 3. Draw Pegs (Bolts) on the Rim
        const totalPegs = 24; // Fixed number of pegs or dependent on items
        const pegAngleStep = (2 * Math.PI) / totalPegs;

        for (let i = 0; i < totalPegs; i++) {
            ctx.save();
            const angle = i * pegAngleStep;
            const pegX = Math.cos(angle) * (radius + 7.5); // Middle of the rim
            const pegY = Math.sin(angle) * (radius + 7.5);

            ctx.beginPath();
            ctx.arc(pegX, pegY, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#FCD34D'; // Gold
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 2;
            ctx.fill();
            ctx.restore();
        }

        ctx.restore();

        // 4. Draw Center Hub (Fancy)
        const hubGradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 35);
        hubGradient.addColorStop(0, '#f8fafc');
        hubGradient.addColorStop(0.5, '#e2e8f0');
        hubGradient.addColorStop(1, '#94a3b8');

        // Outer Hub Shadow
        ctx.beginPath();
        ctx.arc(centerX, centerY, 38, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fill();

        // Main Hub
        ctx.beginPath();
        ctx.arc(centerX, centerY, 35, 0, 2 * Math.PI);
        ctx.fillStyle = hubGradient;
        ctx.fill();
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner Hub Detail (Star/Nut)
        ctx.beginPath();
        ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
        ctx.fillStyle = '#e2e8f0';
        ctx.fill();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Center Point
        ctx.beginPath();
        ctx.arc(centerX, centerY, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#F59E0B';
        ctx.fill();
    };

    const adjustBrightness = (color: string, amount: number) => {
        const hex = color.replace('#', '');
        const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
        const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
        const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    const handleAddItem = () => {
        if (!newItemText.trim()) return;

        if (editingId !== null) {
            // Update existing item
            const updatedItems = items.map(item =>
                item.id === editingId ? { ...item, text: newItemText.trim() } : item
            );
            setItems(updatedItems);
            setEditingId(null);
            setNewItemText('');
            soundManager.playClick();
        } else {
            // Add new item
            if (items.length >= 10) return;

            // Find the first color that isn't currently used
            const usedColors = new Set(items.map(i => i.color));
            const distinctColor = defaultColors.find(c => !usedColors.has(c)) || defaultColors[items.length % defaultColors.length];

            const newItem: WheelItem = {
                id: Date.now(),
                text: newItemText.trim(),
                color: distinctColor
            };
            setItems([...items, newItem]);
            setNewItemText('');
            soundManager.playClick();
        }
    };

    const startEdit = (item: WheelItem) => {
        setNewItemText(item.text);
        setEditingId(item.id);
        // Focus input optionally
    };

    const cancelEdit = () => {
        setNewItemText('');
        setEditingId(null);
    };

    const removeItem = (id: number) => {
        if (items.length <= 2) {
            // Optional: alert("Minimum 2 items required!");
            return;
        }
        if (editingId === id) cancelEdit();
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        soundManager.playClick();
    };

    const spinWheel = () => {
        if (isSpinning || items.length === 0) return;

        setIsSpinning(true);
        setResult(null);
        soundManager.playWheelSpin();

        // 1. Set Initial Velocity (High random speed)
        // Between 20 and 40 degrees per frame
        velocityRef.current = Math.random() * 20 + 20;

        // 2. Start Animation Loop
        animate();
    };

    const animate = () => {
        // Friction coefficient (0.985 - 0.99)
        const friction = 0.985;

        velocityRef.current *= friction;
        rotationRef.current += velocityRef.current;

        // Draw the current frame
        drawWheel(rotationRef.current);

        // Stop condition
        if (velocityRef.current < 0.05) {
            velocityRef.current = 0;
            finishSpin();
        } else {
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    const finishSpin = () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);

        soundManager.playWheelStop();
        setIsSpinning(false);

        // Calculate Result from Final Rotation
        // Normalize rotation to [0, 360)
        let rot = rotationRef.current % 360;
        // Ensure positive rotation
        if (rot < 0) rot += 360;

        // The pointer is fixed at the top (270 degrees in canvas coords)
        let hitAngleOnWheel = (270 - rot + 360) % 360;
        let relativeToItem0Start = (hitAngleOnWheel - 270 + 360) % 360;

        const degPerItem = 360 / items.length;
        const winningIndex = Math.floor(relativeToItem0Start / degPerItem);
        const safeIndex = Math.min(items.length - 1, Math.max(0, winningIndex));

        setResult(items[safeIndex].text);
    };

    return (
        <div className="spin-wheel-container">
            <div className="wheel-section">
                {/* Realistic fixed needle/pointer at the top - like real spinner wheels */}
                <div className="wheel-needle">
                    <svg width="60" height="80" viewBox="0 0 60 80" style={{
                        position: 'absolute',
                        top: '10px', // Adjusted to overlap wheel for realism
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                        filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.4))'
                    }}>
                        <defs>
                            <linearGradient id="pointerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e11d48" />
                                <stop offset="50%" stopColor="#f43f5e" />
                                <stop offset="100%" stopColor="#e11d48" />
                            </linearGradient>
                            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#94a3b8" />
                                <stop offset="50%" stopColor="#cbd5e1" />
                                <stop offset="100%" stopColor="#94a3b8" />
                            </linearGradient>
                        </defs>

                        {/* Housing/Mounting bracket */}
                        <path
                            d="M 15 10 L 45 10 L 40 25 L 20 25 Z"
                            fill="url(#metalGradient)"
                            stroke="#475569"
                            strokeWidth="1"
                        />

                        {/* Hinge Pin */}
                        <circle cx="30" cy="20" r="4" fill="#334155" />

                        {/* The Pointer (Asymmetric) */}
                        <g transform="rotate(0, 30, 20)">
                            {/* Main body - tapering down */}
                            <path
                                d="M 22 20 L 38 20 L 30 75 Z"
                                fill="url(#pointerGradient)"
                                stroke="#9f1239"
                                strokeWidth="1"
                                strokeLinejoin="round"
                            />
                            {/* Center detail */}
                            <path d="M 30 20 L 30 65" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                        </g>

                    </svg>
                </div>

                <canvas
                    ref={canvasRef}
                    width={400}
                    height={400}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        aspectRatio: '1/1'
                    }}
                    className="wheel-canvas"
                />
            </div>

            <div className="wheel-controls">
                <button
                    className="btn btn-primary btn-lg"
                    onClick={spinWheel}
                    disabled={isSpinning || items.length === 0}
                    aria-label={isSpinning ? "Wheel is spinning" : "Spin the wheel"}
                >
                    {isSpinning ? '🎡 Spinning...' : '🎡 Spin Wheel'}
                </button>
            </div>

            {result && !isSpinning && (
                <div ref={resultRef} className="result-display fade-in">
                    <h2 className="result-text">🎉 {result}</h2>
                    <p>The wheel selected: {result}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '10px' }}>
                        Disclaimer: Result is fully autogenerated for entertainment only.
                    </p>
                </div>
            )}

            <div className="items-manager">
                <h3>Wheel Items ({items.length}/10)</h3>

                <div className="add-item-form">
                    <input
                        type="text"
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                        placeholder={editingId ? "Update item text..." : "Enter new item..."}
                        maxLength={20}
                        disabled={!editingId && items.length >= 10}
                    />
                    <div className="button-group">
                        {editingId && (
                            <button
                                className="btn btn-outline"
                                onClick={cancelEdit}
                            >
                                Cancel
                            </button>
                        )}
                        <button
                            className="btn btn-secondary"
                            onClick={handleAddItem}
                            disabled={!newItemText.trim() || (!editingId && items.length >= 10)}
                        >
                            {editingId ? 'Update' : 'Add'}
                        </button>
                    </div>
                </div>

                <div className="items-list">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`item-chip ${editingId === item.id ? 'editing' : ''}`}
                            style={{
                                borderLeftColor: item.color,
                                cursor: 'pointer',
                                opacity: isSpinning ? 0.7 : 1
                            }}
                            onClick={() => !isSpinning && startEdit(item)}
                            title="Click to edit"
                        >
                            <span className="item-text">
                                {item.text}
                                {editingId === item.id && <span style={{ fontSize: '0.7em', paddingLeft: '5px' }}>(Editing)</span>}
                            </span>
                            {items.length > 2 && (
                                <button
                                    className="item-remove"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeItem(item.id);
                                    }}
                                    aria-label="Remove item"
                                    disabled={isSpinning}
                                >
                                    ×
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="info-section">
                <p className="info-text">
                    💡 <b>Tip:</b> Click any item to rename it. You must have at least 2 items to spin.
                </p>
            </div>
        </div>
    );
};
