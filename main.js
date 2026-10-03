(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const C = 'assets/cakes/';
  const cakes = [
    { t: 'The Atelier Rose', c: 'Wedding Cakes', i: 'wedding-1', d: 'A tall tiered centerpiece dressed in ivory and blush florals.', a: 'Tall white tiered wedding cake with flowers' },
    { t: 'Rustic Bloom Two-Tier', c: 'Wedding Cakes', i: 'wedding-2', d: 'A soft, romantic two-tier finished with natural blooms.', a: 'Two-tier wedding cake with flowers' },
    { t: 'Champagne Silk', c: 'Luxury Celebration Cakes', i: 'celebration-1', d: 'A polished pink drip cake for milestone celebrations.', a: 'Pink drip celebration cake' },
    { t: 'Cherry Cloud', c: 'Luxury Celebration Cakes', i: 'celebration-2', d: 'Whipped buttercream crowned with fresh cherries.', a: 'Buttercream cake topped with cherries' },
    { t: 'Blush Garden', c: 'Floral Cakes', i: 'floral-1', d: 'Hand-placed florals cascading over delicate tiers.', a: 'Pink floral tiered cake' },
    { t: 'Wild Bloom', c: 'Floral Cakes', i: 'floral-2', d: 'Buttercream finished with a loose, garden-picked bouquet.', a: 'Buttercream cake with flowers' },
    { t: 'The Sculpted Muse', c: 'Sculptural Cakes', i: 'sculptural-1', d: 'Ganache shaped into flowing, sculptural movement.', a: 'Chocolate ganache swirl cake' },
    { t: 'Ganache Cascade', c: 'Sculptural Cakes', i: 'sculptural-2', d: 'A dramatic white chocolate drip with architectural lines.', a: 'White chocolate drip cake' },
    { t: 'Velvet Muse', c: 'Couture Cakes', i: 'couture-1', d: 'Piped rosettes in a refined couture palette.', a: 'Mint buttercream rosette cake' },
    { t: 'Confetti Atelier', c: 'Couture Cakes', i: 'couture-2', d: 'A playful, colour-rich design with a couture finish.', a: 'Colourful layered cake slice' },
    { t: 'Sugar Bloom Tapestry', c: 'Wedding Cakes', i: 'wedding-3', d: 'Hand-modelled sugar flowers covering every tier.', a: 'Wedding cake covered in colourful sugar flowers' },
    { t: 'The Ivory Tower', c: 'Wedding Cakes', i: 'wedding-4', d: 'Tall, pure white tiers with delicate ruffle detail.', a: 'Tall white tiered wedding cake' },
    { t: 'Rose Ribbon Tiers', c: 'Wedding Cakes', i: 'wedding-5', d: 'Cream tiers with a blush ribbon and fresh roses.', a: 'Tiered wedding cake with roses' },
    { t: 'Classic Ivory Three-Tier', c: 'Wedding Cakes', i: 'wedding-6', d: 'A timeless three-tier finished with a floral topper.', a: 'White three-tier wedding cake' },
    { t: 'Rustic Layered Romance', c: 'Wedding Cakes', i: 'wedding-7', d: 'A textured, rustic layered cake for relaxed weddings.', a: 'Rustic layered wedding cake' },
    { t: 'Citrus Crown', c: 'Luxury Celebration Cakes', i: 'celebration-3', d: 'Piped buttercream peaks with candied citrus.', a: 'Cake with buttercream and citrus slices' },
    { t: 'Pansy Petal Cake', c: 'Luxury Celebration Cakes', i: 'celebration-4', d: 'Edible pansies scattered across soft white frosting.', a: 'White cake topped with pansies' },
    { t: 'Golden Glow', c: 'Luxury Celebration Cakes', i: 'celebration-5', d: 'A warm, candlelit cake for an unforgettable toast.', a: 'Birthday cake with lit candles' },
    { t: 'Gerbera Wish', c: 'Luxury Celebration Cakes', i: 'celebration-6', d: 'A single candle and a bright bloom, simply styled.', a: 'Cake with candle and gerbera flower' },
    { t: 'Confetti Candle Cake', c: 'Luxury Celebration Cakes', i: 'celebration-7', d: 'Sprinkles and candles for a joyful milestone.', a: 'Sprinkle cake with candles' },
    { t: 'Fifteen in Bloom', c: 'Floral Cakes', i: 'floral-3', d: 'Pink drape and fresh blooms for a milestone birthday.', a: 'Pink floral birthday cake' },
    { t: 'Sunflower Halo', c: 'Floral Cakes', i: 'floral-4', d: 'A crown of yellow blooms on a dark, moody cake.', a: 'Cake topped with yellow flowers' },
    { t: 'Daisy Layer Cake', c: 'Floral Cakes', i: 'floral-5', d: 'Soft frosting with a single dramatic daisy.', a: 'Layer cake with a white daisy' },
    { t: 'Eucalyptus Naked Cake', c: 'Floral Cakes', i: 'floral-6', d: 'A semi-naked cake styled with greenery and wildflowers.', a: 'Naked cake beside a vase of flowers' },
    { t: 'Marigold Slice', c: 'Floral Cakes', i: 'floral-7', d: 'Chocolate-glazed layers with golden petals.', a: 'Chocolate cake slice with yellow flowers' },
    { t: 'Ganache Rosettes', c: 'Sculptural Cakes', i: 'sculptural-3', d: 'Chocolate rosettes piped in rich, sculpted rows.', a: 'Chocolate cake with piped rosettes' },
    { t: 'Cocoa Tart', c: 'Sculptural Cakes', i: 'sculptural-4', d: 'A precise, glossy chocolate tart with clean lines.', a: 'Chocolate tart with a slice removed' },
    { t: 'Dark Cocoa Swirl', c: 'Sculptural Cakes', i: 'sculptural-5', d: 'Hand-swirled chocolate frosting with depth and texture.', a: 'Chocolate frosted cake' },
    { t: 'Salted Caramel Layers', c: 'Sculptural Cakes', i: 'sculptural-6', d: 'Tall chocolate layers with ribbons of caramel.', a: 'Chocolate caramel cake slice' },
    { t: 'Midnight Chocolate', c: 'Sculptural Cakes', i: 'sculptural-7', d: 'A deep, dark chocolate cake finished with walnuts.', a: 'Dark chocolate cake with walnuts' },
    { t: 'Raspberry Rose Cupcake', c: 'Couture Cakes', i: 'couture-3', d: 'A single couture cupcake with a raspberry crown.', a: 'Pink cupcake with raspberries' },
    { t: 'Rose Macaron', c: 'Couture Cakes', i: 'couture-4', d: 'Delicate macarons styled with fresh roses.', a: 'Macarons with roses' },
    { t: 'Macaron Collection', c: 'Couture Cakes', i: 'couture-5', d: 'A curated bowl of pastel macarons.', a: 'Bowl of colourful macarons' },
    { t: 'Petit Four Table', c: 'Couture Cakes', i: 'couture-6', d: 'Jewel-like petit fours for a dessert table.', a: 'Tray of petit four cakes' },
    { t: 'Cherry Cheesecake', c: 'Couture Cakes', i: 'couture-7', d: 'A silky cheesecake slice with a chocolate drizzle.', a: 'Cheesecake slice with cherries' },
    { t: 'Garden Terrace Cake', c: 'Destination Cakes', i: 'destination-3', d: 'A white cake with a deep red rose, made for garden venues.', a: 'White cake with a red rose' },
    { t: 'Berry Tower', c: 'Destination Cakes', i: 'destination-4', d: 'Layers and berries on a mint cake stand.', a: 'Layered cake with berries on a cake stand' },
    { t: 'Summer Berry Pavlova', c: 'Destination Cakes', i: 'destination-5', d: 'A light, fruit-topped centerpiece for warm-weather events.', a: 'Pavlova topped with berries' },
    { t: 'Harvest Tart', c: 'Destination Cakes', i: 'destination-6', d: 'Fruit, nuts and cream on a rustic base.', a: 'Fruit and nut tart' },
    { t: 'Sunset Citrus Cake', c: 'Destination Cakes', i: 'destination-7', d: 'A golden sponge with orange, ideal for sunset receptions.', a: 'Orange cake with citrus slices' },    { t: 'Coastal Dream', c: 'Destination Cakes', i: 'destination-1', d: 'Fresh berries and greenery, designed for seaside celebrations.', a: 'Tiered cake with berries' },
    { t: 'Golden Hour', c: 'Destination Cakes', i: 'destination-2', d: 'A warm glazed finish made for sunset resort receptions.', a: 'Glazed orange cake' }
  ].map(x => ({ ...x, src: `${C}${x.i}.jpg` }));

  const articles = [
    ['The Rise of Floral Wedding Cakes', 'wedding-1', 'Why fresh and sugar florals are shaping modern celebration cakes.'],
    ['Destination Cake Design', 'destination-1', 'Designing cakes that suit resorts, villas and coastal settings.'],
    ['Choosing Your Wedding Cake', 'wedding-2', 'How to shape a centerpiece around your venue and florals.'],
    ['Luxury Cake Trends', 'couture-1', 'Textures, palettes and finishes defining couture cake design.'],
    ['Cake Florals, Explained', 'floral-2', 'What a cake florist does and why it changes the design.'],
    ['Sculptural Cake Design', 'sculptural-1', 'When a cake is shaped like art rather than dessert.']
  ];

  // preloader
  const pre = $('#preloader');
  const hidePre = () => pre && pre.classList.add('done');
  window.addEventListener('load', () => setTimeout(hidePre, 500));
  setTimeout(hidePre, 3000);
  $('#year').textContent = new Date().getFullYear();

  // header + menu
  const header = $('#header'), nav = $('#nav'), btn = $('#menu-btn');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const setMenu = open => {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('lock', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.textContent = open ? 'Close' : 'Menu';
  };
  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('resize', () => { if (innerWidth >= 1100) setMenu(false); });

  // cards
  const card = (x, tag) => `<button class="card" type="button" data-t="${x.t}"><div class="ph"><img src="${x.src}" alt="${x.a}" loading="lazy" width="600" height="750"></div><div class="body"><span class="tag">${tag}</span><h3>${x.t}</h3><p>${x.d}</p></div></button>`;
  const grid = $('#cake-grid'), filters = $('#filters');
  const cats = ['All', ...new Set(cakes.map(c => c.c))];
  filters.innerHTML = cats.map((c, i) => `<button type="button" class="${i ? '' : 'active'}" aria-pressed="${!i}" data-c="${c}">${c}</button>`).join('');
  const render = cat => { grid.innerHTML = cakes.filter(c => cat === 'All' || c.c === cat).map(c => card(c, c.c)).join(''); };
  render('All');
  filters.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', filters).forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
    render(b.dataset.c);
  });

  $('#journal-grid').innerHTML = articles.map(([t, i, d]) =>
    `<article class="card" style="cursor:default"><div class="ph"><img src="${C}${i}.jpg" alt="" loading="lazy" width="600" height="450"></div><div class="body"><span class="tag">Journal</span><h3>${t}</h3><p>${d}</p></div></article>`).join('');

  // modal
  const modal = $('#modal'); let lastFocus = null;
  const closeModal = () => { modal.hidden = true; document.body.classList.remove('lock'); lastFocus && lastFocus.focus(); };
  grid.addEventListener('click', e => {
    const el = e.target.closest('.card'); if (!el) return;
    const x = cakes.find(c => c.t === el.dataset.t); lastFocus = el;
    modal.innerHTML = `<div class="m-box"><button class="m-close" type="button" aria-label="Close">×</button><img src="${x.src}" alt="${x.a}"><div class="m-info"><p class="label">${x.c}</p><h2>${x.t}</h2><p>${x.d}</p><a class="btn" href="#contact" data-close>Inquire About This Design</a></div></div>`;
    modal.hidden = false; document.body.classList.add('lock'); $('.m-close', modal).focus();
  });
  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.m-close') || e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (!modal.hidden) closeModal(); else if (nav.classList.contains('open')) { setMenu(false); btn.focus(); } }
    if (e.key === 'Tab' && !modal.hidden) {
      const f = $$('button,a[href]', modal); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // reveal
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 }) : null;
  $$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  // form (front-end validation only; not sent anywhere)
  const form = $('#inquiry'), status = $('#form-status');
  const rules = {
    name: v => v.trim() ? '' : 'Please enter your name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email.',
    phone: v => !v || /^[+\d][\d\s()-]{6,}$/.test(v) ? '' : 'Please enter a valid phone number.',
    eventType: v => v ? '' : 'Please select an event type.',
    eventDate: v => v ? '' : 'Please choose a date.',
    location: v => v.trim() ? '' : 'Please enter the location.',
    guests: v => !v || +v > 0 ? '' : 'Guest count must be positive.',
    destination: v => v ? '' : 'Please choose Yes or No.',
    message: v => v.trim().length >= 10 ? '' : 'Please share a few details (10+ characters).'
  };
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form); let ok = true, firstBad = null;
    Object.entries(rules).forEach(([k, fn]) => {
      const msg = fn(data.get(k) || '');
      $(`[data-for="${k}"]`, form).textContent = msg;
      const field = form.elements[k]; const node = field && field.length ? field[0] : field;
      if (node && node.setAttribute) node.setAttribute('aria-invalid', !!msg);
      if (msg) { ok = false; firstBad = firstBad || node; }
    });
    if (!ok) { status.textContent = 'Please correct the highlighted fields.'; firstBad && firstBad.focus(); return; }
    status.textContent = 'Thank you. Your inquiry has been prepared.';
    form.reset();
  });
})();
