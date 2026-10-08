/* Luz suave e rotação do produto acompanhando a rolagem. */
(()=>{
 const hero=document.querySelector('.hero'),canvas=document.getElementById('fluid-bg');
 if(!hero||!canvas)return;
 const ctx=canvas.getContext('2d'),reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
 let w=0,h=0,x=.7,y=.4,tx=.7,ty=.4,frame=0,visible=false;
 function paint(){
  if(!ctx||!w)return;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#f6f0f2';ctx.fillRect(0,0,w,h);
  const glow=ctx.createRadialGradient(w*x,h*y,0,w*x,h*y,w*.7);
  glow.addColorStop(0,'#eec5d544');glow.addColorStop(.55,'#f3dee733');glow.addColorStop(1,'#f6f0f200');
  ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
 }
 function tick(){
  frame=0;if(!visible||document.hidden||reduce.matches)return;
  x+=(tx-x)*.045;y+=(ty-y)*.045;paint();
  if(Math.abs(x-tx)+Math.abs(y-ty)>.001)frame=requestAnimationFrame(tick);
 }
 function start(){if(!frame&&visible&&!document.hidden&&!reduce.matches)frame=requestAnimationFrame(tick);}
 new ResizeObserver(()=>{const r=hero.getBoundingClientRect();w=Math.min(r.width,1000);h=w*r.height/r.width;canvas.width=w;canvas.height=h;paint();}).observe(hero);
 new IntersectionObserver(e=>{visible=e[0].isIntersecting;start();}).observe(hero);
 hero.addEventListener('pointermove',e=>{if(!fine.matches)return;const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width;ty=(e.clientY-r.top)/r.height;start();});
 hero.addEventListener('pointerleave',()=>{tx=.7;ty=.4;start();});
 document.addEventListener('visibilitychange',start);
 reduce.addEventListener('change',()=>{cancelAnimationFrame(frame);frame=0;x=.7;y=.4;paint();});
 const product=document.querySelector('.product-section'),disc=document.querySelector('.immersive-disc');
 let scrollFrame=0;
 function rotateProduct(){
  scrollFrame=0;
  if(!product||!disc)return;
  if(reduce.matches){disc.style.transform='';return;}
  const r=product.getBoundingClientRect();
  const progress=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight+r.height)));
  disc.style.transform=`rotate(${-130+progress*180}deg)`;
 }
 function requestRotation(){if(!scrollFrame)scrollFrame=requestAnimationFrame(rotateProduct);}
 addEventListener('scroll',requestRotation,{passive:true});
 addEventListener('resize',requestRotation);
 reduce.addEventListener('change',rotateProduct);
 rotateProduct();
 const revealTargets=document.querySelectorAll('.section-top,.intro>div,.benefits article,.product-copy,.steps article,.story-grid article,.journal-card,.faq>div:first-child,.buy>div');
 if(!reduce.matches&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
  revealTargets.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',String(i%3*65)+'ms');observer.observe(el);});
  document.documentElement.classList.add('motion-ready');
  reduce.addEventListener('change',()=>{if(reduce.matches)revealTargets.forEach(el=>el.classList.add('visible'));});
 }
})();
