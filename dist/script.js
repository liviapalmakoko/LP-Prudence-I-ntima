const content=window.PRUDENCE_CONTENT;
let currentSlide=0;
const mobileBanner=matchMedia('(max-width: 700px)');
function updateBannerAlt(){
 const slide=content.banners[currentSlide];
 document.getElementById('banner-image').alt=(mobileBanner.matches&&slide.mobileAlt)||slide.alt;
}
mobileBanner.addEventListener('change',updateBannerAlt);
function changeSlide(index){
 currentSlide=(index+content.banners.length)%content.banners.length;
 const slide=content.banners[currentSlide];
 const img=document.getElementById('banner-image');
 document.getElementById('banner-mobile').srcset=slide.mobile||slide.desktop;
 img.src=slide.desktop;updateBannerAlt();
 const link=document.getElementById('banner-link');
 link.href=slide.href;
 link.classList.toggle('banner-link--photo',Boolean(slide.editorial));
 link.classList.toggle('banner-link--wipes',slide.kind==='wipes');
 document.getElementById('banner-wipes').hidden=slide.kind!=='wipes';
 document.getElementById('banner-editorial').hidden=!slide.editorial;
 if(slide.editorial){
  document.getElementById('banner-title-lead').textContent=slide.editorial.lead;
  document.getElementById('banner-title-accent').textContent=slide.editorial.accent;
  document.getElementById('banner-description').textContent=slide.editorial.description||'';
 }
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
 frame.classList.add('has-video');
 const video=document.createElement('video');video.src=item.src;video.controls=true;video.preload='metadata';video.playsInline=true;video.setAttribute('aria-label',item.title||'Vídeo Prudence Íntima');if(item.poster)video.poster=item.poster;
 frame.replaceChildren(video);
}
mountVideo(document.getElementById('tutorial-media'),content.videos.tutorial);
content.videos.creators.forEach((item,i)=>mountVideo(document.querySelector(`[data-creator="${i}"]`),item));
const dialog=document.getElementById('privacy-dialog');document.getElementById('privacy-open').addEventListener('click',()=>dialog.showModal());dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});

// Movimento editorial: entradas únicas e animações apenas nas áreas visíveis.
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets=document.querySelectorAll('.section-heading,.product-copy,.product-portrait,.benefit-grid article,.tutorial-layout,.creator-grid article,.table-scroll,.faq-list,.journal-masthead,.blog-grid article,.purchase-grid article');
const motionTargets=document.querySelectorAll('.media-frame,.benefit-drawing');
const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(({target,isIntersecting})=>{
  if(!isIntersecting)return;
  if(!motionPreference.matches && target.matches('.product-portrait')){
   target.classList.add('product-entered');
  }else if(!motionPreference.matches){
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

// Menu compacto e localização atual, inclusive ao navegar por âncoras.
const header=document.querySelector('.site-header');
const sectionLinks=[...document.querySelectorAll('.site-header a[href^="#"]')]
 .filter(a=>a.hash && a.hash!=='#inicio')
 .map(link=>({link,section:document.querySelector(link.hash)}))
 .filter(item=>item.section)
 .sort((a,b)=>a.section.compareDocumentPosition(b.section)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);
let scrollPending=false;
function updateNavigation(){
 header.classList.toggle('is-compact',window.scrollY>80);
 const offset=header.getBoundingClientRect().bottom+64;
 let active=null;
 for(const item of sectionLinks){if(item.section.getBoundingClientRect().top<=offset)active=item.link;}
 sectionLinks.forEach(({link})=>{if(link===active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
 scrollPending=false;
}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateNavigation);}},{passive:true});
window.addEventListener('resize',updateNavigation);
window.addEventListener('pageshow',updateNavigation);
updateNavigation();
// name oferece exclusividade nativa; o evento mantém compatibilidade com navegadores antigos.
const questions=[...document.querySelectorAll('.faq-list details')];
questions.forEach(question=>question.addEventListener('toggle',()=>{
 if(question.open)questions.forEach(other=>{if(other!==question)other.open=false;});
}));

// Reserva a maior resposta para que o enquadramento não mude a cada abertura.
const faqSection=document.querySelector('.faq-section');
const faqContent=document.querySelector('.faq-content');
let faqMeasuredWidth=0;
function stabilizeFaqPhoto(){
 if(!faqContent)return;
 const width=faqContent.getBoundingClientRect().width;
 if(window.innerWidth<=700){
  faqSection.style.removeProperty('--faq-reserved-height');
  faqMeasuredWidth=0;
  return;
 }
 if(Math.abs(width-faqMeasuredWidth)<.5)return;
 faqMeasuredWidth=width;
 const measure=faqContent.cloneNode(true);
 measure.querySelectorAll('[id],[name]').forEach(node=>{node.removeAttribute('id');node.removeAttribute('name');});
 measure.style.cssText=`position:absolute;visibility:hidden;pointer-events:none;width:${width}px;min-height:0;inset:0 auto auto 0;`;
 const answers=[...measure.querySelectorAll('details')];
 answers.forEach(answer=>answer.open=false);
 faqContent.parentElement.append(measure);
 let height=measure.getBoundingClientRect().height;
 answers.forEach(answer=>{
  answer.open=true;
  height=Math.max(height,measure.getBoundingClientRect().height);
  answer.open=false;
 });
 measure.remove();
 faqSection.style.setProperty('--faq-reserved-height',`${Math.ceil(height)}px`);
}
new ResizeObserver(stabilizeFaqPhoto).observe(faqContent);
document.fonts.ready.then(()=>{faqMeasuredWidth=0;stabilizeFaqPhoto();});
