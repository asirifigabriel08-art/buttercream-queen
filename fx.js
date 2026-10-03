(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = $('.hero');

  // ---- WebGL shader: flowing caramel / rose silk with gold glints ----
  const initShader = () => {
    const cv = document.createElement('canvas');
    cv.id = 'hero-fx'; cv.setAttribute('aria-hidden', 'true');
    const gl = cv.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' });
    if (!gl) return;
    const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const fs = `precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/r;float asp=r.x/r.y;vec2 p=uv*vec2(asp,1.)*2.2;
  vec2 q=vec2(fbm(p+t*.05),fbm(p+vec2(5.2,1.3)-t*.04));
  float f=fbm(p+2.*q+m*.35);
  vec3 cream=vec3(.969,.925,.867),rose=vec3(.914,.725,.71),caramel=vec3(.85,.63,.4),gold=vec3(.89,.79,.56);
  vec3 c=mix(cream,rose,smoothstep(.3,.7,f)*.5);
  c=mix(c,caramel,smoothstep(.55,.95,q.x)*.4);
  vec2 g=uv*vec2(asp,1.)*26.;vec2 id=floor(g);vec2 gf=fract(g)-.5;
  float s=step(.986,h(id))*(.5+.5*sin(t*1.4+h(id+3.)*6.28))*smoothstep(.28,0.,length(gf));
  c+=gold*s;
  gl_FragColor=vec4(c,1.);}`;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
    gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p');
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(pr, 'r'), uT = gl.getUniformLocation(pr, 't'), uM = gl.getUniformLocation(pr, 'm');
    hero.prepend(cv);

    const scale = Math.min(devicePixelRatio || 1, 1.5) * .6;
    const size = () => { cv.width = Math.max(1, hero.clientWidth * scale | 0); cv.height = Math.max(1, hero.clientHeight * scale | 0); gl.viewport(0, 0, cv.width, cv.height); };
    size(); addEventListener('resize', size);
    let mx = 0, my = 0, tx = 0, ty = 0, visible = true, raf = 0;
    hero.addEventListener('pointermove', e => { const b = hero.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width - .5; ty = .5 - (e.clientY - b.top) / b.height; });
    const draw = now => {
      mx += (tx - mx) * .05; my += (ty - my) * .05;
      gl.uniform2f(uR, cv.width, cv.height); gl.uniform1f(uT, now / 1000); gl.uniform2f(uM, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = now => { draw(now); raf = visible && !document.hidden ? requestAnimationFrame(loop) : 0; };
    if (reduced) { draw(2000); return; }
    const resume = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop); };
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; resume(); }).observe(hero);
    document.addEventListener('visibilitychange', resume);
    raf = requestAnimationFrame(loop);
  };
  if (hero) { try { initShader(); } catch (_) { /* CSS gradient fallback stays */ } }

  // ---- 3D tilt on the hero card ----
  const card = $('.featured-card');
  if (card && !reduced && matchMedia('(hover: hover)').matches) {
    const zone = $('.hero-visual');
    zone.addEventListener('pointermove', e => {
      const b = card.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateZ(0)`;
    });
    zone.addEventListener('pointerleave', () => { card.style.transform = ''; });
  }

  // ---- Motion (Framer Motion's vanilla engine) ----
  import('https://cdn.jsdelivr.net/npm/motion@11/+esm').then(({ animate, scroll, inView, stagger }) => {
    if (reduced) { $$('.uline').forEach(u => u.style.transform = 'none'); return; }

    animate($$('.hero-copy > *'), { opacity: [0, 1], y: [28, 0] }, { delay: stagger(.12, { startDelay: .5 }), duration: .8, ease: [.22, 1, .36, 1] });
    animate('.hero-photo', { opacity: [0, 1] }, { delay: .3, duration: 1.2 });

    const heroImg = $('.hero-photo img');
    if (heroImg && hero) scroll(animate(heroImg, { y: [0, 60], scale: [1.02, 1.1] }, { ease: 'linear' }), { target: hero, offset: ['start start', 'end start'] });

    $$('.stat-block').forEach(el => { el.style.opacity = 0; });
    const stats = $('.stats-grid');
    if (stats) inView(stats, () => { animate($$('.stat-block'), { opacity: [0, 1], y: [24, 0] }, { delay: stagger(.1), duration: .7 }); });

    $$('.uline').forEach(u => inView(u, () => { animate(u, { transform: ['scaleX(0)', 'scaleX(1)'] }, { duration: 1, delay: .3, ease: [.22, 1, .36, 1] }); u.style.transform = 'scaleX(1)'; }));

    const burst = host => {
      for (let i = 0; i < 8; i++) {
        const s = document.createElement('i'); s.className = 'sparkle';
        s.style.left = 10 + Math.random() * 80 + '%'; s.style.top = 45 + Math.random() * 45 + '%';
        host.appendChild(s);
        animate(s, { y: [0, -50 - Math.random() * 50], x: [0, (Math.random() - .5) * 30], opacity: [0, 1, 0], scale: [.3, 1, .3], rotate: [0, 120] }, { duration: 1 + Math.random() * .7, delay: i * .06 }).then(() => s.remove());
      }
    };
    const seen = new WeakMap();
    document.addEventListener('mouseover', e => {
      const ph = e.target.closest && e.target.closest('.card .ph');
      if (!ph || performance.now() - (seen.get(ph) || 0) < 1400) return;
      seen.set(ph, performance.now()); burst(ph);
    });

    window.bqFx = {
      added(btn) {
        animate(btn, { scale: [1, 1.2, .96, 1] }, { duration: .5 });
        const ph = btn.closest('.card').querySelector('.ph'); if (ph) burst(ph);
      }
    };
  }).catch(() => { $$('.stat-block').forEach(el => { el.style.opacity = 1; }); $$('.uline').forEach(u => { u.style.transform = 'none'; }); });
})();
