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
  const card = (x, tag) => `<article class="card" data-t="${x.t}"><button class="open" type="button"><div class="ph"><span class="badge">Made to order</span><img src="${x.src}" alt="${x.a}" loading="lazy" width="600" height="750"></div><div class="body"><span class="tag">${tag}</span><h3>${x.t}</h3><p>${x.d}</p></div></button><button class="add" type="button" aria-label="Add ${x.t} to my order">+ Add to order</button></article>`;
  const picks = ['The Atelier Rose', 'Blush Garden', 'Champagne Silk', 'Coastal Dream', 'The Sculpted Muse', 'Velvet Muse', 'Cherry Cloud'];
  const track = $('#picks');
  track.innerHTML = picks.map(t => cakes.find(c => c.t === t)).map(c => card(c, c.c)).join('');
  const step = () => track.firstElementChild.getBoundingClientRect().width + 20;
  $('#picks-prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('#picks-next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  const grid = $('#cake-grid'), filters = $('#filters');
  const cats = ['All', ...new Set(cakes.map(c => c.c))];
  filters.innerHTML = cats.map((c, i) => `<button type="button" class="${i ? '' : 'active'}" aria-pressed="${!i}" data-c="${c}">${c}</button>`).join('');
  const mobile = matchMedia('(max-width: 699px)');
  let curCat = 'All', expanded = false;
  const render = cat => {
    if (cat !== curCat) expanded = false;
    curCat = cat;
    const all = cakes.filter(c => cat === 'All' || c.c === cat);
    const shown = expanded ? all : all.slice(0, mobile.matches ? 6 : 8);
    grid.innerHTML = shown.map(c => card(c, c.c)).join('');
    more.hidden = shown.length >= all.length;
  };
  const more = document.createElement('button');
  more.type = 'button'; more.className = 'btn outline more-btn'; more.textContent = 'Show more cakes'; more.hidden = true;
  grid.after(more);
  more.addEventListener('click', () => { expanded = true; render(curCat); });
  mobile.addEventListener('change', () => render(curCat));
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
  document.addEventListener('click', e => {
    const add = e.target.closest('.add');
    if (add) { addItem(add.closest('.card').dataset.t, add); return; }
    const open = e.target.closest('.open'); if (!open) return;
    const el = open.closest('.card');
    const x = cakes.find(c => c.t === el.dataset.t); lastFocus = open;
    modal.innerHTML = `<div class="m-box"><button class="m-close" type="button" aria-label="Close">×</button><img src="${x.src}" alt="${x.a}"><div class="m-info"><p class="label">${x.c}</p><h2>${x.t}</h2><p>${x.d}</p><a class="btn" href="#contact" data-close>Inquire About This Design</a></div></div>`;
    modal.hidden = false; document.body.classList.add('lock'); $('.m-close', modal).focus();
  });
  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.m-close') || e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (!cart.hidden) setCart(false); else if (!modal.hidden) closeModal(); else if (nav.classList.contains('open')) { setMenu(false); btn.focus(); } }
    if (e.key === 'Tab' && !modal.hidden) {
      const f = $$('button,a[href]', modal); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // classes panel
  const classes = [
    { level: 'Beginner Class', title: 'Sweet Beginnings', tag: 'No experience needed', desc: 'Start from the very first layer. Learn the foundations of beautiful buttercream cakes in a relaxed, hands-on session and take home a cake you made yourself.',
      learn: ['Baking and layering a stable cake', 'Silky buttercream, smooth and textured finishes', 'Piping rosettes, borders and shells', 'Simple floral and fruit decoration'],
      imgs: [['couture-3', 'Raspberry rose cupcake'], ['celebration-2', 'Buttercream cake with cherries'], ['couture-1', 'Piped rosette cake'], ['floral-5', 'Daisy layer cake'], ['celebration-7', 'Sprinkle cake with candles'], ['couture-5', 'Bowl of pastel macarons']] },
    { level: 'Masterclass', title: 'The Couture Masterclass', tag: 'For confident bakers', desc: 'Go further with the techniques behind tiered, floral and sculptural showpiece cakes. Work at a professional level and design cakes that stop a room.',
      learn: ['Tiered cake structure and stacking', 'Hand-modelled sugar flowers and fresh florals', 'Ganache sculpting and drip finishes', 'Styling cakes for weddings and destinations'],
      imgs: [['wedding-1', 'Tall tiered wedding cake'], ['wedding-3', 'Wedding cake covered in sugar flowers'], ['floral-1', 'Pink floral tiered cake'], ['sculptural-2', 'White chocolate drip cake'], ['wedding-5', 'Tiered cake with roses'], ['destination-1', 'Tiered cake with berries']] }
  ];
  const cmodal = $('#classes-modal');
  $('#cm-list').innerHTML = classes.map((c, n) => {
    return `<article class="cm-class${n % 2 ? ' rev' : ''}"><div class="cm-info"><span class="cm-badge">${c.level}</span><h3>${c.title}</h3><p class="cm-tag">${c.tag}</p><p>${c.desc}</p><ul>${c.learn.map(l => `<li>${l}</li>`).join('')}</ul><button class="btn" type="button" data-book="${c.level}">Book this class <span aria-hidden="true">&rarr;</span></button></div><div class="cm-gallery"><div class="cm-main"><img src="${C}${c.imgs[0][0]}.jpg" alt="${c.imgs[0][1]}"></div><div class="cm-thumbs">${c.imgs.map(([i, a], k) => `<button type="button" class="${k ? '' : 'on'}" data-src="${C}${i}.jpg" data-alt="${a}" aria-label="${a}"><img src="${C}${i}.jpg" alt="" loading="lazy"></button>`).join('')}</div></div></article>`;
  }).join('');
  $('#cm-list').addEventListener('click', e => {
    const b = e.target.closest('.cm-thumbs button'); if (!b) return;
    const g = b.closest('.cm-gallery'), main = $('.cm-main img', g);
    $$('button', g).forEach(x => x.classList.toggle('on', x === b));
    main.classList.add('swap');
    setTimeout(() => { main.src = b.dataset.src; main.alt = b.dataset.alt; main.classList.remove('swap'); }, 180);
  });
  let clsFocus = null;
  const setClasses = open => {
    cmodal.hidden = !open;
    document.body.classList.toggle('lock', open);
    if (open) { clsFocus = document.activeElement; $('.cm-close', cmodal).focus(); cmodal.scrollTop = 0; $('.cm-sheet', cmodal).scrollTop = 0; }
    else if (clsFocus) clsFocus.focus();
  };
  document.addEventListener('click', e => {
    if (e.target.closest('[data-classes]')) { e.preventDefault(); setMenu(false); setClasses(true); }
    else if (!cmodal.hidden && (e.target === cmodal || e.target.closest('.cm-close'))) setClasses(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!bmodal.hidden) setBook(false); else if (!cmodal.hidden) setClasses(false);
  });

  // class booking form -> WhatsApp
  // Paste the owner's CallMeBot API key below to send bookings automatically.
  const AUTO = { phone: '233244834478', apikey: '', web3formsKey: '' };
  const bmodal = $('#book-modal'), bform = $('#book-form'), bstatus = $('#book-status');
  const setBook = open => { bmodal.hidden = !open; if (open) { bmodal.scrollTop = 0; bstatus.textContent = ''; } };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-book]');
    if (b) { $('#b-class').value = b.dataset.book; $$('[data-bf]', bform).forEach(s => s.textContent = ''); setBook(true); $('#b-name').focus(); return; }
    if (e.target === bmodal || e.target.closest('#book-close')) setBook(false);
  });
  bform.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(bform), v = k => (f.get(k) || '').toString().trim();
    const errs = {
      name: v('name') ? '' : 'Please enter your name.',
      phone: /^[+\d][\d\s()-]{6,}$/.test(v('phone')) ? '' : 'Please enter a valid phone number.',
      email: !v('email') || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email')) ? '' : 'Please enter a valid email.',
      people: +v('people') >= 1 ? '' : 'Enter at least 1.'
    };
    let first = null;
    Object.entries(errs).forEach(([k, m]) => { $(`[data-bf="${k}"]`, bform).textContent = m; if (m && !first) first = $(`[name="${k}"]`, bform); });
    if (first) { first.focus(); return; }
    const lines = [`Hello Buttercream Queen, I'd like to book a class.`, '', `Class: ${v('class')}`, `Name: ${v('name')}`, `Phone: ${v('phone')}`];
    if (v('email')) lines.push(`Email: ${v('email')}`);
    if (v('date')) lines.push(`Preferred date: ${v('date')}`);
    lines.push(`People: ${v('people')}`);
    if (v('note')) lines.push(`Note: ${v('note')}`);
    const text = lines.join('\n');
    const done = $('.bf-done', bform);
    const success = () => { $('#book-msg').textContent = "Your booking request has been sent. We'll message you on WhatsApp very soon to confirm your seat."; $('#book-again').hidden = true; bform.classList.add('sent'); $('#book-success').hidden = false; bform.reset(); $('#b-people').value = 1; };
    const viaWhatsApp = () => {
      const url = `https://wa.me/${AUTO.phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener');
      $('#book-msg').textContent = 'WhatsApp has opened with your booking details. Press Send in WhatsApp to finish.';
      const again = $('#book-again'); again.href = url; again.hidden = false;
      bform.classList.add('sent'); $('#book-success').hidden = false; bform.reset(); $('#b-people').value = 1;
    };
    if (AUTO.web3formsKey) {
      done.disabled = true; done.textContent = 'Sending...';
      fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ access_key: AUTO.web3formsKey, subject: `New class booking: ${v('class')}`, from_name: 'Buttercream Queen website', name: v('name'), phone: v('phone'), email: v('email') || undefined, message: text }) })
        .then(r => r.json()).then(j => { if (j.success) success(); else viaWhatsApp(); }).catch(viaWhatsApp)
        .finally(() => { done.disabled = false; done.textContent = 'Done'; });
      return;
    }
    if (!AUTO.apikey) { viaWhatsApp(); return; }
    done.disabled = true; done.textContent = 'Sending...';
    fetch(`https://api.callmebot.com/whatsapp.php?phone=${AUTO.phone}&text=${encodeURIComponent(text)}&apikey=${AUTO.apikey}`, { mode: 'no-cors' })
      .then(success).catch(viaWhatsApp)
      .finally(() => { done.disabled = false; done.textContent = 'Done'; });
  });
  $('#book-ok').addEventListener('click', () => { bform.classList.remove('sent'); $('#book-success').hidden = true; setBook(false); });

  // homepage tiles pre-select a category
  $$('.tile[data-cat]').forEach(t => t.addEventListener('click', () => {
    const b = $(`button[data-c="${t.dataset.cat}"]`, filters); if (b) b.click();
  }));

  // order list (mini cart)
  const WA = '233244834478', KEY = 'bq-order';
  let order = []; try { order = JSON.parse(localStorage.getItem(KEY)) || []; } catch (_) { }
  const cart = $('#cart'), cartBtn = $('#cart-btn'), list = $('#cart-list');
  const saveOrder = () => { try { localStorage.setItem(KEY, JSON.stringify(order)); } catch (_) { } };
  const renderCart = () => {
    $('#cart-count').textContent = order.length;
    cartBtn.classList.toggle('has-items', order.length > 0);
    list.innerHTML = order.map((t, i) => `<li><span>${t}</span><button type="button" data-rm="${i}" aria-label="Remove ${t}">&times;</button></li>`).join('');
    $('#cart-empty').hidden = order.length > 0;
    $('#cart-wa').disabled = !order.length;
  };
  const setCart = open => { cart.hidden = !open; cartBtn.setAttribute('aria-expanded', open); };
  const addItem = (t, el) => {
    if (!order.includes(t)) order.push(t);
    saveOrder(); renderCart();
    if (el) { el.textContent = 'Yum. Added \u2713'; setTimeout(() => el.textContent = '+ Add to order', 1500); if (window.bqFx) window.bqFx.added(el); }
    cartBtn.classList.remove('pop'); void cartBtn.offsetWidth; cartBtn.classList.add('pop');
    const img = el && el.closest('.card').querySelector('img');
    if (img && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const a = img.getBoundingClientRect(), b = cartBtn.getBoundingClientRect();
      const fly = document.createElement('img');
      fly.src = img.src; fly.alt = ''; fly.className = 'fly';
      fly.style.cssText = `left:${a.left}px;top:${a.top}px;width:${a.width}px;height:${a.height}px`;
      document.body.appendChild(fly);
      requestAnimationFrame(() => {
        fly.style.transform = `translate(${b.left + b.width / 2 - a.left - a.width / 2}px,${b.top + b.height / 2 - a.top - a.height / 2}px) scale(.08)`;
        fly.style.opacity = '.4';
      });
      setTimeout(() => fly.remove(), 800);
    }
    cartBtn.classList.toggle('has-items', order.length > 0);
  };
  cartBtn.addEventListener('click', () => setCart(cart.hidden));
  $('#cart-close').addEventListener('click', () => setCart(false));
  list.addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (!b) return; order.splice(+b.dataset.rm, 1); saveOrder(); renderCart(); });
  const addCustom = () => {
    const inp = $('#cart-custom'), v = inp.value.trim();
    if (!v) return;
    order.push(v); inp.value = ''; saveOrder(); renderCart();
  };
  $('#cart-custom-add').addEventListener('click', addCustom);
  $('#cart-custom').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addCustom(); } });
  $('#cart-wa').addEventListener('click', () => {
    const name = $('#cart-name').value.trim(), st = $('#cart-status');
    if (!name) { st.textContent = 'Please enter your name.'; $('#cart-name').focus(); return; }
    const phone = $('#cart-phone').value.trim(), date = $('#cart-date').value;
    const msg = `Hello Buttercream Queen, please add me to the order waitlist.\n\nName: ${name}${phone ? '\nPhone: ' + phone : ''}${date ? '\nDate needed: ' + date : ''}\n\nOrder:\n${order.map(t => '- ' + t).join('\n')}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    st.textContent = 'You are on the waitlist. Send the WhatsApp message to confirm.';
    order = []; saveOrder(); renderCart();
  });
  $('#cart-form').addEventListener('click', () => {
    const m = $('#f-message'); if (order.length) m.value = `I'm interested in: ${order.join(', ')}.`;
    setCart(false);
  });
  renderCart();

  // instagram marquee
  const igPics = ['wedding-1', 'floral-1', 'celebration-1', 'couture-4', 'destination-1', 'sculptural-1', 'wedding-3', 'celebration-4', 'couture-1', 'floral-3'];
  const igSet = igPics.map(i => `<a href="https://www.instagram.com/buttercreamqueen_ghana/" target="_blank" rel="noopener noreferrer" tabindex="-1"><img src="${C}${i}.jpg" alt="" loading="lazy" width="240" height="300"></a>`).join('');
  $('#marquee').innerHTML = `<div class="marquee-track">${igSet}${igSet}</div>`;

  // newsletter (front-end only)
  $('#news').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#n-email').value.trim();
    $('#n-status').textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Thank you. You are on the list.' : 'Please enter a valid email.';
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
