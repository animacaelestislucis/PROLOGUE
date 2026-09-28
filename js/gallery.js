/* ========== PROLOGUE — Gallery with lightbox ========== */
(function () {
  var GALLERY = [
    { src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=800&fit=crop', caption: 'Reading session in the library', cat: 'reading' },
    { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=450&fit=crop', caption: 'Books stacked and waiting', cat: 'reading' },
    { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop', caption: 'Creative writing workshop', cat: 'creative' },
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop', caption: 'Community gathering', cat: 'community' },
    { src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=750&fit=crop', caption: 'Poetry evening', cat: 'events' },
    { src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=450&fit=crop', caption: 'Book discussion circle', cat: 'events' },
    { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop', caption: 'Library corner', cat: 'reading' },
    { src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&h=500&fit=crop', caption: 'Art & literature collab', cat: 'creative' }
  ];

  var grid = document.getElementById('galleryGrid');
  var filterBar = document.getElementById('galleryFilters');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var currentIndex = 0;
  var currentData = [];

  function render(filter) {
    var list = filter === 'all' ? GALLERY : GALLERY.filter(function (g) { return g.cat === filter; });
    currentData = list;
    grid.innerHTML = list.map(function (g, i) {
      return ''
        + '<div class="gallery-item" data-index="' + i + '">'
        + '  <img src="' + g.src + '" alt="' + g.caption + '" loading="lazy">'
        + '  <div class="gallery-caption">'
        + '    <span class="cat-label">' + g.cat + '</span>'
        + '    ' + g.caption
        + '  </div>'
        + '</div>';
    }).join('');
  }

  filterBar.addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    render(btn.dataset.gfilter);
  });

  grid.addEventListener('click', function (e) {
    var item = e.target.closest('.gallery-item');
    if (!item) return;
    currentIndex = parseInt(item.dataset.index, 10);
    openLightbox();
  });

  function openLightbox() {
    var item = currentData[currentIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    lightbox.classList.add('active');
  }

  document.getElementById('lightboxClose').addEventListener('click', function () { lightbox.classList.remove('active'); });
  document.getElementById('lightboxPrev').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + currentData.length) % currentData.length;
    openLightbox();
  });
  document.getElementById('lightboxNext').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % currentData.length;
    openLightbox();
  });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.classList.remove('active'); });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') lightbox.classList.remove('active');
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });

  render('all');
})();