/* ========== PROLOGUE — Events page ========== */
(function () {
  var EVENTS = {
    upcoming: [
      { title: 'Reading Circle: Short Stories', date: '07/10/26', time: '4:00 PM', venue: 'Library Hall', type: 'Reading', desc: 'A cozy session reading and discussing short stories from around the world.', status: 'Open for registration' },
      { title: 'Poetry Open Mic', date: '16/10/26', time: '5:00 PM', venue: 'Seminar Hall', type: 'Performance', desc: 'An evening of poetry, spoken word, and creative expression.', status: 'Registration opening soon' }
    ],
    past: [
      { title: 'Literary Quiz 2025', date: '22/09/26', time: '3:00 PM', venue: 'Auditorium', type: 'Quiz', desc: 'Teams battled through rounds on classic and contemporary literature.', status: 'Completed' },
      { title: 'Creative Writing Workshop', date: '10/09/26', time: '10:00 AM', venue: 'Room 204', type: 'Workshop', desc: 'Hands-on writing exercises and peer feedback session.', status: 'Completed' }
    ]
  };

  var listEl = document.getElementById('eventList');
  var tabs = document.querySelectorAll('.event-tab');
  var modal = document.getElementById('eventModal');
  var modalClose = document.getElementById('modalClose');

  function render(tab) {
    var events = EVENTS[tab] || [];
    listEl.innerHTML = events.map(function (ev, i) {
      return ''
        + '<div class="event-item" data-tab="' + tab + '" data-index="' + i + '">'
        + '  <div>'
        + '    <div class="event-title">' + ev.title + '</div>'
        + '    <div class="event-meta">'
        + '      <span><i class="fas fa-calendar"></i> ' + ev.date + '</span>'
        + '      <span><i class="fas fa-clock"></i> ' + ev.time + '</span>'
        + '      <span><i class="fas fa-map-marker-alt"></i> ' + ev.venue + '</span>'
        + '    </div>'
        + '  </div>'
        + '  <i class="fas fa-chevron-right" style="color:var(--gold);"></i>'
        + '</div>';
    }).join('');
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      render(tab.dataset.tab);
    });
  });

  listEl.addEventListener('click', function (e) {
    var item = e.target.closest('.event-item');
    if (!item) return;
    var ev = EVENTS[item.dataset.tab][parseInt(item.dataset.index, 10)];
    document.getElementById('modalTitle').textContent = ev.title;
    document.getElementById('modalDate').textContent = ev.date;
    document.getElementById('modalTime').textContent = ev.time;
    document.getElementById('modalVenue').textContent = ev.venue;
    document.getElementById('modalType').textContent = ev.type;
    document.getElementById('modalDesc').textContent = ev.desc;
    document.getElementById('modalStatus').textContent = 'Status: ' + ev.status;
    modal.classList.add('active');
  });

  modalClose.addEventListener('click', function () { modal.classList.remove('active'); });
  modal.addEventListener('click', function (e) { if (e.target === modal) modal.classList.remove('active'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') modal.classList.remove('active'); });

  render('upcoming');
})();