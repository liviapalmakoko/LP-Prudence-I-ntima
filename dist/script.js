const content=window.PRUDENCE_CONTENT;
let currentSlide=0;
function changeSlide(index){
 currentSlide=(index+content.banners.length)%content.banners.length;
 const slide=content.banners[currentSlide];
 const img=document.getElementById('banner-image');
 document.getElementById('banner-mobile').srcset=slide.mobile||slide.desktop;
 img.src=slide.desktop;img.alt=slide.alt;
 document.getElementById('banner-caption').textContent=slide.caption;
 document.getElementById('banner-link').href=slide.href;
 const cta=document.getElementById('banner-cta');cta.href=slide.href;cta.textContent=slide.cta;
 document.getElementById('slide-count').textContent=String(currentSlide+1).padStart(2,'0')+' / '+String(content.banners.length).padStart(2,'0');
 document.querySelectorAll('[data-slide]').forEach((button,i)=>{if(i===currentSlide)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current')});
}
document.getElementById('previous').addEventListener('click',()=>changeSlide(currentSlide-1));
document.getElementById('next').addEventListener('click',()=>changeSlide(currentSlide+1));
document.querySelectorAll('[data-slide]').forEach(button=>button.addEventListener('click',()=>changeSlide(Number(button.dataset.slide))));
document.querySelector('.campaign').addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();changeSlide(currentSlide-1)}if(event.key==='ArrowRight'){event.preventDefault();changeSlide(currentSlide+1)}});
// Deslize horizontal no celular troca o banner; toques e rolagem vertical seguem normais.
let touchStartX=0,touchStartY=0,swiped=false;
const campaignBanner=document.getElementById('banner-link');
campaignBanner.addEventListener('touchstart',event=>{touchStartX=event.touches[0].clientX;touchStartY=event.touches[0].clientY;swiped=false},{passive:true});
campaignBanner.addEventListener('touchend',event=>{const dx=event.changedTouches[0].clientX-touchStartX,dy=event.changedTouches[0].clientY-touchStartY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.5){swiped=true;changeSlide(currentSlide+(dx<0?1:-1))}},{passive:true});
campaignBanner.addEventListener('click',event=>{if(swiped){event.preventDefault();swiped=false}});
changeSlide(0);
const menu=document.querySelector('.menu'),nav=document.getElementById('main-nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
function mountVideo(frame,item){
 if(!item||!item.src)return;
 const video=document.createElement('video');video.src=item.src;video.controls=true;video.preload='metadata';video.playsInline=true;video.setAttribute('aria-label',item.title||'Vídeo Prudence Íntima');if(item.poster)video.poster=item.poster;
 frame.replaceChildren(video);
}
mountVideo(document.getElementById('tutorial-media'),content.videos.tutorial);
content.videos.creators.forEach((item,i)=>mountVideo(document.querySelector(`[data-creator="${i}"]`),item));
content.retailers.forEach(item=>{const link=document.createElement('a');link.href=item.url;link.target='_blank';link.rel='noopener';if(item.logo){const img=document.createElement('img');img.src=item.logo;img.alt=item.name;link.append(img)}const div=document.createElement('div'),name=document.createElement('strong'),description=document.createElement('span'),arrow=document.createElement('span');name.textContent=item.name;description.textContent=item.description;arrow.textContent='Visitar a loja ↗';div.append(name,description);link.append(div,arrow);document.getElementById('retailer-list').append(link)});
const dialog=document.getElementById('privacy-dialog');document.getElementById('privacy-open').addEventListener('click',()=>dialog.showModal());dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});

// Movimento editorial: entradas únicas e animações apenas nas áreas visíveis.
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets=document.querySelectorAll('.section-heading,.product-copy,.product-portrait,.benefit-grid article,.tutorial-layout,.creator-grid article,.table-scroll,.faq-list,.journal-masthead,.blog-grid article,.purchase-grid article');
const motionTargets=document.querySelectorAll('.kv-decoration,.product-portrait,.media-frame,.benefit-drawing');
const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(({target,isIntersecting})=>{
  if(!isIntersecting)return;
  if(!motionPreference.matches){
   const siblings=[...target.parentElement.children];
   const delay=target.matches('article')?Math.min(siblings.indexOf(target)*85,240):0;
   target.animate([{opacity:.35,translate:'0 22px'},{opacity:1,translate:'0 0'}],{duration:650,delay,easing:'cubic-bezier(.2,.65,.3,1)'});
  }
  revealObserver.unobserve(target);
 });
},{threshold:.12});
revealTargets.forEach(target=>revealObserver.observe(target));
const visibilityObserver=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>target.classList.toggle('motion-visible',isIntersecting)),{rootMargin:'40px'});
motionTargets.forEach(target=>visibilityObserver.observe(target));

// Produto acompanha a rolagem e o cursor sem simular ângulos inexistentes.
const productStage=document.querySelector('.product-portrait');
const productImage=productStage.querySelector('img');
let pointerX=0,pointerY=0,productFrame=0;
function paintProduct(){
 productFrame=0;
 if(motionPreference.matches){productStage.style.removeProperty('--product-turn');productStage.style.removeProperty('--pointer-x');productStage.style.removeProperty('--pointer-y');return}
 const rect=productStage.getBoundingClientRect();
 const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));
 productStage.style.setProperty('--product-turn',`${-87+(progress-.5)*70}deg`);
 productStage.style.setProperty('--pointer-x',`${pointerX*9+pointerY*5}deg`);
 productStage.style.setProperty('--pointer-y',`${-pointerY*12}deg`);
}
function queueProduct(){if(!productFrame)productFrame=requestAnimationFrame(paintProduct)}
productStage.addEventListener('pointermove',event=>{
 if(event.pointerType==='touch')return;
 const rect=productStage.getBoundingClientRect();
 pointerX=(event.clientX-rect.left)/rect.width*2-1;
 pointerY=(event.clientY-rect.top)/rect.height*2-1;
 queueProduct();
});
productStage.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;queueProduct()});
addEventListener('scroll',queueProduct,{passive:true});
addEventListener('resize',queueProduct);
motionPreference.addEventListener('change',queueProduct);
queueProduct();
