/* ========== Membership form validation + Google Sheets recording ========== */

// ⬇️ PASTE YOUR WEB APP URL BETWEEN THE QUOTES ⬇️
const MEMBERSHIP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzU-kAAp6SgckwRhGA8fA8ncFnMun2JkHFPLkXm14JLmJJhyvULMnjTLTU_KQEZe2OsPQ/exec';

(function () {
  const form = document.getElementById('membershipForm');
  const formStatus = document.getElementById('formStatus');
  const successCard = document.getElementById('successCard');
  const appIdEl = document.getElementById('appId');
  const newAppBtn = document.getElementById('newAppBtn');

  /* ---------------------------------------------------------
     ONE-TIME SUBMISSION CHECK
     If this browser has already submitted, lock the form
     --------------------------------------------------------- */
  const ALREADY_KEY = 'prologue_member_submitted';
  const already = localStorage.getItem(ALREADY_KEY);

  if (already) {
    // Show the success screen with the saved ID, hide the form
    const data = JSON.parse(already);
    form.style.display = 'none';
    formStatus.style.display = 'none';
    successCard.style.display = 'block';
    appIdEl.textContent = data.appId;
    // Replace the "Submit Another" button with an info message
    if (newAppBtn) {
      newAppBtn.style.display = 'none';
      const note = document.createElement('p');
      note.style.cssText = 'font-size:0.85rem;color:var(--text-secondary);margin-top:1rem;';
      note.textContent = 'You have already submitted an application from this device.';
      successCard.appendChild(note);
    }
    return; // stop — no form binding at all
  }

  /* ---------------------------------------------------------
     HELPER — generate a truly unique ID
     Format: PRO-YYYY-XXXX-YYY  (year, 4 random, 3 random)
     --------------------------------------------------------- */
  function generateAppId() {
    const year = new Date().getFullYear();
    const time = Date.now().toString().slice(-4);            // last 4 digits of timestamp
    const rand = Math.floor(1000 + Math.random() * 9000);    // 4 random digits
    return `PRO-${year}-${time}${rand}`;
  }

  function validateField(id, condition, errorId) {
    const el = document.getElementById(id);
    const err = document.getElementById(errorId);
    if (condition) { err.classList.remove('visible'); el.style.borderColor = ''; return true; }
    err.classList.add('visible'); el.style.borderColor = '#c0392b'; return false;
  }

  /* ---------------------------------------------------------
     FORM SUBMIT
     --------------------------------------------------------- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Block resubmission if already submitted (extra safety)
    if (localStorage.getItem(ALREADY_KEY)) {
      formStatus.className = 'form-status error';
      formStatus.textContent = '⚠ You have already submitted an application.';
      return;
    }

    let valid = true;

    valid = validateField('fullName', form.fullName.value.trim().length >= 3, 'nameError') && valid;
    valid = validateField('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim()), 'emailError') && valid;

    const phone = form.phone.value.trim();
    if (phone) valid = validateField('phone', /^[+\d\s\-()]{7,}$/.test(phone), 'phoneError') && valid;
    else document.getElementById('phoneError').classList.remove('visible');

    valid = validateField('department', form.department.value.trim() !== '', 'deptError') && valid;
    valid = validateField('year', form.year.value !== '', 'yearError') && valid;
    valid = validateField('regNo', form.regNo.value.trim() !== '', 'regError') && valid;
    valid = validateField('motivation', form.motivation.value.trim().length >= 20, 'motivationError') && valid;

    const interests = document.querySelectorAll('input[name="interest"]:checked');
    if (interests.length === 0) {
      document.getElementById('interestError').classList.add('visible');
      valid = false;
    } else {
      document.getElementById('interestError').classList.remove('visible');
    }

    if (!valid) {
      formStatus.className = 'form-status error';
      formStatus.textContent = '⚠ Please fix the errors above.';
      return;
    }

    // ---- Generate a fresh unique ID ----
    let appId = generateAppId();

    // Safety: ensure the ID has never been used on this device
    const used = JSON.parse(localStorage.getItem('prologue_used_ids') || '[]');
    let attempts = 0;
    while (used.indexOf(appId) !== -1 && attempts < 5) {
      appId = generateAppId();
      attempts++;
    }
    used.push(appId);
    localStorage.setItem('prologue_used_ids', JSON.stringify(used));

    // ---- Build payload ----
    const payload = {
      appId:      appId,
      fullName:   form.fullName.value.trim(),
      email:      form.email.value.trim(),
      phone:      phone,
      department: form.department.value.trim(),
      year:       form.year.value,
      regNo:      form.regNo.value.trim(),
      motivation: form.motivation.value.trim(),
      favBook:    form.favBook.value.trim(),
      interests:  Array.from(interests).map(i => i.value)
    };

    // ---- Send to Google Sheets ----
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Submitting… <i class="fas fa-spinner fa-spin"></i>';

    fetch(MEMBERSHIP_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    })
    .then(() => {
      // Mark this device as submitted
      localStorage.setItem(ALREADY_KEY, JSON.stringify({
        appId: appId,
        submitted: new Date().toISOString()
      }));

      // Show success screen
      form.style.display = 'none';
      formStatus.style.display = 'none';
      successCard.style.display = 'block';
      appIdEl.textContent = appId;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Hide "Submit Another" — one-time only
      if (newAppBtn) {
        newAppBtn.style.display = 'none';
        const note = document.createElement('p');
        note.style.cssText = 'font-size:0.85rem;color:var(--text-secondary);margin-top:1rem;';
        note.textContent = 'You have already submitted an application from this device.';
        successCard.appendChild(note);
      }
    })
    .catch(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      formStatus.className = 'form-status error';
      formStatus.textContent = '⚠ Could not submit. Please check your connection and try again.';
    });
  });
})();