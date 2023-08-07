export default function GalaxyBackground() {
  return (
    <div style={{ height: '100vh', top: 0, left: 0, zIndex: -1, width: '100%' }}>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
    <radialGradient id="galaxyGradient1" cx="10%" cy="0%" r="80%">
        <stop offset="0%" stopColor="#FFEFDB" stopOpacity="0.8" />
        <stop offset="100%" stopColor="white" stopOpacity="0.3" />
    </radialGradient>
    <radialGradient id="galaxyGradient2" cx="50%" cy="20%" r="50%">
        <stop offset="0%" stopColor="#CC62A1" stopOpacity="0.8" />
        <stop offset="100%" stopColor="white" stopOpacity="0.2" />
    </radialGradient>
    <radialGradient id="galaxyGradient3" cx="20%" cy="60%" r="50%">
        <stop offset="0%" stopColor="#3ABAB4" stopOpacity="0.7" />
        <stop offset="100%" stopColor="white" stopOpacity="0.4" />
    </radialGradient>
    <radialGradient id="galaxyGradient4" cx="65%" cy="0%" r="80%">
        <stop offset="0%" stopColor="#DFF5FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="white" stopOpacity="0.2" />
    </radialGradient>
    <radialGradient id="galaxyGradient5" cx="80%" cy="10%" r="80%">
        <stop offset="0%" stopColor="#FFCCE5" stopOpacity="0.8" />
        <stop offset="100%" stopColor="white" stopOpacity="0.2" />
    </radialGradient>
    {/* Gradient for bottom fade */}
    <linearGradient id="fadeToWhite" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="70%" stopColor="white" stopOpacity="0" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
    </linearGradient>
</defs>

              <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient1)" opacity="0.6" />
              <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient2)" opacity="0.6" />
              <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient3)" opacity="0.6" />
              <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient4)" opacity="0.6" />
              <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient5)" opacity="0.8" />

              
              <rect x="0" y="0" width="100" height="100" fill="url(#fadeToWhite)" />
          </svg>
      </div>
  );
}
