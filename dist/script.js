const content=window.PRUDENCE_CONTENT;
let currentSlide=0;
function changeSlide(index){
 currentSlide=(index+content.banners.length)%content.banners.length;
 const slide=content.banners[currentSlide],copy=document.querySelector('.hero-copy');
 document.getElementById('hero-label').textContent=slide.label;
 document.getElementById('hero-title').innerHTML=slide.title;
 document.getElementById('hero-description').textContent=slide.description;
 document.querySelector('.hero').dataset.slide=slide.kind;document.querySelector('.hero-wipes').hidden=slide.kind!=='wipes';document.getElementById('hero-image').hidden=slide.kind==='wipes';document.querySelector('.product-name').hidden=slide.kind==='wipes';document.querySelector('.product-caption').hidden=slide.kind==='wipes';
 const cta=document.getElementById('hero-cta');cta.textContent=slide.cta;cta.href=slide.href;
 document.getElementById('slide-count').textContent='0'+(currentSlide+1)+' / 03';
 document.querySelectorAll('.dots button[data-slide]').forEach((button,i)=>{button.classList.toggle('active',i===currentSlide);if(i===currentSlide)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');});
 copy.classList.remove('banner-enter');void copy.offsetWidth;copy.classList.add('banner-enter');
}
document.getElementById('previous').addEventListener('click',()=>changeSlide(currentSlide-1));
document.getElementById('next').addEventListener('click',()=>changeSlide(currentSlide+1));
document.querySelectorAll('.dots button[data-slide]').forEach(button=>button.addEventListener('click',()=>changeSlide(Number(button.dataset.slide))));

changeSlide(0);
const menu=document.querySelector('.menu'),nav=document.querySelector('header nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}));document.addEventListener('keydown',event=>{if(event.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
content.retailers.forEach(retailer=>{const link=document.createElement('a');link.href=retailer.url;link.target='_blank';link.rel='noopener';const info=document.createElement('div'),name=document.createElement('strong'),description=document.createElement('small'),label=document.createElement('b');name.textContent=retailer.name;description.textContent=retailer.description;label.textContent='Visitar a loja';info.append(name,description);link.append(info,label);document.getElementById('retailer-list').append(link)});
const dialog=document.getElementById('privacy-dialog');document.getElementById('privacy-open').addEventListener('click',()=>dialog.showModal());dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
if(content.videos.tutorial){const stage=document.querySelector('.video-stage');stage.replaceChildren();const video=document.createElement('video');video.controls=true;video.preload='metadata';video.src=content.videos.tutorial;video.style.width='100%';stage.append(video)}
content.videos.creators.forEach((item,index)=>{const card=document.querySelectorAll('.story-grid article')[index];if(!card||!item.src)return;card.replaceChildren();card.classList.add('has-video');const video=document.createElement('video');video.src=item.src;video.controls=true;video.preload='metadata';video.setAttribute('aria-label',item.title||'Experiência com Prudence Infinity');if(item.poster)video.poster=item.poster;card.append(video)});
