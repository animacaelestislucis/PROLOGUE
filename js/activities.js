/* ========== PROLOGUE — Activities page ========== */
(function () {
  var ACTIVITIES = [
    { icon: '📖', name: 'Weekly Reading Circles', desc: 'Bring a book, share a passage, and discuss in a relaxed setting.', cat: 'reading' },
    { icon: '✍️', name: 'Creative Writing Workshop', desc: 'Prompts, peer feedback, and a safe space to experiment with words.', cat: 'writing' },
    { icon: '🎤', name: 'Open Mic & Poetry Slam', desc: 'Share your poetry, stories, or spoken word on stage.', cat: 'performance' },
    { icon: '🧠', name: 'Literary Quiz', desc: 'Test your knowledge of books, authors, and literary history.', cat: 'reading' },
    { icon: '🎭', name: 'Drama & Skit Performances', desc: 'Adapt scenes from literature and bring characters to life.', cat: 'performance' },
    { icon: '🎨', name: 'Art & Literature Collab', desc: 'Visual responses to poems, stories, and novels.', cat: 'creative' },
    { icon: '🗣️', name: 'Debates & Discussions', desc: 'Structured conversations on themes from literature and beyond.', cat: 'performance' },
    { icon: '📜', name: 'Poetry Writing Meetups', desc: 'Read, write, and appreciate poetry in all forms.', cat: 'writing' },
    { icon: '📚', name: 'Book of the Month Discussion', desc: 'A deep dive into our monthly featured read.', cat: 'reading' },
    { icon: '🎬', name: 'Literary Film Screenings', desc: 'Watch adaptations and discuss book-to-screen journeys.', cat: 'creative' }
  ];

  var grid = document.getElementById('activitiesGrid');
  var filterBar = document.getElementById('activityFilters');
  if (!grid) return;

  function render(filter) {
    var list = filter === 'all' ? ACTIVITIES : ACTIVITIES.filter(function (a) { return a.cat === filter; });
    grid.innerHTML = list.map(function (a) {
      return ''
        + '<div class="card activity-card reveal visible">'
        + '  <span class="activity-icon">' + a.icon + '</span>'
        + '  <span class="cat-tag">' + a.cat + '</span>'
        + '  <h3>' + a.name + '</h3>'
        + '  <p>' + a.desc + '</p>'
        + '</div>';
    }).join('');
  }

  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  }

  render('all');
})();