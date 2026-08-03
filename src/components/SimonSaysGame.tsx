import React, { useEffect, useRef, useState } from 'react';

const colorKeys = ['green', 'red', 'yellow', 'blue'] as const;
type ColorKey = typeof colorKeys[number];

const tileClasses: Record<ColorKey, { idle: string; active: string; label: string; activeLabel: string; hoverLabel: string }> = {
    green: {
        idle: 'border-emerald-500 text-emerald-500 hover:bg-emerald-500',
        active: 'bg-emerald-500 border-emerald-500 animate-pulse',
        label: 'text-emerald-500 dark:text-emerald-400',
        activeLabel: 'text-emerald-100 dark:text-emerald-100',
        hoverLabel: 'group-hover:text-emerald-100 dark:group-hover:text-emerald-100',
    },
    red: {
        idle: 'border-rose-500 text-rose-500 hover:bg-rose-500',
        active: 'bg-rose-500 border-rose-500 animate-pulse',
        label: 'text-rose-500 dark:text-rose-400',
        activeLabel: 'text-rose-100 dark:text-rose-100',
        hoverLabel: 'group-hover:text-rose-100 dark:group-hover:text-rose-100',
    },
    yellow: {
        idle: 'border-amber-400 text-amber-500 hover:bg-amber-400',
        active: 'bg-amber-400 border-amber-400 animate-pulse',
        label: 'text-amber-500 dark:text-amber-300',
        activeLabel: 'text-amber-50 dark:text-amber-50',
        hoverLabel: 'group-hover:text-amber-50 dark:group-hover:text-amber-50',
    },
    blue: {
        idle: 'border-sky-500 text-sky-500 hover:bg-sky-500',
        active: 'bg-sky-500 border-sky-500 animate-pulse',
        label: 'text-sky-500 dark:text-sky-400',
        activeLabel: 'text-sky-100 dark:text-sky-100',
        hoverLabel: 'group-hover:text-sky-100 dark:group-hover:text-sky-100',
    },
};

const colorConfig: Record<ColorKey, { label: string; border: string }> = {
    green: {
        label: 'Green',
        border: 'border-emerald-500',
    },
    red: {
        label: 'Red',
        border: 'border-rose-500',
    },
    yellow: {
        label: 'Yellow',
        border: 'border-amber-400',
    },
    blue: {
        label: 'Blue',
        border: 'border-sky-500',
    },
};

const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

export default function SimonSaysGame() {
    const [sequence, setSequence] = useState<ColorKey[]>([]);
    const [userSequence, setUserSequence] = useState<ColorKey[]>([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [acceptingInput, setAcceptingInput] = useState(false);
    const [message, setMessage] = useState('');
    const [messageTone, setMessageTone] = useState<'neutral' | 'success' | 'error'>('neutral');
    const [activeColor, setActiveColor] = useState<ColorKey | null>(null);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const flashColor = async (color: ColorKey) => {
        setActiveColor(color);
        await sleep(320);
        setActiveColor((current) => (current === color ? null : current));
        await sleep(140);
    };

    const revealSequence = async (nextSequence: ColorKey[]) => {
        setAcceptingInput(false);
        setUserSequence([]);
        setMessage('Watch the pattern.');
        setMessageTone('neutral');

        for (let index = 0; index < nextSequence.length; index += 1) {
            await flashColor(nextSequence[index]);
            await sleep(180);
        }

        setAcceptingInput(true);
        setMessage('Repeat the pattern.');
        setMessageTone('neutral');
    };

    const startGame = async () => {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
        }

        setGameStarted(true);
        setUserSequence([]);
        setMessage('');
        setMessageTone('neutral');

        const firstSequence = [colorKeys[Math.floor(Math.random() * colorKeys.length)]];
        setSequence(firstSequence);
        await revealSequence(firstSequence);
    };

    const nextRound = async () => {
        const nextSequence = [...sequence, colorKeys[Math.floor(Math.random() * colorKeys.length)]];
        setSequence(nextSequence);
        await revealSequence(nextSequence);
    };

    const endGame = (failedColor?: ColorKey) => {
        setAcceptingInput(false);
        setGameStarted(false);
        setMessage(failedColor ? `Wrong color. It was ${colorConfig[failedColor].label}.` : 'Try again.');
        setMessageTone('error');

        timeoutRef.current = window.setTimeout(() => {
            setSequence([]);
            setUserSequence([]);
            setMessage('Press start to begin.');
            setMessageTone('neutral');
        }, 1800);
    };

    const handleColorClick = async (color: ColorKey) => {
        if (!gameStarted || !acceptingInput) {
            return;
        }

        const nextUserSequence = [...userSequence, color];
        setUserSequence(nextUserSequence);
        setMessage('');

        await flashColor(color);

        const currentIndex = nextUserSequence.length - 1;
        if (nextUserSequence[currentIndex] !== sequence[currentIndex]) {
            endGame(sequence[currentIndex]);
            return;
        }

        if (nextUserSequence.length === sequence.length) {
            setAcceptingInput(false);
            setMessage(`Congrats! You passed level ${sequence.length}.`);
            setMessageTone('success');
            timeoutRef.current = window.setTimeout(() => {
                setMessage('');
                void nextRound();
            }, 1300);
        }
    };

    return (
        <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-[2rem]  p-5 lg:p-6">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <p className="mt-4 min-h-[1.5rem] text-sm font-medium text-black dark:text-white hover:bg-regal">Press start, then repeat the colors.</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => void startGame()}
                        className="rounded-full bg-black px-4 py-2 uppercase text-white dark:bg-white dark:text-black dark:hover:text-white bg-gradient-to-r hover:to-regal-blue hover:from-violet-500"
                    >
                        {gameStarted ? 'Restart' : 'Start'}
                    </button>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    {colorKeys.map((color) => {
                        const config = colorConfig[color];
                        const tile = tileClasses[color];
                        const isActive = activeColor === color;
                        const isIdle = !gameStarted;

                        return (
                            <button
                                key={color}
                                type="button"
                                onClick={() => void handleColorClick(color)}
                                className={`group aspect-square rounded-[1.5rem] border-2  ${config.border} ${isActive ? `${tile.active} scale-[1.03] bg-${color}` : `${tile.idle} bg-transparent hover:scale-[1.01]`} ${isIdle ? 'cursor-default' : 'cursor-pointer'} transition-all duration-150 active:scale-[0.98]`}
                                aria-label={`${config.label} button`}
                            >
                                <span className={`flex h-full w-full items-end justify-start p-4 text-left text-xs font-black uppercase tracking-[0.35em] ${isActive ? tile.activeLabel : `${tile.label} ${tile.hoverLabel}`}`}>
                                    {config.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <div className={`mt-4 min-h-[3rem] px-4 py-3 text-sm flex items-center ${messageTone === 'success' ? 'text-green-600 dark:text-green-400' : messageTone === 'error' ? 'text-red-600 dark:text-red-400' : 'text-black dark:text-white'}`}>
                    {message || ' '}
                </div>
            </div>
        </div>
    );
}