function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const mins = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const timeStr = `${hours}:${mins}`;
  const el = document.getElementById('live-clock');
  if (el) el.textContent = timeStr;
}
updateClock();
setInterval(updateClock, 1000);

const homeBtn = document.querySelector('.home-btn');
const scroller = document.querySelector('.scroller');

if (homeBtn && scroller) {
  homeBtn.addEventListener('click', () => {
    scroller.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
