document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .cursor-bubble {
      position: fixed;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(
        circle,
        rgba(120, 180, 255, 0.8) 0%,
        rgba(120, 180, 255, 0.2) 70%,
        transparent 100%
      );
      transform: translate(-50%, -50%);
      animation: bubble-fade 0.8s ease-out forwards;
      z-index: 99999;
    }

    @keyframes bubble-fade {
      0% {
        opacity: 0.9;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -80%) scale(2.5);
      }
    }
  `;
  document.head.appendChild(style);

  let lastTime = 0;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 40) return;
    lastTime = now;

    const bubble = document.createElement('div');
    bubble.className = 'cursor-bubble';
    bubble.style.left = `${e.clientX}px`;
    bubble.style.top = `${e.clientY}px`;

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 800);
  });
});
