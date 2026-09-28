/* ========== Contact form ========== */
(function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');

  function setErr(id, show) {
    document.getElementById(id).classList.toggle('visible', show);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    const name = form.cName.value.trim();
    if (name.length < 2) { setErr('cNameErr', true); ok = false; } else setErr('cNameErr', false);

    const email = form.cEmail.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('cEmailErr', true); ok = false; } else setErr('cEmailErr', false);

    const msg = form.cMsg.value.trim();
    if (msg.length < 10) { setErr('cMsgErr', true); ok = false; } else setErr('cMsgErr', false);

    if (!ok) {
      status.className = 'form-status error';
      status.textContent = '⚠ Please fix the errors above.';
      return;
    }

    status.className = 'form-status success';
    status.textContent = '✓ Message sent successfully!!!!!';
    form.reset();
  });
})();