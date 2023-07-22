
export default function GalaxyBackground() {
    return (
      <div className="w-full min-h-screen" style={{ position: 'absolute', top: 0, left: 0 }}>
        <svg className="" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="galaxyGradient1" cx="0%" cy="40%" r="30%">
              <stop offset="0%" stopColor="#3ABAB4" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="galaxyGradient2" cx="20%" cy="70%" r="60%">
              <stop offset="0%" stopColor="#9094D1" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="galaxyGradient3" cx="80%" cy="80%" r="30%">
              <stop offset="0%" stopColor="#3ABAB4" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="galaxyGradient4" cx="30%" cy="0%" r="50%">
              <stop offset="0%" stopColor="#549EE1" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="galaxyGradient5" cx="80%" cy="20%" r="50%">
              <stop offset="0%" stopColor="#CC62A1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </radialGradient>
            
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient1)" opacity="0.5" />
          <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient2)" opacity="0.6" />
          <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient3)" opacity="0.5" />
          <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient4)" opacity="0.5" />
          <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient5)" opacity="0.5" />
        </svg>
      </div>
    );
  }