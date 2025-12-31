// Next, React
import React from 'react';
import { FC, useState} from 'react';
import pkg from '../../../package.json';

// ❌ DO NOT EDIT ANYTHING ABOVE THIS LINE

export const HomeView: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* HEADER – fake Scrolly feed tabs */}
      <header className="flex items-center justify-center border-b border-white/10 py-3">
        <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px]">
          <button className="rounded-full bg-slate-900 px-3 py-1 font-semibold text-white">
            Feed
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Casino
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Kids
          </button>
        </div>
      </header>

      {/* MAIN – central game area (phone frame) */}
      <main className="flex flex-1 items-center justify-center px-4 py-3">
        <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
          {/* Fake “feed card” top bar inside the phone */}
          <div className="flex items-center justify-between px-3 py-2 text-[10px] text-slate-400">
            <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] uppercase tracking-wide">
              Scrolly Game
            </span>
            <span className="text-[9px] opacity-70">#NoCodeJam</span>
          </div>

          {/* The game lives INSIDE this phone frame */}
          <div className="flex h-[calc(100%-26px)] flex-col items-center justify-start px-3 pb-3 pt-1">
            <GameSandbox />
          </div>
        </div>
      </main>

      {/* FOOTER – tiny version text */}
      <footer className="flex h-5 items-center justify-center border-t border-white/10 px-2 text-[9px] text-slate-500">
        <span>Scrolly · v{pkg.version}</span>
      </footer>
    </div>
  );
};

// ✅ THIS IS THE ONLY PART YOU EDIT FOR THE JAM
// Replace this entire GameSandbox component with the one AI generates.
// Keep the name `GameSandbox` and the `FC` type.

const GameSandbox: FC = () => {
  const MAX_LEVEL = 10;
  const MAX_LIVES = 6;

  const wordsByLevel = [
    [
      { word: 'PIXEL', hint: 'Screen dot' }, { word: 'CODE', hint: 'Program' }, { word: 'DATA', hint: 'Info' }, { word: 'BYTE', hint: '8 bits' }, { word: 'LINK', hint: 'Connection' }, { word: 'ROOT', hint: 'Superuser' }, { word: 'SHELL', hint: 'CLI' }
    ],
    [
      { word: 'REACT', hint: 'UI Library' }, { word: 'NODE', hint: 'Runtime' }, { word: 'LOOP', hint: 'Repeat' }, { word: 'API', hint: 'Interface' }, { word: 'JSON', hint: 'Data format' }, { word: 'STACK', hint: 'LIFO' }, { word: 'QUERY', hint: 'Request' }
    ],
    [
      { word: 'STYLE', hint: 'CSS' }, { word: 'FONT', hint: 'Typeface' }, { word: 'GRID', hint: 'Layout' }, { word: 'FLEX', hint: 'Layout model' }, { word: 'DOM', hint: 'Tree structure' }, { word: 'SVG', hint: 'Vector graphic' }, { word: 'ICON', hint: 'Symbol' }
    ],
    [
      { word: 'BUILD', hint: 'Construct' }, { word: 'SHIP', hint: 'Deploy' }, { word: 'TEST', hint: 'Verify' }, { word: 'DEBUG', hint: 'Find bugs' }, { word: 'MERGE', hint: 'Combine branches' }, { word: 'PULL', hint: 'Fetch from remote' }, { word: 'PUSH', hint: 'Send to remote' }
    ],
    [
      { word: 'CLOUD', hint: 'Remote servers' }, { word: 'HOST', hint: 'A server' }, { word: 'PROXY', hint: 'Intermediary' }, { word: 'CACHE', hint: 'Temp storage' }, { word: 'DNS', hint: 'Address book' }, { word: 'PORT', hint: 'Gateway' }
    ],
    [
      { word: 'TOKEN', hint: 'A coin' }, { word: 'BLOCK', hint: 'Chain part' }, { word: 'HASH', hint: 'Digest' }, { word: 'NONCE', hint: 'Number once' }, { word: 'MINER', hint: 'Validates blocks' }, { word: 'GAS', hint: 'Fee' }, { word: 'LEDGER', hint: 'Record book' }
    ],
    [
      { word: 'SMART', hint: 'Intelligent' }, { word: 'LOGIC', hint: 'Reasoning' }, { word: 'MATH', hint: 'Numbers' }, { word: 'ALGO', hint: 'Algorithm' }, { word: 'FUNC', hint: 'Function' }, { word: 'VAR', hint: 'Variable' }, { word: 'CONST', hint: 'Constant' }
    ],
    [
      { word: 'GAME', hint: 'Play' }, { word: 'SCORE', hint: 'Points' }, { word: 'LEVEL', hint: 'Stage' }, { word: 'QUEST', hint: 'A mission' }, { word: 'USER', hint: 'Player' }, { word: 'ITEM', hint: 'Object' }, { word: 'GUILD', hint: 'A team' }
    ],
    [
      { word: 'WORLD', hint: 'Earth' }, { word: 'SPACE', hint: 'The void' }, { word: 'STAR', hint: 'A sun' }, { word: 'MOON', hint: 'Satellite' }, { word: 'COMET', hint: 'Icy body' }, { word: 'ORBIT', hint: 'The path' }, { word: 'GALAXY', hint: 'Star system' }
    ],
    [
      { word: 'SUPER', hint: 'Great' }, { word: 'POWER', hint: 'Strength' }, { word: 'HERO', hint: 'Savior' }, { word: 'ULTRA', hint: 'Extreme' }, { word: 'ELITE', hint: 'The best' }, { word: 'NINJA', hint: 'Stealthy warrior' }, { word: 'CYBORG', hint: 'Half-machine' }
    ]
  ];

  const bossWords = [
    { word: 'ENCRYPTION', hint: 'Scrambling' }, { word: 'FIREWALL', hint: 'Security' }, { word: 'DATABASE', hint: 'Storage' }, { word: 'PROTOCOL', hint: 'Rules' }, { word: 'ALGORITHM', hint: 'Logic' }, { word: 'INTERFACE', hint: 'Boundary' }, { word: 'MAINFRAME', hint: 'Server' }, { word: 'BANDWIDTH', hint: 'Speed' }, { word: 'BACKBONE', hint: 'Core' }, { word: 'ETHERNET', hint: 'Cable' }
  ];

  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'MENU' | 'PLAYING' | 'WON' | 'LOST' | 'VICTORY'>('MENU');
  const [highScore, setHighScore] = useState(0);
  
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [guessed, setGuessed] = useState<string[]>([]);
  const [lives, setLives] = useState(MAX_LIVES);
  const [timeLeft, setTimeLeft] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [particles, setParticles] = useState<{id: number, x: number, y: number, vx: number, vy: number, color: string, life: number}[]>([]);
  const [revealedWord, setRevealedWord] = useState('');
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [bgParticles, setBgParticles] = useState<{id: number, x: number, y: number, vx: number, vy: number}[]>([]);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  // 🎵 CUSTOM SOUND REF
  const customAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const bgMusicRef = React.useRef<HTMLAudioElement | null>(null);
  const [streak, setStreak] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [gameMode, setGameMode] = useState<'NORMAL' | 'DAILY' | 'SUDDEN_DEATH' | 'HARDCORE' | 'ZEN' | 'TIME_ATTACK'>('NORMAL');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [isTimeFrozen, setIsTimeFrozen] = useState(false);
  const freezeTimeoutRef = React.useRef<any>(null);
  const [isDoublePoints, setIsDoublePoints] = useState(false);
  const doublePointsTimeoutRef = React.useRef<any>(null);
  const [hackerText, setHackerText] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [credits, setCredits] = useState(0);
  const [upgrades, setUpgrades] = useState({
    extraLives: 0,
    cheaperHints: 0,
    longerFreeze: 0
  });
  const [prestige, setPrestige] = useState(0);
  const [stats, setStats] = useState({ gamesPlayed: 0, wordsHacked: 0 });
  const [showStats, setShowStats] = useState(false);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [miniGameBarPos, setMiniGameBarPos] = useState(0);
  const [miniGameTarget, setMiniGameTarget] = useState({ start: 0, width: 0 });
  const miniGameDirectionRef = React.useRef(1);
  const miniGameReqRef = React.useRef<number>();
  const [showShop, setShowShop] = useState(false);
  const processedGameOver = React.useRef(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [isTutorial, setIsTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [bossQueue, setBossQueue] = useState<{word: string, hint: string}[]>([]);
  const [secretInput, setSecretInput] = useState('');
  const [nightMode, setNightMode] = useState(false);
  const [showModeSelect, setShowModeSelect] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const newsHeadlines = [
    "SYSTEM BREACH DETECTED IN SECTOR 7G...",
    "NEW ENCRYPTION PROTOCOLS RELEASED...",
    "ZERO-DAY EXPLOIT FOUND IN KERNEL...",
    "WHITE HAT HACKERS RECRUITING...",
    "AI OVERLORD TAKES CONTROL OF TOASTER...",
    "BITCOIN MINERS CAUSE POWER OUTAGE...",
    "STACK OVERFLOW DETECTED...",
    "404 ERROR: REALITY NOT FOUND..."
  ];

  const ACHIEVEMENTS = [
    { id: 'first_hack', icon: '🔓', title: 'Script Kiddie', desc: 'Complete your first hack' },
    { id: 'high_score_1000', icon: '🚀', title: 'Overclocker', desc: 'Score over 1000 points' },
    { id: 'perfect_hack', icon: '💎', title: 'Zero Day', desc: 'Hack a level with 0 mistakes' },
    { id: 'streak_master', icon: '🔥', title: 'Hotfix', desc: 'Reach a 10x streak' },
    { id: 'speed_demon', icon: '⚡', title: 'Speed Demon', desc: 'Hack a level in under 5s' },
    { id: 'security_breach', icon: '💀', title: 'Root Access', desc: 'Defeat a security boss' },
    { id: 'secret_code', icon: '🕵️', title: 'Insider', desc: 'Enter the secret code' }
  ];

  const addLog = (msg: string) => {
    setLogs(prev => [`> ${msg}`, ...prev].slice(0, 5));
  };

  // 🎵 LOAD CUSTOM SOUND
  React.useEffect(() => {
    // Put your file in the 'public' folder and update the name here (e.g. '/mysound.mp3')
    customAudioRef.current = new Audio('/win-sound.mp3');
    customAudioRef.current.volume = 0.5;
  }, []);

  React.useEffect(() => {
    const savedHighScore = localStorage.getItem('wordHackHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
    const savedCredits = localStorage.getItem('wordHackCredits');
    if (savedCredits) setCredits(parseInt(savedCredits, 10));

    const savedUpgrades = localStorage.getItem('wordHackUpgrades');
    if (savedUpgrades) setUpgrades(JSON.parse(savedUpgrades));

    const savedPrestige = localStorage.getItem('wordHackPrestige');
    if (savedPrestige) setPrestige(parseInt(savedPrestige, 10));

    const savedStats = localStorage.getItem('wordHackStats');
    if (savedStats) setStats(JSON.parse(savedStats));

    const savedAchievements = localStorage.getItem('wordHackAchievements');
    if (savedAchievements) setUnlockedAchievements(JSON.parse(savedAchievements));

    const savedNightMode = localStorage.getItem('wordHackNightMode');
    if (savedNightMode) setNightMode(JSON.parse(savedNightMode));
  }, []);

  React.useEffect(() => {
    return () => {
      if (freezeTimeoutRef.current) clearTimeout(freezeTimeoutRef.current);
      if (doublePointsTimeoutRef.current) clearTimeout(doublePointsTimeoutRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (gameState === 'PLAYING') {
      processedGameOver.current = false;
    }
    if ((gameState === 'LOST' || gameState === 'VICTORY') && !processedGameOver.current) {
      processedGameOver.current = true;
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('wordHackHighScore', score.toString());
      }
      if (score > 0) {
        setCredits(c => {
          const newCredits = c + score;
          localStorage.setItem('wordHackCredits', newCredits.toString());
          return newCredits;
        });
      }
    }
  }, [gameState, score, highScore]);

  const buyUpgrade = (type: keyof typeof upgrades, baseCost: number) => {
    const currentLevel = upgrades[type];
    const maxLevels = { extraLives: 5, cheaperHints: 3, longerFreeze: 5 };
    if (currentLevel >= maxLevels[type]) return;

    const cost = baseCost * (currentLevel + 1);
    
    if (credits >= cost) {
      setCredits(c => {
        const newCredits = c - cost;
        localStorage.setItem('wordHackCredits', newCredits.toString());
        return newCredits;
      });
      setUpgrades(u => {
        const newUpgrades = { ...u, [type]: u[type] + 1 };
        localStorage.setItem('wordHackUpgrades', JSON.stringify(newUpgrades));
        return newUpgrades;
      });
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const doPrestige = () => {
    if (credits < 2000) {
      playSound('wrong');
      return;
    }
    
    setCredits(0);
    localStorage.setItem('wordHackCredits', '0');
    
    setUpgrades({
      extraLives: 0,
      cheaperHints: 0,
      longerFreeze: 0
    });
    localStorage.setItem('wordHackUpgrades', JSON.stringify({
      extraLives: 0,
      cheaperHints: 0,
      longerFreeze: 0
    }));
    
    setPrestige(p => {
      const newPrestige = p + 1;
      localStorage.setItem('wordHackPrestige', newPrestige.toString());
      return newPrestige;
    });
    
    playSound('win');
    addLog(`SYSTEM PRESTIGE: RANK ${prestige + 1}`);
    setShowShop(false);
  };

  const unlockAchievement = (id: string) => {
    if (!unlockedAchievements.includes(id)) {
      const newUnlocked = [...unlockedAchievements, id];
      setUnlockedAchievements(newUnlocked);
      localStorage.setItem('wordHackAchievements', JSON.stringify(newUnlocked));
      addLog(`🏆 UNLOCKED: ${ACHIEVEMENTS.find(a => a.id === id)?.title}`);
      playSound('win');
    }
  };

  const playSound = (type: 'click' | 'correct' | 'wrong' | 'win' | 'lose' | 'hover') => {
    if (!soundEnabled) return;

    // 🎵 PLAY CUSTOM SOUND
    // Change 'win' to any other type (like 'correct' or 'lose') to use your file instead of the synth
    if (type === 'win' && customAudioRef.current) {
      customAudioRef.current.currentTime = 0;
      customAudioRef.current.play().catch(() => {});
      return; // Return early to skip the default synthesizer sound
    }

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    const now = ctx.currentTime;
    
    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'win') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554, now + 0.1);
      osc.frequency.setValueAtTime(659, now + 0.2);
      osc.frequency.setValueAtTime(880, now + 0.3);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'lose') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.linearRampToValueAtTime(50, now + 0.3);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(600, now + 0.05);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    }

    setTimeout(() => {
      if (ctx.state !== 'closed') ctx.close();
    }, 1000);
  };

  // Ambient Music
  React.useEffect(() => {
    // Initialize Audio if not already done
    if (!bgMusicRef.current) {
      bgMusicRef.current = new Audio('../bg-music.mp3');
      bgMusicRef.current.loop = true;
      bgMusicRef.current.volume = 0.3;
    }

    const playMusic = () => {
      if (musicEnabled && bgMusicRef.current?.paused) {
        bgMusicRef.current.play().catch(() => {});
      }
    };

    if (musicEnabled) playMusic();
    else bgMusicRef.current?.pause();

    // Handle autoplay policy by listening for interaction
    const handleInteraction = () => playMusic();
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      bgMusicRef.current?.pause();
    };
  }, [musicEnabled]);

  // Particle Loop
  React.useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        vy: p.vy + 0.1, // gravity
        life: p.life - 0.02
      })).filter(p => p.life > 0));
    }, 16);
    return () => clearInterval(interval);
  }, [particles.length]);

  // Background Particles & Mouse Interaction
  React.useEffect(() => {
    setBgParticles(Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1
    })));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgParticles(prev => prev.map(p => {
        let { x, y, vx, vy } = p;
        
        // Mouse repulsion
        const dx = x - mousePos.x;
        const dy = y - mousePos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 20) {
          const angle = Math.atan2(dy, dx);
          const force = 0.05;
          vx += Math.cos(angle) * force;
          vy += Math.sin(angle) * force;
        }

        x += vx;
        y += vy;
        
        // Wrap around
        if (x < -5) x = 105;
        if (x > 105) x = -5;
        if (y < -5) y = 105;
        if (y > 105) y = -5;

        return { ...p, x, y, vx, vy };
      }));
    }, 50);
    return () => clearInterval(interval);
  }, [mousePos]);

  // Hacker Typer Effect
  React.useEffect(() => {
    if (gameState !== 'MENU') {
      setHackerText('');
      return;
    }

    const snippets = [
      "import { System } from '@core/kernel';",
      "const breach = new System.Breach();",
      "await breach.connect('192.168.x.x');",
      "// Bypassing firewall...",
      "if (breach.securityLevel > 5) {",
      "  breach.inject('SQL_INJECTION');",
      "}",
      "downloading_assets...",
      "[####################] 100%",
      "decryption_key: 0x7F3A9C1B",
      "access_granted: true",
      "root@sys:~$ ./execute_payload.sh",
      "initializing_daemon...",
      "connection_established"
    ];

    let currentText = '';
    let lineIdx = 0;
    let charIdx = 0;
    
    const interval = setInterval(() => {
      if (Math.random() > 0.1) {
        const line = snippets[lineIdx % snippets.length];
        if (charIdx < line.length) {
          currentText += line[charIdx];
          charIdx++;
        } else {
          currentText += '\n';
          lineIdx++;
          charIdx = 0;
          const lines = currentText.split('\n');
          if (lines.length > 12) {
            currentText = lines.slice(lines.length - 12).join('\n');
          }
        }
        setHackerText(currentText);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [gameState]);

  // Matrix Rain Effect
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    const chars = '01';

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Fade to slate-900
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0ea5e933'; // Cyan with low opacity
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const createExplosion = () => {
    const colors = ['#22d3ee', '#34d399', '#f472b6', '#fbbf24', '#ffffff'];
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: Date.now() + i,
      x: 50,
      y: 40,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1.0
    }));
    setParticles(prev => [...prev, ...newParticles]);
  };

  // Timer
  React.useEffect(() => {
    let interval: any;
    if (gameState === 'PLAYING' && timeLeft > 0 && !isTimeFrozen && !showQuitConfirm && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            setGameState('LOST');
            playSound('lose');
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, timeLeft, isTimeFrozen, showQuitConfirm, isPaused]);

  // Keyboard
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameState !== 'PLAYING' || isPaused) return;
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) guess(key);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gameState, guessed, word, streak, isPaused]);

  // Typing effect for Game Over
  React.useEffect(() => {
    if (gameState === 'LOST') {
      setRevealedWord('');
      let i = 0;
      const interval = setInterval(() => {
        setRevealedWord(word.slice(0, i + 1));
        i++;
        if (i >= word.length) clearInterval(interval);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [gameState, word]);

  React.useEffect(() => {
    if (gameState === 'WON') {
      unlockAchievement('first_hack');
      if (mistakes === 0) unlockAchievement('perfect_hack');
      if (maxTime - timeLeft < 5) unlockAchievement('speed_demon');
      if ((level + 1) % 5 === 0) unlockAchievement('security_breach');
    }
  }, [gameState, mistakes, maxTime, timeLeft, level, unlockedAchievements]);

  React.useEffect(() => {
    if (score >= 1000) unlockAchievement('high_score_1000');
  }, [score, unlockedAchievements]);

  React.useEffect(() => {
    if (streak >= 10) unlockAchievement('streak_master');
  }, [streak, unlockedAchievements]);

  // Secret Code Listener
  React.useEffect(() => {
    if (gameState !== 'MENU') {
      setSecretInput('');
      return;
    }

    const handleSecretKey = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        setSecretInput(prev => (prev + key).slice(-10));
      }
    };

    window.addEventListener('keydown', handleSecretKey);
    return () => window.removeEventListener('keydown', handleSecretKey);
  }, [gameState]);

  React.useEffect(() => {
    if (secretInput.endsWith('HACKER')) {
      unlockAchievement('secret_code');
      createExplosion();
      setSecretInput('');
    }
  }, [secretInput, unlockedAchievements]);

  const startLevel = (lvl: number, mode: 'NORMAL' | 'DAILY' | 'SUDDEN_DEATH' | 'HARDCORE' | 'ZEN' | 'TIME_ATTACK' = gameMode) => {
    const isBoss = mode !== 'TIME_ATTACK' && (lvl + 1) % 5 === 0;
    const pool = isBoss ? bossWords : wordsByLevel[lvl % wordsByLevel.length];
    
    let pick;
    let newQueue: {word: string, hint: string}[] = [];

    if (mode === 'DAILY') {
      const now = new Date();
      const baseSeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate() + (lvl * 1337);
      
      if (isBoss) {
        const selectedIndices: number[] = [];
        for(let i=0; i<3; i++) {
            let rng = Math.abs(Math.sin(baseSeed + i) * 10000) % 1;
            let idx = Math.floor(rng * pool.length);
            while(selectedIndices.includes(idx)) idx = (idx + 1) % pool.length;
            selectedIndices.push(idx);
        }
        const selected = selectedIndices.map(i => pool[i]);
        pick = selected[0];
        newQueue = selected.slice(1);
      } else {
        const rng = Math.abs(Math.sin(baseSeed) * 10000) % 1;
        pick = pool[Math.floor(rng * pool.length)];
      }
    } else {
      if (isBoss) {
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        pick = selected[0];
        newQueue = selected.slice(1);
      } else {
        pick = pool[Math.floor(Math.random() * pool.length)];
      }
    }

    setWord(pick.word);
    setHint(pick.hint);
    setBossQueue(newQueue);
    setGuessed([]);
    setLives(mode === 'SUDDEN_DEATH' ? 1 : MAX_LIVES + upgrades.extraLives);
    setShowHint(mode === 'HARDCORE' || mode === 'ZEN');
    if (freezeTimeoutRef.current) clearTimeout(freezeTimeoutRef.current);
    setIsTimeFrozen(false);
    setMistakes(0);
    setIsPaused(false);
    setShowMiniGame(false);
    
    if (isBoss) {
      addLog('⚠️ BOSS BATTLE: 3 LAYERS');
      let time = 45;
      setTimeLeft(time);
      setMaxTime(time);
    } else {
      addLog(`INITIATING LEVEL ${lvl + 1}...`);
      if (mode === 'ZEN') {
        setTimeLeft(999);
        setMaxTime(999);
      } else if (mode !== 'TIME_ATTACK') {
        let time = Math.max(15, 30 - lvl);
        setTimeLeft(time);
        setMaxTime(time);
      }
    }
    
    setGameState('PLAYING');
    playSound('click');
  };

  const startGame = (mode: 'NORMAL' | 'DAILY' | 'SUDDEN_DEATH' | 'HARDCORE' | 'ZEN' | 'TIME_ATTACK' = 'NORMAL') => {
    setGameMode(mode);
    setIsTutorial(false);
    setLevel(0);
    setScore(0);
    setStreak(0);
    setLogs([]);
    setShowMiniGame(false);
    setShowModeSelect(false);
    setStats(s => {
      const newStats = { ...s, gamesPlayed: s.gamesPlayed + 1 };
      localStorage.setItem('wordHackStats', JSON.stringify(newStats));
      return newStats;
    });
    const logMessages = {
      NORMAL: 'SYSTEM BOOT SEQUENCE...',
      DAILY: 'DAILY PROTOCOL INITIATED...',
      SUDDEN_DEATH: 'SUDDEN DEATH ENGAGED...',
      HARDCORE: 'HARDCORE MODE ACTIVE...',
      ZEN: 'ZEN MODE INITIALIZED...',
      TIME_ATTACK: 'TIME ATTACK: 60 SECONDS!',
    };
    addLog(logMessages[mode]);

    if (mode === 'TIME_ATTACK') {
      setTimeLeft(60);
      setMaxTime(60);
    }
    startLevel(0, mode);
  };

  const startTutorial = () => {
    setGameMode('NORMAL');
    setLevel(0);
    setScore(0);
    setStreak(0);
    setLogs([]);
    setShowMiniGame(false);
    
    // Fixed tutorial word
    setWord('SYSTEM');
    setHint('Computer core');
    setGuessed([]);
    setLives(MAX_LIVES);
    setShowHint(false);
    
    if (freezeTimeoutRef.current) clearTimeout(freezeTimeoutRef.current);
    setMistakes(0);
    
    addLog('TRAINING SIMULATION INITIATED...');
    
    setTimeLeft(60);
    setMaxTime(60);
    
    setIsTutorial(true);
    setTutorialStep(0);
    setIsTimeFrozen(true);
    
    setGameState('PLAYING');
    playSound('click');
  };

  const nextTutorialStep = () => {
    if (tutorialStep < 3) {
      setTutorialStep(s => s + 1);
      playSound('click');
    } else {
      setIsTutorial(false);
      setIsTimeFrozen(false);
      addLog('TRAINING COMPLETE. SYSTEM LIVE.');
      playSound('correct');
    }
  };

  const handleLevelComplete = (multiplier: number) => {
    if (gameMode === 'TIME_ATTACK') {
      const newScore = score + 1;
      setScore(newScore);
      addLog(`WORD HACKED! +1`);
      startLevel(newScore, 'TIME_ATTACK');
      createExplosion();
      playSound('correct');
      return;
    }

    if (bossQueue.length > 0) {
      const next = bossQueue[0];
      setBossQueue(prev => prev.slice(1));
      setWord(next.word);
      setHint(next.hint);
      setGuessed([]);
      
      const timeBonus = 15;
      setTimeLeft(t => t + timeBonus);
      setMaxTime(t => t + timeBonus);
      
      addLog(`LAYER DECRYPTED. ${bossQueue.length} REMAINING.`);
      playSound('correct');
      createExplosion();
    } else {
      let bonus = 50 + (lives * 10) + timeLeft;
      if (mistakes === 0) {
        bonus += 100;
        addLog('PERFECT EXECUTION: +100');
      }
      setStats(s => {
        const newStats = { ...s, wordsHacked: s.wordsHacked + 1 };
        localStorage.setItem('wordHackStats', JSON.stringify(newStats));
        return newStats;
      });
      setScore(s => s + Math.round(bonus * multiplier));
      setGameState('WON');
      addLog('PASSWORD ACCEPTED');
      playSound('win');
      createExplosion();
    }
  };

  const revealLetter = () => {
    if (score < 50 || gameState !== 'PLAYING') return;
    
    const unguessed = word.split('').filter(char => !guessed.includes(char));
    if (unguessed.length === 0) return;
    
    const char = unguessed[Math.floor(Math.random() * unguessed.length)];
    const newGuessed = [...guessed, char];
    setGuessed(newGuessed);
    setScore(s => s - 50);
    setStreak(0);
    addLog(`REVEALED SEGMENT '${char}'`);
    playSound('correct');

    const allGuessed = word.split('').every(l => newGuessed.includes(l));
    if (allGuessed) {
      let multiplier = gameMode === 'SUDDEN_DEATH' ? 2 : 1;
      if (isDoublePoints) multiplier *= 2;
      multiplier *= (1 + (prestige * 0.2));
      handleLevelComplete(multiplier);
    }
  };

  const guess = (letter: string) => {
    if (guessed.includes(letter) || gameState !== 'PLAYING') return;
    
    const newGuessed = [...guessed, letter];
    setGuessed(newGuessed);

    if (!word.includes(letter)) {
      setStreak(0);
      addLog(`ERROR: SEGMENT '${letter}' CORRUPT`);
      playSound('wrong');
      setIsShaking(true);
      setShowFlash(true);
      setTimeout(() => setIsShaking(false), 500);
      setTimeout(() => setShowFlash(false), 150);
      const newLives = lives - 1;
      setLives(newLives);
      setMistakes(m => m + 1);
      if (newLives <= 0) {
        setGameState('LOST');
        addLog('CRITICAL SYSTEM FAILURE');
        playSound('lose');
      }
    } else {
      const newStreak = streak + 1;
      setStreak(newStreak);
      addLog(`DECRYPTED SEGMENT '${letter}'`);
      playSound('correct');
      let multiplier = gameMode === 'SUDDEN_DEATH' ? 2 : 1;
      if (isDoublePoints) multiplier *= 2;
      multiplier *= (1 + (prestige * 0.2));
      
      let points = 10 * newStreak * multiplier;
      if (newStreak > 0 && newStreak % 5 === 0) {
        points += 50 * multiplier;
        addLog(`STREAK BONUS: ${newStreak}x 🔥`);
      }
      setScore(s => s + Math.round(points));
      const allGuessed = word.split('').every(l => newGuessed.includes(l));
      if (allGuessed) {
        handleLevelComplete(multiplier);
      }
    }
  };

  const nextLevel = () => {
    if (level + 1 >= MAX_LEVEL) {
      setGameState('VICTORY');
      addLog('ROOT ACCESS GRANTED');
      playSound('win');
      createExplosion();
    } else {
      setLevel(l => l + 1);
      startLevel(level + 1);
    }
  };

  const skipLevel = () => {
    if (score < 100 || gameState !== 'PLAYING') return;
    
    setScore(s => s - 100);
    addLog('SYSTEM BYPASS INITIATED');
    playSound('click');
    nextLevel();
  };

  const startMiniGame = () => {
    if (showHint) return;
    setShowMiniGame(true);
    setMiniGameBarPos(0);
    miniGameDirectionRef.current = 1;
    const width = 20;
    const start = Math.random() * (90 - width) + 5;
    setMiniGameTarget({ start, width });
    playSound('click');
  };

  const handleHackAttempt = () => {
    const { start, width } = miniGameTarget;
    if (miniGameBarPos >= start - 2 && miniGameBarPos <= start + width + 2) {
      setShowHint(true);
      addLog(`HACK SUCCESSFUL: ${hint}`);
      playSound('correct');
    } else {
      addLog('HACK FAILED: ACCESS DENIED');
      playSound('wrong');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
    setShowMiniGame(false);
  };

  const shareOnTwitter = () => {
    const text = `I hacked the system with ${score} points in WordHack! 🕵️‍♂️💻\n\nCan you breach the firewall? #WordHack #ScrollyGame`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Mini Game Loop
  React.useEffect(() => {
    if (!showMiniGame) {
      if (miniGameReqRef.current) cancelAnimationFrame(miniGameReqRef.current);
      return;
    }

    let lastTime = performance.now();
    const speed = 0.1;

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      setMiniGameBarPos(prev => {
        let next = prev + (speed * delta * miniGameDirectionRef.current);
        if (next >= 100) {
          next = 100;
          miniGameDirectionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          miniGameDirectionRef.current = 1;
        }
        return next;
      });
      
      miniGameReqRef.current = requestAnimationFrame(animate);
    };
    miniGameReqRef.current = requestAnimationFrame(animate);
    return () => { if (miniGameReqRef.current) cancelAnimationFrame(miniGameReqRef.current); };
  }, [showMiniGame]);

  // UI Components
  const keyboard = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ];

  return (
    <div className={`w-full h-full ${nightMode ? 'bg-green-950 text-green-400' : 'bg-slate-900 text-white'} relative overflow-hidden flex flex-col ${isShaking ? 'animate-shake' : ''}`}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2px, -3px); }
          20% { transform: translate(3px, 2px); }
          30% { transform: translate(-3px, 3px); }
          40% { transform: translate(2px, -2px); }
          50% { transform: translate(-3px, 2px); }
          60% { transform: translate(2px, 1px); }
          70% { transform: translate(-1px, 3px); }
          80% { transform: translate(3px, -1px); }
          90% { transform: translate(-2px, -2px); }
        }
        .animate-glitch {
          animation: glitch 150ms infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          15%, 85% { opacity: 1; }
          50% { top: 100%; }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: ${nightMode ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 211, 238, 0.3)'};
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${nightMode ? 'rgba(34, 197, 94, 0.6)' : 'rgba(34, 211, 238, 0.6)'};
        }
      `}</style>
      {/* Background */}
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${nightMode ? 'from-green-900 via-black to-black' : 'from-slate-800 via-slate-950 to-black'} pointer-events-none`} />
      <div className={`absolute inset-0 bg-red-500/40 z-50 pointer-events-none transition-opacity duration-100 ${showFlash ? 'opacity-100' : 'opacity-0'}`} />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20 z-20" />
      
      {/* Hacker Typer Overlay */}
      {gameState === 'MENU' && (
        <div className="absolute inset-0 z-10 p-8 font-mono text-[10px] leading-4 text-green-500/20 overflow-hidden pointer-events-none whitespace-pre">
          {hackerText}
          <span className="animate-pulse">_</span>
        </div>
      )}
      
      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none z-50"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            opacity: p.life,
            transform: `scale(${p.life})`
          }}
        />
      ))}
      
      {/* Background Floating Particles */}
      {bgParticles.map(p => (
        <div
          key={p.id}
          className="absolute w-1 h-1 bg-slate-600 rounded-full pointer-events-none opacity-30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transition: 'all 0.05s linear'
          }}
        />
      ))}
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {gameState !== 'MENU' && (
            <button 
              onClick={() => {
                if (gameState === 'PLAYING') {
                  setShowQuitConfirm(true);
                  playSound('click');
                } else {
                  setGameState('MENU');
                  playSound('click');
                }
              }}
              className={`p-1.5 -ml-2 rounded-lg transition-colors ${nightMode ? 'text-green-500 hover:bg-green-900/50' : 'text-slate-400 hover:bg-white/10'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          )}
          {gameState === 'PLAYING' && (
            <button 
              onClick={() => { setIsPaused(true); playSound('click'); }}
              className={`p-1.5 rounded-lg transition-colors ${nightMode ? 'text-green-500 hover:bg-green-900/50' : 'text-slate-400 hover:bg-white/10'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </button>
          )}
          <div className="flex flex-col">
          <span className={`text-[10px] font-bold tracking-wider ${nightMode ? 'text-green-600' : 'text-slate-400'}`}>LEVEL {level + 1}</span>
          {(level + 1) % 5 === 0 && (
            <div className="flex flex-col items-start">
              <span className="text-[8px] font-mono font-bold text-red-400 tracking-widest bg-red-500/10 px-1 rounded w-fit mt-0.5 animate-pulse">
                BOSS BATTLE
              </span>
              <span className="text-[7px] text-red-300/80 font-mono mt-0.5">LAYER {3 - bossQueue.length}/3</span>
            </div>
          )}
          {gameMode === 'DAILY' && (
            <span className="text-[8px] font-mono font-bold text-yellow-400 tracking-widest bg-yellow-400/10 px-1 rounded w-fit mt-0.5">
              DAILY
            </span>
          )}
          {gameMode === 'SUDDEN_DEATH' && (
            <span className="text-[8px] font-mono font-bold text-red-500 tracking-widest bg-red-500/10 px-1 rounded w-fit mt-0.5">
              SUDDEN DEATH
            </span>
          )}
          {gameMode === 'HARDCORE' && (
            <span className="text-[8px] font-mono font-bold text-purple-500 tracking-widest bg-purple-500/10 px-1 rounded w-fit mt-0.5">
              HARDCORE
            </span>
          )}
          {gameMode === 'ZEN' && (
            <span className="text-[8px] font-mono font-bold text-blue-400 tracking-widest bg-blue-500/10 px-1 rounded w-fit mt-0.5">
              ZEN MODE
            </span>
          )}
          {gameMode === 'TIME_ATTACK' && (
            <span className="text-[8px] font-mono font-bold text-orange-400 tracking-widest bg-orange-500/10 px-1 rounded w-fit mt-0.5">
              TIME ATTACK
            </span>
          )}
          <div className="flex gap-0.5 mt-1">
            {Array.from({length: MAX_LIVES}).map((_, i) => (
              <div key={i} className={`h-1 w-3 rounded-full ${i < lives ? 'bg-rose-500' : (nightMode ? 'bg-green-900' : 'bg-slate-800')}`} />
            ))}
          </div>
        </div>
        </div>
        
        {gameMode !== 'ZEN' && gameMode !== 'TIME_ATTACK' && (
          <div className="flex flex-col items-center w-24">
            <div className={`text-xl font-mono font-bold ${isTimeFrozen ? 'text-blue-400 animate-pulse' : timeLeft < 5 ? 'text-red-500 animate-glitch' : (nightMode ? 'text-green-400' : 'text-white')}`}>
              {timeLeft}s
            </div>
            <div className={`w-full h-1.5 rounded-full mt-1 overflow-hidden border border-white/10 ${nightMode ? 'bg-green-900' : 'bg-slate-800'}`}>
              <div 
                className={`h-full transition-all duration-1000 ease-linear ${
                  isTimeFrozen ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]' :
                  timeLeft < 5 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : (nightMode ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]')
                }`}
                style={{ width: `${maxTime > 0 ? (timeLeft / maxTime) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex flex-col items-end">
          <span className={`text-[10px] font-bold tracking-wider ${nightMode ? 'text-green-600' : 'text-slate-400'}`}>SCORE</span>
          <span className={`text-sm font-bold ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>{score}</span>
          {streak > 1 && (
            <span className="text-[10px] font-bold text-yellow-400 animate-pulse">
              {streak}x STREAK 🔥
            </span>
          )}
        </div>
      </div>

      {/* Main Game Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start p-3 overflow-hidden">
        {gameState === 'PLAYING' && (
          <div className="flex flex-col items-center justify-between h-full w-full max-w-[300px]">
            
            {/* Visuals Section */}
            <div className="flex flex-col items-center w-full space-y-3">
              <div className={`h-24 w-full flex justify-center items-center relative shrink-0 rounded-2xl border border-white/5 ${nightMode ? 'bg-green-900/20' : 'bg-slate-900/30'}`}>
              <svg viewBox="0 0 100 150" className={`h-full stroke-[3px] fill-none ${isShaking ? 'animate-glitch stroke-red-500' : 'stroke-white'}`} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20,130 L80,130" className="stroke-white/20" />
                <g className={isShaking ? '' : 'animate-float'}>
                  {lives <= 5 && <rect x="30" y="60" width="40" height="50" rx="10" className={isShaking ? '' : 'stroke-cyan-500'} />}
                  {lives <= 4 && <path d="M30,60 A20,20 0 0,1 70,60" className={isShaking ? '' : 'stroke-purple-500'} />}
                  {lives <= 3 && <path d="M30,70 L10,60 M30,85 L10,85 M30,100 L10,110" className={isShaking ? '' : 'stroke-green-500'} />}
                  {lives <= 2 && <path d="M70,70 L90,60 M70,85 L90,85 M70,100 L90,110" className={isShaking ? '' : 'stroke-green-500'} />}
                  {lives <= 1 && <path d="M40,45 L30,20 M60,45 L70,20" className={isShaking ? '' : 'stroke-yellow-500'} />}
                  {lives <= 0 && <path d="M37,47 L43,53 M43,47 L37,53 M57,47 L63,53 M63,47 L57,53" className="stroke-red-500" />}
                </g>
              </svg>
            </div>

              {/* Progress & Word */}
              <div className="w-full shrink-0 space-y-3">
                {/* Bar */}
                <div className="w-full">
              <div className={`flex justify-between text-[9px] uppercase font-bold tracking-wider mb-1 ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>
                <span className="flex items-center gap-1">
                  <span className="animate-pulse">●</span> DECRYPTING...
                </span>
                <span>{Math.round((word.split('').filter(c => guessed.includes(c)).length / Math.max(1, word.length)) * 100)}%</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden border backdrop-blur-sm ${nightMode ? 'bg-green-900/50 border-green-500/20' : 'bg-slate-800/50 border-cyan-500/20'}`}>
                <div 
                  className={`h-full transition-all duration-300 ease-out relative ${nightMode ? 'bg-gradient-to-r from-green-500 to-green-700' : 'bg-gradient-to-r from-cyan-400 to-blue-500'}`}
                  style={{ width: `${(word.split('').filter(c => guessed.includes(c)).length / Math.max(1, word.length)) * 100}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
            </div>
                </div>

              <div className="flex flex-wrap justify-center gap-1.5 shrink-0">
              {word.split('').map((char, i) => (
                <div 
                  key={i} 
                    className={`w-9 h-11 flex items-center justify-center text-xl font-mono font-bold rounded-lg border transition-all duration-300 ${
                    guessed.includes(char) 
                      ? (nightMode ? 'bg-green-900/60 border-green-500/50 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.15)]' : 'bg-cyan-950/60 border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]')
                      : (nightMode ? 'bg-green-900/20 border-green-800/50 text-transparent' : 'bg-slate-800/30 border-slate-700/50 text-transparent')
                  }`}
                >
                  {guessed.includes(char) ? (gameMode === 'HARDCORE' ? '✱' : char) : ''}
                </div>
              ))}
            </div>
            </div>

            {/* Controls Section */}
            <div className="w-full flex flex-col gap-3 shrink-0">
              <div className={`grid grid-cols-3 gap-2 w-full p-2 rounded-xl border border-white/5 ${nightMode ? 'bg-green-900/20' : 'bg-slate-900/40'}`}>
              <button 
                onClick={() => {
                  const cost = Math.max(5, 20 - (upgrades.cheaperHints * 5));
                  if (!showHint && score >= cost && gameMode !== 'TIME_ATTACK') {
                    setScore(s => s - cost);
                    setShowHint(true);
                    addLog(`HINT ACCESSED: ${hint}`);
                    playSound('click');
                  }
                }}
                disabled={showHint || score < Math.max(5, 20 - (upgrades.cheaperHints * 5)) || gameMode === 'TIME_ATTACK'}
                  className={`w-full py-2 rounded-lg text-[9px] font-bold transition-all border ${
                  showHint 
                    ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300' 
                    : score >= 20 
                      ? (nightMode ? 'bg-green-900/50 border-white/5 text-green-400 hover:bg-green-800 hover:text-white' : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-white/20')
                      : (nightMode ? 'bg-green-950/50 border-transparent text-green-900 cursor-not-allowed' : 'bg-slate-900/50 border-transparent text-slate-700 cursor-not-allowed')
                }`}
              >
                {showHint ? hint : `HINT (-${Math.max(5, 20 - (upgrades.cheaperHints * 5))})`}
              </button>

              <button 
                onClick={startMiniGame}
                disabled={showHint || gameMode === 'TIME_ATTACK'}
                  className={`w-full py-2 rounded-lg text-[9px] font-bold transition-all border ${
                  showHint 
                    ? (nightMode ? 'bg-green-950/50 border-transparent text-green-900 cursor-not-allowed' : 'bg-slate-900/50 border-transparent text-slate-700 cursor-not-allowed')
                    : (nightMode ? 'bg-green-900/50 border-white/5 text-green-400 hover:bg-green-800 hover:text-white' : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-white/20')
                }`}
              >
                HACK (FREE)
              </button>

              <button 
                onClick={revealLetter}
                disabled={score < 50 || gameMode === 'TIME_ATTACK'}
                  className={`w-full py-2 rounded-lg text-[9px] font-bold transition-all border ${
                  score >= 50 
                    ? (nightMode ? 'bg-green-900/50 border-white/5 text-green-400 hover:bg-green-800 hover:text-white' : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-white/20')
                    : (nightMode ? 'bg-green-950/50 border-transparent text-green-900 cursor-not-allowed' : 'bg-slate-900/50 border-transparent text-slate-700 cursor-not-allowed')
                }`}
              >
                REVEAL (-50)
              </button>

              <button 
                onClick={() => {
                  if (!isTimeFrozen && score >= 30 && gameMode !== 'TIME_ATTACK') {
                    setScore(s => s - 30);
                    setIsTimeFrozen(true);
                    addLog('TIME FREEZE ACTIVATED');
                    playSound('click');
                    if (freezeTimeoutRef.current) clearTimeout(freezeTimeoutRef.current);
                    const duration = 5000 + (upgrades.longerFreeze * 2000);
                    freezeTimeoutRef.current = setTimeout(() => setIsTimeFrozen(false), duration);
                  }
                }}
                disabled={isTimeFrozen || score < 30 || gameMode === 'TIME_ATTACK'}
                  className={`w-full py-2 rounded-lg text-[9px] font-bold transition-all border ${
                  isTimeFrozen 
                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-300 animate-pulse' 
                    : score >= 30 
                      ? (nightMode ? 'bg-green-900/50 border-white/5 text-green-400 hover:bg-green-800 hover:text-white' : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-white/20')
                      : (nightMode ? 'bg-green-950/50 border-transparent text-green-900 cursor-not-allowed' : 'bg-slate-900/50 border-transparent text-slate-700 cursor-not-allowed')
                }`}
              >
                {isTimeFrozen ? 'FROZEN' : `FREEZE (-30)`}
              </button>

              <button 
                onClick={() => {
                  if (!isDoublePoints && score >= 40 && gameMode !== 'TIME_ATTACK') {
                    setScore(s => s - 40);
                    setIsDoublePoints(true);
                    addLog('DOUBLE POINTS ACTIVATED');
                    playSound('click');
                    if (doublePointsTimeoutRef.current) clearTimeout(doublePointsTimeoutRef.current);
                    doublePointsTimeoutRef.current = setTimeout(() => setIsDoublePoints(false), 10000);
                  }
                }}
                disabled={isDoublePoints || score < 40 || gameMode === 'TIME_ATTACK'}
                  className={`w-full py-2 rounded-lg text-[9px] font-bold transition-all border ${
                  isDoublePoints 
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-300 animate-pulse' 
                    : score >= 40 
                      ? (nightMode ? 'bg-green-900/50 border-white/5 text-green-400 hover:bg-green-800 hover:text-white' : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-white/20')
                      : (nightMode ? 'bg-green-950/50 border-transparent text-green-900 cursor-not-allowed' : 'bg-slate-900/50 border-transparent text-slate-700 cursor-not-allowed')
                }`}
              >
                {isDoublePoints ? '2X ACTIVE' : `DOUBLE (-40)`}
              </button>

              <button 
                onClick={skipLevel}
                disabled={score < 100 || gameMode === 'TIME_ATTACK'}
                  className={`w-full py-2 rounded-lg text-[9px] font-bold transition-all border col-span-3 ${
                  score >= 100 
                    ? (nightMode ? 'bg-green-900/50 border-white/5 text-green-400 hover:bg-green-800 hover:text-white' : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-white/20')
                    : (nightMode ? 'bg-green-950/50 border-transparent text-green-900 cursor-not-allowed' : 'bg-slate-900/50 border-transparent text-slate-700 cursor-not-allowed')
                }`}
              >
                SKIP LEVEL (-100)
              </button>
            </div>

              {/* Terminal Log */}
              <div className={`w-full font-mono text-[9px] leading-tight bg-black/40 p-2 rounded-lg border border-white/10 h-14 overflow-hidden flex flex-col-reverse shadow-inner relative select-none pointer-events-none ${nightMode ? 'text-green-600' : 'text-slate-400'}`}>
                <div className="absolute top-1 right-1 opacity-50">
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                </div>
              {logs.map((log, i) => (
                <div key={i} className={`${i === 0 ? (nightMode ? 'text-green-400 font-bold' : 'text-cyan-400 font-bold') : 'opacity-50'}`}>
                  {log}
                </div>
              ))}
            </div>
            </div>

            {/* Mini Game Overlay */}
            {showMiniGame && (
              <div className={`absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-200 ${nightMode ? 'bg-green-950/90' : 'bg-slate-950/90'}`}>
                <div className={`w-full max-w-[280px] border rounded-xl p-4 shadow-2xl ${nightMode ? 'bg-green-900 border-green-500/30' : 'bg-slate-900 border-cyan-500/30'}`}>
                  <div className="text-center mb-4">
                    <h3 className={`text-lg font-bold animate-pulse ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>SYSTEM BREACH</h3>
                    <p className={`text-[10px] ${nightMode ? 'text-green-600' : 'text-slate-400'}`}>STOP THE BAR IN THE ZONE</p>
                  </div>
                  
                  <div className={`relative h-8 rounded-full mb-6 overflow-hidden border border-white/10 ${nightMode ? 'bg-green-950' : 'bg-slate-800'}`}>
                    {/* Target Zone */}
                    <div 
                      className="absolute top-0 bottom-0 bg-yellow-500/30 border-x border-yellow-500/50"
                      style={{ 
                        left: `${miniGameTarget.start}%`, 
                        width: `${miniGameTarget.width}%` 
                      }}
                    />
                    {/* Moving Bar */}
                    <div 
                      className={`absolute top-0 bottom-0 w-1 shadow-[0_0_10px_rgba(34,211,238,0.8)] ${nightMode ? 'bg-green-400' : 'bg-cyan-400'}`}
                      style={{ left: `${miniGameBarPos}%` }}
                    />
                  </div>

                  <button 
                    onClick={handleHackAttempt}
                    className={`w-full py-3 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95 ${nightMode ? 'bg-green-600 hover:bg-green-500' : 'bg-cyan-600 hover:bg-cyan-500'}`}
                  >
                    EXECUTE
                  </button>
                </div>
              </div>
            )}

            {/* Tutorial Overlay */}
            {isTutorial && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-center animate-in fade-in">
                <div className={`border rounded-xl p-4 shadow-2xl max-w-[260px] ${nightMode ? 'bg-green-900 border-green-500' : 'bg-slate-900 border-cyan-500'}`}>
                  <h3 className={`text-lg font-bold mb-2 ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>
                    {tutorialStep === 0 && "WELCOME RECRUIT"}
                    {tutorialStep === 1 && "THE OBJECTIVE"}
                    {tutorialStep === 2 && "STAY ALIVE"}
                    {tutorialStep === 3 && "POWER UPS"}
                  </h3>
                  <p className={`text-xs mb-4 leading-relaxed ${nightMode ? 'text-green-200' : 'text-slate-300'}`}>
                    {tutorialStep === 0 && "This simulation will teach you the basics of system hacking."}
                    {tutorialStep === 1 && "Guess the password letter by letter. Use the hint if you get stuck."}
                    {tutorialStep === 2 && "You have limited lives and time. Don't get caught!"}
                    {tutorialStep === 3 && "Use credits to buy upgrades in the shop. Good luck."}
                  </p>
                  <button 
                    onClick={nextTutorialStep}
                    className={`w-full py-2 text-white font-bold rounded-lg text-xs shadow-lg transition-all active:scale-95 ${nightMode ? 'bg-green-600 hover:bg-green-500' : 'bg-cyan-600 hover:bg-cyan-500'}`}
                  >
                    {tutorialStep < 3 ? "NEXT >" : "START HACKING"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {gameState === 'MENU' && (
          <>
            <div className="w-full max-w-sm animate-in fade-in zoom-in duration-300 z-20">
              <div className={`relative border rounded-xl p-1 backdrop-blur-xl overflow-hidden ${nightMode ? 'bg-green-950/80 border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.2)]' : 'bg-slate-900/80 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]'}`}>
                
                {/* Tech Corners */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg z-20 ${nightMode ? 'border-green-400' : 'border-cyan-400'}`} />
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-lg z-20 ${nightMode ? 'border-green-400' : 'border-cyan-400'}`} />
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-lg z-20 ${nightMode ? 'border-green-400' : 'border-cyan-400'}`} />
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-lg z-20 ${nightMode ? 'border-green-400' : 'border-cyan-400'}`} />

                <div className={`relative z-10 flex flex-col items-center text-center p-6 rounded-lg ${nightMode ? 'bg-green-900/50' : 'bg-slate-950/50'}`}>
                  
                  {/* Animated Icon */}
                  <div className="mb-6 relative group cursor-default">
                    <div className={`absolute inset-0 blur-2xl rounded-full transition-all duration-500 ${nightMode ? 'bg-green-500/20 group-hover:bg-green-400/30' : 'bg-cyan-500/20 group-hover:bg-cyan-400/30'}`} />
                    <div className="relative h-24 w-24 flex items-center justify-center">
                      <div className={`absolute inset-0 border-2 rounded-full animate-spin duration-[3000ms] ${nightMode ? 'border-green-500/30 border-t-green-400' : 'border-cyan-500/30 border-t-cyan-400'}`} />
                      <div className="absolute inset-2 border-2 border-blue-500/30 rounded-full border-b-blue-400 animate-spin-reverse" />
                      
                      <svg viewBox="0 0 24 24" className={`w-10 h-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] ${nightMode ? 'text-green-100' : 'text-cyan-100'}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.571-4.182m1.566-1.566A8 8 0 0112 2.07" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-8 space-y-1">
                    <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 tracking-tighter drop-shadow-sm">
                      WORD<span className={nightMode ? 'text-green-500' : 'text-cyan-500'}>HACK</span>
                    </h1>
                    <div className={`flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.3em] ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${nightMode ? 'bg-green-500/50' : 'bg-cyan-500/50'}`} />
                      SYSTEM READY
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${nightMode ? 'bg-green-500/50' : 'bg-cyan-500/50'}`} />
                    </div>
                  </div>

                  {/* Menu Grid */}
                  <div className="w-full grid grid-cols-2 gap-3 mb-4">
                    <button 
                      onClick={() => { setShowModeSelect(true); playSound('click'); }}
                      onMouseEnter={() => playSound('hover')}
                      className={`col-span-2 relative group overflow-hidden rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg ${nightMode ? 'bg-gradient-to-r from-green-600 to-green-800 shadow-green-900/20' : 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-cyan-900/20'}`}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-4 flex items-center justify-center gap-3">
                        <span className="text-2xl animate-pulse">⚡</span>
                        <span className="font-bold text-white tracking-widest text-lg">INITIALIZE</span>
                      </div>
                    </button>

                    <button 
                      onClick={() => setShowShop(true)}
                      onMouseEnter={() => playSound('hover')}
                      className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/40 border-green-500/30 hover:bg-green-900/60' : 'bg-slate-800/40 border-cyan-500/30 hover:bg-slate-800/60'}`}
                    >
                      <span className="text-xl">🛒</span>
                      <span className={`text-[10px] font-bold tracking-wider ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>SHOP</span>
                    </button>

                    <button 
                      onClick={() => setShowStats(true)}
                      onMouseEnter={() => playSound('hover')}
                      className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/40 border-green-500/30 hover:bg-green-900/60' : 'bg-slate-800/40 border-cyan-500/30 hover:bg-slate-800/60'}`}
                    >
                      <span className="text-xl">📊</span>
                      <span className={`text-[10px] font-bold tracking-wider ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>STATS</span>
                    </button>

                    <button 
                      onClick={() => setShowSettings(true)}
                      onMouseEnter={() => playSound('hover')}
                      className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/40 border-green-500/30 hover:bg-green-900/60' : 'bg-slate-800/40 border-cyan-500/30 hover:bg-slate-800/60'}`}
                    >
                      <span className="text-xl">⚙️</span>
                      <span className={`text-[10px] font-bold tracking-wider ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>SYSTEM</span>
                    </button>

                    <button 
                      onClick={startTutorial}
                      onMouseEnter={() => playSound('hover')}
                      className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/40 border-green-500/30 hover:bg-green-900/60' : 'bg-slate-800/40 border-cyan-500/30 hover:bg-slate-800/60'}`}
                    >
                      <span className="text-xl">🎓</span>
                      <span className={`text-[10px] font-bold tracking-wider ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>TRAINING</span>
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="w-full flex items-center justify-between px-2 pt-2 border-t border-white/5">
                    <div className="flex flex-col items-start">
                      <span className={`text-[9px] uppercase tracking-wider ${nightMode ? 'text-green-700' : 'text-slate-500'}`}>Best Score</span>
                      <span className={`text-sm font-mono font-bold ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>{highScore}</span>
                    </div>
                    
                    <button 
                      onClick={() => setShowHowToPlay(true)}
                      onMouseEnter={() => playSound('hover')}
                      className={`flex items-center gap-1 text-[10px] hover:text-white transition-colors ${nightMode ? 'text-green-600' : 'text-slate-500'}`}
                    >
                      <span>📖</span> MANUAL
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {showModeSelect && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className={`relative w-full max-w-sm border rounded-2xl p-6 shadow-2xl ${nightMode ? 'bg-green-950 border-green-500/20' : 'bg-slate-900 border-cyan-500/20'}`}>
                  <button 
                    onClick={() => { setShowModeSelect(false); playSound('click'); }}
                    className={`absolute top-4 left-4 p-1 rounded-full transition-colors ${nightMode ? 'text-green-400 hover:bg-green-900' : 'text-slate-400 hover:bg-slate-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-white">SELECT MODE</h2>
                    <p className={`text-[10px] font-mono uppercase tracking-widest ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>Choose your challenge</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <button onClick={() => startGame('NORMAL')} className="w-full text-left p-3 rounded-xl border border-white/5 bg-slate-800/50 hover:bg-slate-700 transition-colors">
                      <div className="font-bold text-sm text-cyan-400">NORMAL</div>
                      <div className="text-xs text-slate-400">The standard hacking experience.</div>
                    </button>
                    <button onClick={() => startGame('DAILY')} className="w-full text-left p-3 rounded-xl border border-white/5 bg-slate-800/50 hover:bg-slate-700 transition-colors">
                      <div className="font-bold text-sm text-yellow-400">DAILY HACK</div>
                      <div className="text-xs text-slate-400">Everyone gets the same words for the day.</div>
                    </button>
                    <button onClick={() => startGame('SUDDEN_DEATH')} className="w-full text-left p-3 rounded-xl border border-white/5 bg-slate-800/50 hover:bg-slate-700 transition-colors">
                      <div className="font-bold text-sm text-red-400">SUDDEN DEATH</div>
                      <div className="text-xs text-slate-400">One life. Double points. High risk, high reward.</div>
                    </button>
                    <button onClick={() => startGame('HARDCORE')} className="w-full text-left p-3 rounded-xl border border-white/5 bg-slate-800/50 hover:bg-slate-700 transition-colors">
                      <div className="font-bold text-sm text-purple-400">HARDCORE</div>
                      <div className="text-xs text-slate-400">Letters are hidden. Rely on your memory.</div>
                    </button>
                    <button onClick={() => startGame('ZEN')} className="w-full text-left p-3 rounded-xl border border-white/5 bg-slate-800/50 hover:bg-slate-700 transition-colors">
                      <div className="font-bold text-sm text-blue-400">ZEN MODE</div>
                      <div className="text-xs text-slate-400">No timer. Just relax and hack.</div>
                    </button>
                    <button onClick={() => startGame('TIME_ATTACK')} className="w-full text-left p-3 rounded-xl border border-white/5 bg-slate-800/50 hover:bg-slate-700 transition-colors">
                      <div className="font-bold text-sm text-orange-400">TIME ATTACK</div>
                      <div className="text-xs text-slate-400">Hack as many words as you can in 60 seconds.</div>
                    </button>
                  </div>

                  <button 
                    onClick={() => setShowModeSelect(false)}
                    onMouseEnter={() => playSound('hover')}
                    className={`w-full py-3 text-white font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-900 hover:bg-green-800' : 'bg-slate-800 hover:bg-slate-700'}`}
                  >
                    BACK
                  </button>
                </div>
              </div>
            )}

            {showHowToPlay && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className={`relative w-full max-w-sm border rounded-2xl p-6 shadow-2xl ${nightMode ? 'bg-green-950 border-green-500/20' : 'bg-slate-900 border-cyan-500/20'}`}>
                  <button 
                    onClick={() => { setShowHowToPlay(false); playSound('click'); }}
                    className={`absolute top-4 left-4 p-1 rounded-full transition-colors ${nightMode ? 'text-green-400 hover:bg-green-900' : 'text-slate-400 hover:bg-slate-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-white">SYSTEM MANUAL</h2>
                    <p className={`text-[10px] font-mono uppercase tracking-widest ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>Protocol v1.0</p>
                  </div>
                  
                  <div className="space-y-4 text-xs text-slate-300 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${nightMode ? 'bg-green-500/10 text-green-400' : 'bg-cyan-500/10 text-cyan-400'}`}>⌨️</div>
                      <div>
                        <strong className="text-white block mb-0.5">Decrypt the Password</strong>
                        Guess the tech-related word letter by letter.
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">⚠️</div>
                      <div>
                        <strong className="text-white block mb-0.5">Avoid Detection</strong>
                        6 wrong attempts triggers a system failure.
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0">⚡</div>
                      <div>
                        <strong className="text-white block mb-0.5">Power Ups</strong>
                        Complete levels quickly for bonus points. Hints cost 20pts.
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowHowToPlay(false)}
                    onMouseEnter={() => playSound('hover')}
                    className={`w-full py-3 text-white font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-900 hover:bg-green-800' : 'bg-slate-800 hover:bg-slate-700'}`}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            )}

            {showSettings && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className={`relative w-full max-w-sm border rounded-2xl p-6 shadow-2xl ${nightMode ? 'bg-green-950 border-green-500/20' : 'bg-slate-900 border-cyan-500/20'}`}>
                  <button 
                    onClick={() => { setShowSettings(false); playSound('click'); }}
                    className={`absolute top-4 left-4 p-1 rounded-full transition-colors ${nightMode ? 'text-green-400 hover:bg-green-900' : 'text-slate-400 hover:bg-slate-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-white">SETTINGS</h2>
                    <p className={`text-[10px] font-mono uppercase tracking-widest ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>System Configuration</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className={`flex items-center justify-between p-3 rounded-xl border border-white/5 ${nightMode ? 'bg-green-900/50' : 'bg-slate-800/50'}`}>
                      <span className="text-sm font-bold text-slate-300">Sound Effects</span>
                      <button 
                        onClick={() => { setSoundEnabled(!soundEnabled); if (!soundEnabled) playSound('click'); }}
                        className={`w-12 h-6 rounded-full transition-colors relative ${soundEnabled ? (nightMode ? 'bg-green-500' : 'bg-cyan-500') : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${soundEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                    </div>

                    <div className={`flex items-center justify-between p-3 rounded-xl border border-white/5 ${nightMode ? 'bg-green-900/50' : 'bg-slate-800/50'}`}>
                      <span className="text-sm font-bold text-slate-300">Background Music</span>
                      <button 
                        onClick={() => { setMusicEnabled(!musicEnabled); playSound('click'); }}
                        className={`w-12 h-6 rounded-full transition-colors relative ${musicEnabled ? (nightMode ? 'bg-green-500' : 'bg-cyan-500') : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${musicEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                    </div>

                    <div className={`flex items-center justify-between p-3 rounded-xl border border-white/5 ${nightMode ? 'bg-green-900/50' : 'bg-slate-800/50'}`}>
                      <span className="text-sm font-bold text-slate-300">Night Mode</span>
                      <button 
                        onClick={() => { 
                          setNightMode(!nightMode); 
                          localStorage.setItem('wordHackNightMode', JSON.stringify(!nightMode));
                          playSound('click'); 
                        }}
                        className={`w-12 h-6 rounded-full transition-colors relative ${nightMode ? 'bg-green-500' : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${nightMode ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowSettings(false)}
                    onMouseEnter={() => playSound('hover')}
                    className={`w-full py-3 text-white font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-900 hover:bg-green-800' : 'bg-slate-800 hover:bg-slate-700'}`}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            )}

            {showShop && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className={`relative w-full max-w-sm border rounded-2xl p-6 shadow-2xl ${nightMode ? 'bg-green-950 border-green-500/20' : 'bg-slate-900 border-cyan-500/20'}`}>
                  <button 
                    onClick={() => { setShowShop(false); playSound('click'); }}
                    className={`absolute top-4 left-4 p-1 rounded-full transition-colors ${nightMode ? 'text-green-400 hover:bg-green-900' : 'text-slate-400 hover:bg-slate-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-white">BLACK MARKET</h2>
                    <p className={`text-[10px] font-mono uppercase tracking-widest ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>Credits: {credits}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className={`flex items-center justify-between p-3 rounded-xl border border-white/5 ${nightMode ? 'bg-green-900/50' : 'bg-slate-800/50'}`}>
                      <div>
                        <div className="text-xs font-bold text-slate-300">Extra Life</div>
                        <div className="text-[9px] text-slate-500">Start with +1 life</div>
                      </div>
                      <button 
                        onClick={() => buyUpgrade('extraLives', 1000)}
                        className={`px-3 py-1 text-[10px] font-bold rounded border transition-colors ${nightMode ? 'bg-green-900/50 hover:bg-green-800 text-green-400 border-green-500/30' : 'bg-cyan-900/50 hover:bg-cyan-800 text-cyan-400 border-cyan-500/30'}`}
                      >
                        {upgrades.extraLives >= 5 ? 'MAX' : `${1000 * (upgrades.extraLives + 1)}`}
                      </button>
                    </div>

                    {/* Cheaper Hints */}
                    <div className={`flex items-center justify-between p-3 rounded-xl border border-white/5 ${nightMode ? 'bg-green-900/50' : 'bg-slate-800/50'}`}>
                      <div>
                        <div className="text-xs font-bold text-slate-300">Decrypt Key</div>
                        <div className="text-[9px] text-slate-500">Hints cost -5 pts</div>
                      </div>
                      <button 
                        onClick={() => buyUpgrade('cheaperHints', 500)}
                        className={`px-3 py-1 text-[10px] font-bold rounded border transition-colors ${nightMode ? 'bg-green-900/50 hover:bg-green-800 text-green-400 border-green-500/30' : 'bg-cyan-900/50 hover:bg-cyan-800 text-cyan-400 border-cyan-500/30'}`}
                      >
                        {upgrades.cheaperHints >= 3 ? 'MAX' : `${500 * (upgrades.cheaperHints + 1)}`}
                      </button>
                    </div>

                    {/* Longer Freeze */}
                    <div className={`flex items-center justify-between p-3 rounded-xl border border-white/5 ${nightMode ? 'bg-green-900/50' : 'bg-slate-800/50'}`}>
                      <div>
                        <div className="text-xs font-bold text-slate-300">Time Dilation</div>
                        <div className="text-[9px] text-slate-500">Freeze lasts +2s</div>
                      </div>
                      <button 
                        onClick={() => buyUpgrade('longerFreeze', 500)}
                        className={`px-3 py-1 text-[10px] font-bold rounded border transition-colors ${nightMode ? 'bg-green-900/50 hover:bg-green-800 text-green-400 border-green-500/30' : 'bg-cyan-900/50 hover:bg-cyan-800 text-cyan-400 border-cyan-500/30'}`}
                      >
                        {upgrades.longerFreeze >= 5 ? 'MAX' : `${500 * (upgrades.longerFreeze + 1)}`}
                      </button>
                    </div>

                    {/* Prestige */}
                    <div className="flex items-center justify-between p-3 bg-purple-900/20 rounded-xl border border-purple-500/30 mt-4">
                      <div>
                        <div className="text-xs font-bold text-purple-300">System Prestige</div>
                        <div className="text-[9px] text-purple-400/80">Reset upgrades for +20% Score</div>
                        <div className="text-[9px] text-purple-400/60">Rank: {prestige} (+{Math.round(prestige * 20)}%)</div>
                      </div>
                      <button 
                        onClick={doPrestige}
                        disabled={credits < 2000}
                        className={`px-3 py-1 text-[10px] font-bold rounded border transition-colors ${
                          credits >= 2000 
                            ? 'bg-purple-600 hover:bg-purple-500 text-white border-purple-400' 
                            : (nightMode ? 'bg-green-900 text-green-700 border-green-800 cursor-not-allowed' : 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed')
                        }`}
                      >
                        RESET (2000)
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowShop(false)}
                    onMouseEnter={() => playSound('hover')}
                    className={`w-full py-3 text-white font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-900 hover:bg-green-800' : 'bg-slate-800 hover:bg-slate-700'}`}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            )}

            {showStats && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className={`relative w-full max-w-sm max-h-[85vh] flex flex-col border rounded-2xl shadow-2xl overflow-hidden ${nightMode ? 'bg-green-950 border-green-500/20' : 'bg-slate-900 border-cyan-500/20'}`}>
                  
                  {/* Header - Fixed */}
                  <div className={`relative shrink-0 p-4 border-b ${nightMode ? 'border-green-500/10 bg-green-900/20' : 'border-white/5 bg-slate-800/20'}`}>
                    <button 
                      onClick={() => { setShowStats(false); playSound('click'); }}
                      className={`absolute top-4 left-4 p-1 rounded-full transition-colors z-10 ${nightMode ? 'text-green-400 hover:bg-green-900' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button 
                      onClick={() => { setShowStats(false); playSound('click'); }}
                      className={`absolute top-4 right-4 p-1 rounded-full transition-colors z-10 ${nightMode ? 'text-green-400 hover:bg-green-900' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="text-center">
                      <h2 className="text-xl font-bold text-white">SYSTEM RECORDS</h2>
                      <p className={`text-[10px] font-mono uppercase tracking-widest ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>User Statistics</p>
                    </div>
                  </div>
                  
                  {/* Content - Scrollable */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className={`p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/30' : 'bg-slate-800/30'}`}>
                        <span className="text-2xl">🏆</span>
                        <div className="text-[9px] text-slate-400 uppercase tracking-wider">High Score</div>
                        <div className={`text-xl font-bold ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>{highScore}</div>
                      </div>
                      
                      <div className={`p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/30' : 'bg-slate-800/30'}`}>
                        <span className="text-2xl">👑</span>
                        <div className="text-[9px] text-slate-400 uppercase tracking-wider">Prestige</div>
                        <div className="text-xl font-bold text-purple-400">{prestige}</div>
                      </div>

                      <div className={`p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/30' : 'bg-slate-800/30'}`}>
                        <span className="text-2xl">🎮</span>
                        <div className="text-[9px] text-slate-400 uppercase tracking-wider">Games</div>
                        <div className="text-xl font-bold text-white">{stats.gamesPlayed}</div>
                      </div>

                      <div className={`p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-1 ${nightMode ? 'bg-green-900/30' : 'bg-slate-800/30'}`}>
                        <span className="text-2xl">🔓</span>
                        <div className="text-[9px] text-slate-400 uppercase tracking-wider">Hacked</div>
                        <div className="text-xl font-bold text-green-400">{stats.wordsHacked}</div>
                      </div>
                    </div>

                    {/* Credits Banner */}
                    <div className={`w-full p-4 rounded-xl border border-white/5 flex items-center justify-between ${nightMode ? 'bg-green-900/20' : 'bg-slate-800/20'}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💎</span>
                        <div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Total Credits</div>
                          <div className="text-xl font-bold text-yellow-400">{credits}</div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">🏅</span>
                        <span className={`text-xs font-bold uppercase tracking-wider ${nightMode ? 'text-green-400' : 'text-cyan-400'}`}>Achievements</span>
                        <span className="text-[10px] text-slate-500 ml-auto">{unlockedAchievements.length}/{ACHIEVEMENTS.length}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {ACHIEVEMENTS.map(ach => {
                          const isUnlocked = unlockedAchievements.includes(ach.id);
                          return (
                            <div key={ach.id} className={`flex items-center gap-3 p-2 rounded-lg border transition-all ${isUnlocked ? (nightMode ? 'bg-green-900/40 border-green-500/30' : 'bg-slate-800/60 border-cyan-500/30') : 'bg-black/20 border-white/5 opacity-50'}`}>
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0 ${isUnlocked ? (nightMode ? 'bg-green-500/20' : 'bg-cyan-500/20') : 'bg-white/5 grayscale'}`}>
                                {ach.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`text-[10px] font-bold truncate ${isUnlocked ? (nightMode ? 'text-green-400' : 'text-cyan-400') : 'text-slate-500'}`}>
                                  {ach.title}
                                </div>
                                <div className="text-[9px] text-slate-500 truncate">
                                  {ach.desc}
                                </div>
                              </div>
                              {isUnlocked && (
                                <div className={`text-[10px] ${nightMode ? 'text-green-500' : 'text-cyan-500'}`}>✓</div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Footer - Fixed */}
                  <div className={`shrink-0 p-4 border-t ${nightMode ? 'border-green-500/10 bg-green-900/20' : 'border-white/5 bg-slate-800/20'}`}>
                    <button 
                      onClick={() => setShowStats(false)}
                      onMouseEnter={() => playSound('hover')}
                      className={`w-full py-3 text-white font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-900 hover:bg-green-800' : 'bg-slate-800 hover:bg-slate-700'}`}
                    >
                      BACK
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Hacker News Ticker */}
            <div className={`absolute bottom-0 left-0 right-0 h-6 border-t flex items-center overflow-hidden z-30 ${nightMode ? 'bg-green-950/90 border-green-500/30' : 'bg-slate-950/90 border-cyan-500/30'}`}>
              <div className="flex animate-ticker">
                <div className="flex gap-8 whitespace-nowrap pr-8">
                  {newsHeadlines.map((news, i) => (
                    <span key={i} className={`text-[8px] font-mono flex items-center gap-2 ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>
                      <span className={`w-1 h-1 rounded-full ${nightMode ? 'bg-green-500/40' : 'bg-cyan-500/40'}`} />
                      {news}
                    </span>
                  ))}
                </div>
                <div className="flex gap-8 whitespace-nowrap pr-8">
                  {newsHeadlines.map((news, i) => (
                    <span key={`dup-${i}`} className={`text-[8px] font-mono flex items-center gap-2 ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>
                      <span className={`w-1 h-1 rounded-full ${nightMode ? 'bg-green-500/40' : 'bg-cyan-500/40'}`} />
                      {news}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {gameState === 'WON' && (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300 bg-slate-900/90 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
            <div className="space-y-1">
              <div className="text-4xl mb-2">🔓</div>
              <h2 className="text-2xl font-bold text-green-400">ACCESS GRANTED</h2>
              {mistakes === 0 && (
                <p className="text-xs font-bold text-yellow-400 tracking-widest animate-pulse">PERFECT HACK (+100)</p>
              )}
              <p className="text-slate-400 text-sm">
                The password was <span className="text-white font-mono font-bold">{word}</span>
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <button 
                onClick={nextLevel}
                className="px-6 py-2 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg shadow-lg transition-all active:scale-95"
              >
                NEXT SYSTEM
              </button>
            </div>
          </div>
        )}

        {gameState === 'LOST' && (
          <div className="w-full max-w-sm animate-in fade-in zoom-in duration-300">
            <div className="relative bg-slate-900/90 border border-red-500/20 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(220,38,38,0.15)] overflow-hidden">
              
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                  <svg viewBox="0 0 100 150" className="h-24 w-24 stroke-red-500 stroke-[3px] fill-none drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20,130 L80,130" className="stroke-red-500/30" />
                    <rect x="30" y="60" width="40" height="50" rx="10" />
                    <path d="M30,60 A20,20 0 0,1 70,60" />
                    <path d="M30,70 L10,60 M30,85 L10,85 M30,100 L10,110" />
                    <path d="M70,70 L90,60 M70,85 L90,85 M70,100 L90,110" />
                    <path d="M40,45 L30,20 M60,45 L70,20" />
                    <path d="M37,47 L43,53 M43,47 L37,53 M57,47 L63,53 M63,47 L57,53" />
                  </svg>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-black text-white mb-1 tracking-wider drop-shadow-md">
                  SYSTEM <span className="text-red-500">FAILURE</span>
                </h2>
                <p className="text-red-400/60 text-xs font-mono uppercase tracking-[0.2em] mb-6">
                  Breach Detected
                </p>

                {/* Password Box */}
                <div className="w-full bg-slate-950/50 border border-red-500/20 rounded-lg p-3 mb-6">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Correct Password</p>
                  <div className="font-mono text-xl font-bold text-red-100 tracking-widest min-h-[1.75rem]">
                    {revealedWord}
                    <span className="animate-pulse">_</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 w-full mb-6">
                  <div className="bg-slate-800/30 rounded-lg p-2 border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase">Score</div>
                    <div className="text-lg font-bold text-white">{score}</div>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-2 border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase">Best</div>
                    <div className="text-lg font-bold text-yellow-400">{Math.max(score, highScore)}</div>
                  </div>
                </div>

                {/* Button */}
                <button 
                  onClick={() => startGame('NORMAL')}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl shadow-lg shadow-red-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span className="group-hover:rotate-180 transition-transform duration-500">↻</span>
                  REBOOT SYSTEM
                </button>

                <button 
                  onClick={shareOnTwitter}
                  className="w-full mt-3 py-3 bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  SHARE SCORE
                </button>

              </div>
            </div>
          </div>
        )}

        {gameState === 'VICTORY' && (
          <div className="w-full max-w-sm animate-in fade-in zoom-in duration-500">
            <div className="relative bg-slate-900/90 border border-green-500/20 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(34,197,94,0.15)] overflow-hidden">
              
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                  <div className="relative h-24 w-24 flex items-center justify-center rounded-full border-2 border-green-500/30 bg-green-500/10 text-6xl animate-bounce">
                    🏆
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-black text-white mb-1 tracking-wider drop-shadow-md">
                  SYSTEM <span className="text-green-500">OWNED</span>
                </h2>
                <p className="text-green-400/60 text-xs font-mono uppercase tracking-[0.2em] mb-8">
                  Root Access Granted
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 w-full mb-8">
                  <div className="bg-slate-800/30 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Final Score</div>
                    <div className="text-2xl font-bold text-white">{score}</div>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Best</div>
                    <div className="text-2xl font-bold text-yellow-400">{Math.max(score, highScore)}</div>
                  </div>
                </div>

                {/* Button */}
                <button 
                  onClick={() => startGame('NORMAL')}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span className="group-hover:rotate-180 transition-transform duration-500">↻</span>
                  HACK AGAIN
                </button>

                <button 
                  onClick={shareOnTwitter}
                  className="w-full mt-3 py-3 bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  SHARE VICTORY
                </button>

              </div>
            </div>
          </div>
        )}
      </div>

      {showQuitConfirm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className={`w-full max-w-sm border rounded-2xl p-6 shadow-2xl ${nightMode ? 'bg-green-950 border-green-500/20' : 'bg-slate-900 border-cyan-500/20'}`}>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">ABORT MISSION?</h2>
              <p className={`text-[10px] font-mono uppercase tracking-widest ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>Current progress will be lost</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => { setShowQuitConfirm(false); playSound('click'); }}
                className={`flex-1 py-3 font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-900 hover:bg-green-800 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
              >
                CANCEL
              </button>
              <button 
                onClick={() => {
                  setShowQuitConfirm(false);
                  setGameState('MENU');
                  playSound('lose');
                }}
                className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors"
              >
                QUIT
              </button>
            </div>
          </div>
        </div>
      )}

      {isPaused && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className={`w-full max-w-sm border rounded-2xl p-6 shadow-2xl ${nightMode ? 'bg-green-950 border-green-500/20' : 'bg-slate-900 border-cyan-500/20'}`}>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">SYSTEM PAUSED</h2>
              <p className={`text-[10px] font-mono uppercase tracking-widest ${nightMode ? 'text-green-500/60' : 'text-cyan-500/60'}`}>Awaiting Input</p>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => { setIsPaused(false); playSound('click'); }}
                className={`w-full py-3 font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'}`}
              >
                RESUME
              </button>
              <button 
                onClick={() => {
                  setIsPaused(false);
                  setShowQuitConfirm(true);
                  playSound('click');
                }}
                className={`w-full py-3 font-bold rounded-xl transition-colors ${nightMode ? 'bg-green-900 hover:bg-green-800 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
              >
                ABORT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard */}
      {gameState === 'PLAYING' && (
        <div className="relative z-10 p-2 pb-3 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-1.5 max-w-sm mx-auto">
            {keyboard.map((row, i) => (
              <div key={i} className="flex justify-center gap-1">
                {row.map(char => {
                  const status = guessed.includes(char) 
                    ? word.includes(char) ? 'correct' : 'wrong'
                    : 'unused';
                  
                  return (
                    <button
                      key={char}
                      onClick={() => guess(char)}
                      disabled={status !== 'unused'}
                      className={`h-10 w-8 sm:w-9 rounded-lg font-bold text-sm transition-all duration-150 active:scale-95 flex items-center justify-center shadow-lg ${nightMode ? 'border-green-900' : ''} ${
                        status === 'unused' 
                          ? (nightMode ? 'bg-green-900 text-green-300 border-b-2 border-green-950 hover:bg-green-800' : 'bg-slate-800 text-slate-300 border-b-2 border-slate-950 hover:bg-slate-700 hover:border-slate-900')
                          : status === 'correct'
                            ? (nightMode ? 'bg-green-600 text-white border-b-2 border-green-800 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-cyan-600 text-white border-b-2 border-cyan-800 shadow-[0_0_10px_rgba(8,145,178,0.4)]')
                            : (nightMode ? 'bg-green-950/50 text-green-800 border border-green-900' : 'bg-slate-900/50 text-slate-600 border border-slate-800')
                      }`}
                    >
                      {char}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
