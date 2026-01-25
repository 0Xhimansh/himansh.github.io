import React, { useState, useEffect, useRef } from 'react';

type AgentState = 'walking' | 'typing' | 'idle' | 'teleporting';

const HackerAgent: React.FC = () => {
  const [position, setPosition] = useState({ top: 80, left: 10 });
  const [state, setState] = useState<AgentState>('idle');
  const [flipped, setFlipped] = useState(false);
  const [opacity, setOpacity] = useState(0.8);
  const [transitionTime, setTransitionTime] = useState(5);
  
  const timerRef = useRef<number | null>(null);

  const getNewPosition = () => {
    // Generate random coordinates across the viewport
    // We keep them slightly away from the absolute edges
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
    return { top, left };
  };

  const roam = () => {
    const nextMove = Math.random();
    
    if (nextMove < 0.2) {
      // Teleport: vanish and reappear elsewhere
      setState('teleporting');
      setOpacity(0);
      
      timerRef.current = window.setTimeout(() => {
        const nextPos = getNewPosition();
        setPosition(nextPos);
        setTransitionTime(0); // instant move while invisible
        
        timerRef.current = window.setTimeout(() => {
          setOpacity(0.8);
          setState('idle');
          setTransitionTime(5);
          roam();
        }, 500);
      }, 1000);
      
    } else if (nextMove < 0.6) {
      // Walk to new location
      const nextPos = getNewPosition();
      setState('walking');
      setFlipped(nextPos.left < position.left);
      setPosition(nextPos);
      setTransitionTime(Math.random() * 4 + 4); // 4-8 seconds walk
      
      timerRef.current = window.setTimeout(() => {
        setState(Math.random() > 0.5 ? 'typing' : 'idle');
        roam();
      }, 8000); // Wait for the transition roughly
      
    } else {
      // Idle or Type in place
      setState(Math.random() > 0.5 ? 'typing' : 'idle');
      timerRef.current = window.setTimeout(() => {
        roam();
      }, Math.random() * 5000 + 3000);
    }
  };

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    roam();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const statusText = state === 'typing' ? 'AUDITING_LOGIC' : 
                     state === 'walking' ? 'MAPPING_NETWORK' : 
                     state === 'teleporting' ? 'PIVOTING_NODE' : 'IDLE_SCAN';

  return (
    <div 
      className="hacker-container"
      style={{ 
        top: `${position.top}%`, 
        left: `${position.left}%`,
        opacity: opacity,
        transitionDuration: `${transitionTime}s`,
        transform: `scale(${flipped ? -1 : 1}, 1)`
      }}
    >
      <div className="hacker-bob relative group">
        <div 
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900/90 border border-zinc-800 px-2 py-1 rounded text-[7px] mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
          style={{ transform: flipped ? 'scale(-1, 1)' : 'none' }}
        >
          STATUS: {statusText}
        </div>
        
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]">
          {/* Character Body */}
          <path d="M16 38V34H14V22H16V18H18V16H20V14H28V16H30V18H32V22H34V34H32V38H16Z" fill="#0a0a0a" />
          <path d="M18 36V34H16V22H18V18H20V16H28V18H30V22H32V34H30V36H18Z" fill="#22d3ee" fillOpacity="0.7" />
          
          {/* Laptop (always facing forward relative to the body's center) */}
          <g className={state === 'typing' ? 'animate-pulse' : ''}>
            <rect x="22" y="24" width="14" height="9" rx="1" fill="#0891b2" />
            <rect x="24" y="25" width="10" height="6" fill="#050505" />
            <rect x="25" y="26" width="2" height="1" fill="#22d3ee" className={state === 'typing' ? 'animate-ping' : 'opacity-40'} />
          </g>
          
          {/* Visor */}
          <rect x="20" y="20" width="8" height="2" fill="#000" />
          
          {/* Details */}
          <rect x="18" y="22" width="2" height="8" fill="#0891b2" />
        </svg>

        {/* Action markers */}
        {state === 'typing' && (
          <div className="absolute top-0 right-0 mono text-[8px] text-cyan-400 animate-bounce">
            ...
          </div>
        )}
      </div>
    </div>
  );
};

export default HackerAgent;
