/* ============ DATA ============ */
const projects = [
  {
    title: "SafeEar — Audio Deepfake Detection",
    desc: "A from-scratch reimplementation of the SafeEar speech deepfake detector, rebuilt twice to probe its architecture.",
    tags: ["PyTorch","PyTorch Lightning","Hydra","SpeechTokenizer","ASVspoof"],
    visual: "wave",
    sub: "Reimplementing and extending a speech deepfake detection system to understand — and question — its architecture.",
    blocks: [
      ["Problem","Detecting synthetic and manipulated speech is central to defending against audio deepfakes, but published detection systems are usually described at the architecture-diagram level, without a runnable reference implementation. Understanding one properly means rebuilding it."],
      ["Approach","Started with a literal from-scratch reimplementation of SafeEar in standard PyTorch — environment setup, data pipelines, the RVQ codec, loss functions, and evaluation scripts — to establish a faithful working baseline. Then rebuilt it a second time using PyTorch Lightning 2.x and Hydra for configuration, swapping in more modern components (SpeechTokenizer, SEANet, Snake1d activations, Conformer-style blocks) to make experimentation faster."],
      ["Architecture","<span class='ph'>Add an architecture diagram here — encoder → RVQ codec → Bi-LSTM bottleneck → classifier head.</span>"],
      ["Implementation","Environment and dependency management across PyTorch versions, resolving conda/pip conflicts, downloading HuBERT and SpeechTokenizer weights, and preparing the ASVspoof dataset — all set up and run on Kali Linux."],
      ["Results","<span class='ph'>Add benchmark numbers once evaluation is finalized.</span> Currently exploring architectural changes around the Bi-LSTM bottleneck flagged in the original paper."],
      ["What I Learned","Reimplementing a paper surfaces every detail the paper leaves out — codec quantization choices, loss weighting, and dataset quirks mattered more than the headline architecture diagram suggested."]
    ],
    links: [["GitHub ↗","#"],["Paper reference ↗","#"]]
  },
  {
    title: "Shadow Stack & CFI Checker",
    desc: "A control-flow-integrity checker built with Intel PIN, from first principles to ROP-chain detection.",
    tags: ["C / C++","Intel PIN","Computer Architecture","Security"],
    visual: "stack",
    sub: "Instruction-level instrumentation to catch return-oriented-programming attacks as they happen.",
    blocks: [
      ["Problem","Return-oriented programming (ROP) attacks hijack a program's own instructions by corrupting the call stack. Catching them means watching control flow at the instruction level, not just the source level."],
      ["Approach","Built a shadow stack and CFI checker using the Intel PIN dynamic instrumentation tool for a computer architecture course project — starting with zero prior familiarity with PIN and working up to a working detector."],
      ["Architecture","<span class='ph'>Add an instrumentation pipeline diagram here.</span>"],
      ["Implementation","Instruction-level hooks track call/return pairs against a shadow stack, flagging mismatches consistent with ROP chains, alongside profiling to measure the instrumentation's performance overhead."],
      ["Results","<span class='ph'>Add detection-accuracy and overhead numbers once benchmarked.</span>"],
      ["What I Learned","Working at the instrumentation level made the gap between 'the CPU executes instructions' and 'the program has structure' very concrete — CFI is really about reconstructing intent from raw execution."]
    ],
    links: [["GitHub ↗","#"]]
  },
  {
    title: "Compiler Optimization Visualizer",
    desc: "A Streamlit app that walks through CFG-based compiler passes step by step.",
    tags: ["Python","Streamlit","Compilers","CFG"],
    visual: "cfg",
    sub: "Making dead-code elimination and constant propagation visible, one pass at a time.",
    blocks: [
      ["Problem","Optimization passes like constant propagation, folding, and dead-code elimination are usually taught on paper. Seeing them run on an actual control-flow graph makes the intuition click much faster."],
      ["Approach","Built a Streamlit-based web app that performs live variable analysis and CFG-based optimization passes, visualizing each transformation directly on the graph."],
      ["Architecture","<span class='ph'>Add a pass-pipeline diagram here.</span>"],
      ["Implementation","Custom CFG construction, a live-variable analysis pass, and constant-propagation / folding / dead-code-elimination passes, each rendered incrementally as they run."],
      ["Results","<span class='ph'>Add screenshots or example programs once selected.</span>"],
      ["What I Learned","Building the visualizer was as much about representing graph state cleanly as it was about the optimization logic itself."]
    ],
    links: [["GitHub ↗","#"]]
  },
  {
    title: "Cache Memory Simulator",
    desc: "A browser-based cache simulator built from scratch to make associativity and replacement policy tangible.",
    tags: ["HTML","JavaScript","Computer Architecture"],
    visual: "cache",
    sub: "A trace-driven simulator for building real intuition about cache behavior.",
    blocks: [
      ["Problem","Cache behavior — associativity, AMAT, LRU, write policies — is easy to compute on an exam and hard to build real intuition for without watching it happen."],
      ["Approach","Built a cache memory simulator from scratch in HTML/JS, running configurable cache parameters against a trace of memory accesses."],
      ["Architecture","<span class='ph'>Add a simulator architecture diagram here.</span>"],
      ["Implementation","Configurable set-associativity, LRU replacement, and write policies, with a running visualization of hits, misses, and evictions as the trace plays out."],
      ["Results","<span class='ph'>Add example trace outputs once selected.</span>"],
      ["What I Learned","The simulator turned out to be a good tool for my own exam prep — building it was itself a way of studying cache systems."]
    ],
    links: [["GitHub ↗","#"]]
  }
];

const ecosystem = {
  programming: { label:"Programming", desc:"The languages I reach for depending on how close to the metal a problem needs to sit.", chips:["C","C++","Python","JavaScript","SQL"] },
  systems: { label:"Systems", desc:"Caches, pipelines, page tables, and the OS layer underneath everything else.", chips:["Linux","Operating Systems","Computer Architecture","Networking"] },
  ai: { label:"AI & ML", desc:"Mostly spent on audio deepfake detection — codecs, tokenizers, and sequence models.", chips:["PyTorch","Transformers","Audio Processing","Deep Learning"] },
  security: { label:"Cybersecurity", desc:"Control-flow integrity, CTF forensics, and steganography on the side.", chips:["Web Security","Digital Forensics","Network Security","Vulnerability Analysis"] },
  tools: { label:"Tools", desc:"The daily toolkit for building, breaking, and debugging all of the above.", chips:["Git","Docker","Wireshark","Nmap","VS Code","Linux"] }
};

/* ============ NAV ============ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{
  nav.classList.toggle('nav--scrolled', window.scrollY > 30);
});

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mobileMenu.classList.remove('open')));

/* ============ REVEAL ============ */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('is-visible'); io.unobserve(en.target); }
  });
},{threshold:.15});
document.querySelectorAll('[data-reveal]').forEach(el=> io.observe(el));

/* ============ MAGNETIC BUTTONS ============ */
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove', e=>{
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.22}px, ${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave', ()=> btn.style.transform = 'translate(0,0)');
});

/* ============ HERO WAVEFORM ============ */
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let W,H,DPR;
function resizeCanvas(){
  DPR = Math.min(window.devicePixelRatio||1, 2);
  W = canvas.clientWidth; H = canvas.clientHeight;
  canvas.width = W*DPR; canvas.height = H*DPR;
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let mx=0.5, my=0.4;
window.addEventListener('mousemove', e=>{
  mx = e.clientX / window.innerWidth;
  my = e.clientY / window.innerHeight;
});

let t = 0;
function drawWave(){
  t += reduceMotion ? 0.004 : 0.014;
  ctx.clearRect(0,0,W,H);
  const midY = H*0.55;

  // synthetic / noisy trace
  ctx.beginPath();
  for(let x=0;x<=W;x+=5){
    const p = x/W;
    const noise = Math.sin(p*46 + t*3.2) + Math.sin(p*111 + t*5.1)*0.5;
    const amp = 8 + my*14;
    const y = midY + noise*amp*0.5 + Math.sin(p*7+t)*5;
    x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  }
  ctx.strokeStyle = 'rgba(120,126,138,0.4)';
  ctx.lineWidth = 1.4;
  ctx.stroke();

  // clean / real signal trace
  ctx.beginPath();
  for(let x=0;x<=W;x+=5){
    const p = x/W;
    const phase = t + mx*2.4;
    const amp = 22 + my*34;
    const envelope = Math.sin(Math.min(p*Math.PI,Math.PI));
    const y = midY + Math.sin(p*9 + phase)*amp*envelope;
    x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  }
  ctx.strokeStyle = '#2F5DFF';
  ctx.lineWidth = 2.1;
  ctx.shadowColor = 'rgba(47,93,255,0.35)';
  ctx.shadowBlur = 14;
  ctx.stroke();
  ctx.shadowBlur = 0;

  requestAnimationFrame(drawWave);
}
drawWave();

/* ============ LIVE TIMELINE SCROLL PROGRESS ============ */
const timelineEls = Array.from(document.querySelectorAll('.timeline')).map(tl=>{
  const progress = document.createElement('div');
  progress.className = 'timeline__progress';
  const liveDot = document.createElement('div');
  liveDot.className = 'timeline__live-dot';
  tl.appendChild(progress);
  tl.appendChild(liveDot);
  return { tl, progress, liveDot, items: Array.from(tl.querySelectorAll('.timeline-item')) };
});

function updateTimelines(){
  const anchor = window.innerHeight * 0.5; // "current scroll position" reference line
  timelineEls.forEach(({tl, progress, liveDot, items})=>{
    const rect = tl.getBoundingClientRect();
    const trackTop = rect.top + 6;
    const trackHeight = rect.height - 12;
    if(trackHeight <= 0) return;
    const filled = Math.max(0, Math.min(trackHeight, anchor - trackTop));
    const ratio = filled / trackHeight;
    progress.style.height = filled + 'px';
    liveDot.style.top = filled + 'px';
    liveDot.style.opacity = (ratio > 0.005 && ratio < 0.995) ? '1' : '0';

    items.forEach(item=>{
      const itemRect = item.getBoundingClientRect();
      const dotY = itemRect.top + 40;
      item.classList.toggle('is-active', dotY <= anchor);
    });
  });
}

let tlTicking = false;
window.addEventListener('scroll', ()=>{
  if(!tlTicking){
    requestAnimationFrame(()=>{ updateTimelines(); tlTicking = false; });
    tlTicking = true;
  }
}, { passive:true });
window.addEventListener('resize', updateTimelines);
updateTimelines();

/* ============ TECHNICAL ECOSYSTEM ============ */
const ecoNodes = document.querySelectorAll('.eco__node');
const ecoDesc = document.getElementById('ecoDesc');
const ecoChips = document.getElementById('ecoChips');

function setEco(key){
  ecoNodes.forEach(n=> n.classList.toggle('active', n.dataset.key===key));
  const data = ecosystem[key];
  ecoDesc.textContent = data.desc;
  ecoChips.innerHTML = data.chips.map(c=>`<span class="eco__chip">${c}</span>`).join('');
  requestAnimationFrame(()=>{
    ecoChips.querySelectorAll('.eco__chip').forEach((c,i)=> setTimeout(()=> c.classList.add('show'), i*40));
  });
}
ecoNodes.forEach(n=> n.addEventListener('mouseenter', ()=> setEco(n.dataset.key)));
ecoNodes.forEach(n=> n.addEventListener('click', ()=> setEco(n.dataset.key)));
setEco('ai');

/* ============ PROJECT VISUALS (small canvas sketches) ============ */
function drawMiniVisual(canvasEl, type){
  const c = canvasEl.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio||1,2);
  const w = canvasEl.clientWidth, h = canvasEl.clientHeight;
  canvasEl.width = w*dpr; canvasEl.height = h*dpr;
  c.setTransform(dpr,0,0,dpr,0,0);
  c.clearRect(0,0,w,h);
  c.strokeStyle = '#2F5DFF'; c.fillStyle = '#2F5DFF';

  if(type==='wave'){
    c.beginPath();
    for(let x=0;x<=w;x+=4){ const p=x/w; const y=h/2+Math.sin(p*14)*h*0.28*Math.sin(p*Math.PI); x===0?c.moveTo(x,y):c.lineTo(x,y); }
    c.lineWidth=2; c.stroke();
    c.beginPath();
    for(let x=0;x<=w;x+=4){ const p=x/w; const y=h/2+Math.sin(p*40)*h*0.1; x===0?c.moveTo(x,y):c.lineTo(x,y); }
    c.strokeStyle='rgba(120,126,138,0.5)'; c.lineWidth=1; c.stroke();
  } else if(type==='stack'){
    const n=6, bw=w*0.35, bh=h*0.11, x0=w*0.32;
    for(let i=0;i<n;i++){
      c.strokeStyle = i===2 ? '#2F5DFF' : 'rgba(120,126,138,0.5)';
      c.lineWidth = i===2 ? 2 : 1;
      c.strokeRect(x0, h*0.08 + i*(bh+4), bw, bh);
    }
  } else if(type==='cfg'){
    const pts = [[w*0.5,h*0.12],[w*0.25,h*0.45],[w*0.75,h*0.45],[w*0.5,h*0.85]];
    c.strokeStyle='rgba(120,126,138,0.5)'; c.lineWidth=1;
    c.beginPath(); c.moveTo(...pts[0]); c.lineTo(...pts[1]); c.moveTo(...pts[0]); c.lineTo(...pts[2]);
    c.moveTo(...pts[1]); c.lineTo(...pts[3]); c.moveTo(...pts[2]); c.lineTo(...pts[3]); c.stroke();
    pts.forEach((p,i)=>{ c.fillStyle = i===0?'#2F5DFF':'rgba(120,126,138,0.6)'; c.beginPath(); c.arc(p[0],p[1],5,0,7); c.fill(); });
  } else if(type==='cache'){
    const cols=8, rows=3, gap=4, cw=(w-gap*(cols-1))/cols, ch=(h-gap*(rows-1))/rows;
    for(let r=0;r<rows;r++) for(let cIdx=0;cIdx<cols;cIdx++){
      const hit = (r*cols+cIdx)%5===0;
      c.strokeStyle = hit ? '#2F5DFF' : 'rgba(120,126,138,0.4)';
      c.lineWidth = hit ? 2 : 1;
      c.strokeRect(cIdx*(cw+gap), r*(ch+gap), cw, ch);
    }
  }
}

/* ============ RENDER PROJECT LIST ============ */
const projectList = document.getElementById('projectList');
projects.forEach((p, i)=>{
  const row = document.createElement('div');
  row.className = 'project-row';
  row.innerHTML = `
    <div class="project-row__index">0${i+1}</div>
    <div>
      <div class="project-row__title">${p.title}</div>
      <div class="project-row__desc">${p.desc}</div>
      <div class="project-row__tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="project-row__cta">View Case Study ↗</div>
    </div>
    <div class="project-row__visual"><canvas class="mini-canvas"></canvas></div>
  `;
  row.addEventListener('click', ()=> openCaseStudy(i));
  projectList.appendChild(row);
  const mc = row.querySelector('.mini-canvas');
  requestAnimationFrame(()=> drawMiniVisual(mc, p.visual));
});

/* ============ CUSTOM CURSOR (scoped to Projects) ============ */
const viewCursor = document.getElementById('viewCursor');
const workSection = document.getElementById('work');
workSection.addEventListener('mousemove', e=>{
  viewCursor.style.left = e.clientX+'px';
  viewCursor.style.top = e.clientY+'px';
});
document.querySelectorAll('.project-row').forEach(row=>{
  row.addEventListener('mouseenter', ()=> viewCursor.classList.add('active'));
  row.addEventListener('mouseleave', ()=> viewCursor.classList.remove('active'));
});

/* ============ CASE STUDY OVERLAY ============ */
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');
const overlayClose = document.getElementById('overlayClose');

function openCaseStudy(i){
  const p = projects[i];
  overlayContent.innerHTML = `
    <div class="eyebrow" style="margin-bottom:20px;">SELECTED WORK — 0${i+1}</div>
    <h2 class="overlay__title">${p.title}</h2>
    <p class="overlay__sub">${p.sub}</p>
    ${p.blocks.map((b,idx)=>`
      <div class="case-block">
        <span class="case-block__num">0${idx+1} — ${b[0].toUpperCase()}</span>
        <h4>${b[0]}</h4>
        <p>${b[1]}</p>
      </div>
    `).join('')}
    <div class="case-links">${p.links.map(l=>`<a href="${l[1]}" class="btn magnetic">${l[0]}</a>`).join('')}</div>
  `;
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');
  overlay.scrollTop = 0;
  overlayContent.querySelectorAll('.magnetic').forEach(btn=>{
    btn.addEventListener('mousemove', e=>{
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.22}px, ${(e.clientY-r.top-r.height/2)*0.35}px)`;
    });
    btn.addEventListener('mouseleave', ()=> btn.style.transform='translate(0,0)');
  });
}
function closeCaseStudy(){
  overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}
overlayClose.addEventListener('click', closeCaseStudy);
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeCaseStudy(); });
