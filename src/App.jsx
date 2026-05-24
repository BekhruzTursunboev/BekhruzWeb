import React, { useState } from 'react';
import { YoutubeLogo, TelegramLogo, LinkedinLogo, GithubLogo, UserCircle, X, ArrowUpRight } from '@phosphor-icons/react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import './index.css';

const SOCIALS = [
  {
    id: "channel",
    name: "Channel",
    icon: TelegramLogo,
    description: "Join my community where I share daily insights on AI, coding workflows, and the latest industry news.",
    link: "https://t.me/bekhruzAI"
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: YoutubeLogo,
    description: "My digital classroom. I love breaking down complex programming concepts and sharing my knowledge with the world.",
    link: "https://www.youtube.com/@BexruzTursunboev"
  },
  {
    id: "contact",
    name: "Contact",
    icon: UserCircle,
    description: "Looking to collaborate, hire me for a project, or just want to chat? Send me a direct message.",
    link: "https://t.me/tursunboevbekhruz"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: LinkedinLogo,
    description: "My professional network. Let's connect, discuss industry trends, and explore potential career opportunities.",
    link: "https://www.linkedin.com/in/bexruztursunbayev"
  },
  {
    id: "github",
    name: "GitHub",
    icon: GithubLogo,
    description: "Explore my open-source projects, version history, and the code that powers my applications.",
    link: "https://github.com/BekhruzTursunboev"
  }
];

function App() {
  const [activeId, setActiveId] = useState(null);
  const activeItem = SOCIALS.find(s => s.id === activeId);

  // 3D Parallax Photo Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-400, 400], [6, -6]);
  const rotateY = useTransform(x, [-400, 400], [-6, 6]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="app-container">
      <div className="split-grid">
        
        {/* Left Side: Content */}
        <div className="content-side">
          <span className="eyebrow animate-reveal">I'm Bekhruz Tursunboev</span>
          <h1 className="hero-heading animate-reveal delay-100">
            Next.js Full-stack developer<br />who can build anything.
          </h1>
          
          <div className="content-bottom">
            <p className="subtitle animate-reveal delay-200">
              I have launched 7 BIG websites, 1 mobile app. Digitilized 3 companies
            </p>
            
            <div className="social-wrapper animate-reveal delay-300">
              <AnimatePresence>
                {activeId ? (
                  <motion.div 
                    layoutId={`dock-container`}
                    className="expanded-social-card"
                    initial={{ borderRadius: 9999 }}
                    animate={{ borderRadius: 24 }}
                    exit={{ borderRadius: 9999 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="expanded-header">
                      <motion.div layoutId={`icon-wrapper-${activeItem.id}`} className="expanded-icon">
                        <activeItem.icon size={28} weight="light" />
                      </motion.div>
                      <motion.h3 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.1 }}
                      >
                        My {activeItem.name}
                      </motion.h3>
                      <button className="close-btn" onClick={() => setActiveId(null)}>
                        <X size={20} weight="bold" />
                      </button>
                    </div>
                    
                    <motion.p 
                      className="expanded-desc"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {activeItem.description}
                    </motion.p>
                    
                    <motion.a 
                      href={activeItem.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="expanded-link-btn"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Visit {activeItem.name} <ArrowUpRight size={18} weight="bold" />
                    </motion.a>
                  </motion.div>
                ) : (
                  <motion.div 
                    layoutId={`dock-container`}
                    className="social-dock"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {SOCIALS.map((item) => (
                      <motion.button 
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                        className="magnetic-btn"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Open ${item.name} details`}
                      >
                        <motion.span layoutId={`icon-wrapper-${item.id}`} className="magnetic-icon">
                          <item.icon size={22} weight="light" />
                        </motion.span>
                        <span className="magnetic-text">{item.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Side: Photo with 3D Parallax */}
        <div className="photo-side animate-reveal delay-300" style={{ perspective: 1200 }}>
          <motion.img 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            src="/my_photo.jpg" 
            alt="Bekhruz Workspace" 
          />
        </div>
        
      </div>
    </div>
  );
}

export default App;
