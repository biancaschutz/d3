// Aurora background — adapted from https://codepen.io/editor/ash1198/pen/01a032b4-26e7-779c-ba41-8c90e3f6ffcf
// Moves the blobs with the cursor by setting --mouse-x, --mouse-y and --energy on <html>.

const root = document.documentElement;

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let previousPointerX = window.innerWidth / 2;
let previousPointerY = window.innerHeight / 2;
let previousTime = performance.now();
let velocity = 0;
let energy = 0;

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function handlePointerMove(event) {
  // Cursor position as -1..+1 across the viewport
  targetX = (event.clientX / window.innerWidth - 0.5) * 2;
  targetY = (event.clientY / window.innerHeight - 0.5) * 2;

  const now = performance.now();
  const deltaTime = Math.max(now - previousTime, 1);
  const distance = Math.hypot(
    event.clientX - previousPointerX,
    event.clientY - previousPointerY,
  );

  // Smoothed speed, so fast moves briefly brighten the aurora
  velocity += (distance / (deltaTime / 1000) - velocity) * 0.18;

  previousPointerX = event.clientX;
  previousPointerY = event.clientY;
  previousTime = now;
}

function animate() {
  // Ease toward the cursor so the blobs float instead of snapping
  currentX += (targetX - currentX) * 0.045;
  currentY += (targetY - currentY) * 0.045;

  velocity *= 0.94;
  if (velocity < 1) velocity = 0;
  energy += (clamp(velocity / 1800, 0, 1) - energy) * 0.12;

  root.style.setProperty("--mouse-x", currentX);
  root.style.setProperty("--mouse-y", currentY);
  root.style.setProperty("--energy", energy);

  requestAnimationFrame(animate);
}

if (!reducedMotion) {
  document.addEventListener("pointermove", handlePointerMove);
  animate();
}
