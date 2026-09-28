/* ============================================================
   PROLOGUE — Centred cinematic intro
   Stage 1: Quote fades in
   Stage 2: Quote fades, book fades in
   Stage 3: Book opens + glow
   Stage 4: Book fades, name + button appear
   ============================================================ */

(function () {
  console.log('INTRO JS LOADED — v3');

  const intro     = document.getElementById('intro');
  const quote     = document.getElementById('introQuote');
  const bookStage = document.getElementById('introBookStage');
  const book      = document.getElementById('book');
  const glow      = document.getElementById('introGlow');
  const naming    = document.getElementById('introNaming');
  const enterBtn  = document.getElementById('enterBtn');
  const skipBtn   = document.getElementById('skipBtn');

  // Returning visitor → jump straight to home
  if (localStorage.getItem('prologue_intro_done') === 'true') {
    window.location.replace('home.html');
    return;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = reduced
    ? { qIn: 50,   qOut: 400,  bIn: 500,  bOpen: 700,  bOut: 1000, nIn: 1100 }
    : { qIn: 200,  qOut: 2200, bIn: 2500, bOpen: 2900, bOut: 4300, nIn: 4500 };

  setTimeout(() => quote.classList.add('visible'), T.qIn);
  setTimeout(() => quote.classList.add('fade'),    T.qOut);
  setTimeout(() => bookStage.classList.add('visible'), T.bIn);
  setTimeout(() => { book.classList.add('open'); glow.classList.add('on'); }, T.bOpen);
  setTimeout(() => { bookStage.classList.add('hide'); glow.classList.remove('on'); }, T.bOut);
  setTimeout(() => naming.classList.add('visible'), T.nIn);

  function enterSite() {
    localStorage.setItem('prologue_intro_done', 'true');
    intro.classList.add('fade-out');
    setTimeout(() => { window.location.href = 'home.html'; }, 800);
  }

  enterBtn.addEventListener('click', enterSite);
  skipBtn.addEventListener('click', enterSite);
})();