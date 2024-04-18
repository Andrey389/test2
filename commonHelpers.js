import{S as b,N as w,K as S,A as g,a as q,i as k}from"./assets/vendor-9e0fbed3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const N=document.querySelector(".about-swipper"),O=document.querySelector(".about-swiper-next-button"),i=new b(N,{modules:[w,S],navigation:{nextEl:O},loop:!0,direction:"horizontal",watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},spaceBetween:0,breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});i.update();const C=document.querySelector(".swiper-slide-item");C.style.backgroundColor="rgb(237, 59, 68)";i.on("slideChangeTransitionStart",()=>{const e=i.activeIndex,t=i.slides[e-1];t&&(t.style.backgroundColor="initial");const o=i.slides[e];console.log(o),o.style.backgroundColor="rgb(237, 59, 68)"});let d=0;const p=document.querySelectorAll(".swiper-slide-item");i.on("slideChangeTransitionStart",()=>{const e=i.activeIndex,t=i.slides[e-1];t&&(t.style.backgroundColor="initial");const o=i.slides[e+1];o&&(console.log(o),p[d]&&(p[d].style.backgroundColor="initial"),d=(d+1)%p.length,p[d]&&(p[d].style.backgroundColor="rgb(237, 59, 68)"))});new g(".about-education",{duration:600,collapse:!0,openOnInit:[0],showMultiple:!0,onOpen:()=>{aboutArr.classList.add("rotate")},onClose:()=>{aboutArr.classList.remove("rotate")}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".about-education-list").forEach(t=>{t.addEventListener("click",function(){const o=this.querySelector(".about-arrow"),s=this.querySelector(".text-acordion");o.classList.toggle("rotate"),s.classList.toggle("visually-hidden")})}),new g(".faq-section",{duration:400,showFirstItem:!1})});async function M(){const o="https://portfolio-js.b.goit.study/api/reviews";return(await q.get(o)).data}async function P(e){const s="https://portfolio-js.b.goit.study/api/requests";return(await q.post(s,e)).data}const T=document.querySelector(".content"),h=document.querySelectorAll(".marquee__line");function A(e){return e.getBoundingClientRect().y<0}window.addEventListener("scroll",e=>{A(T)?h.forEach(t=>t.classList.add("animate-block")):h.forEach(t=>t.classList.remove("animate-block"))});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-accordion").forEach(t=>{t.addEventListener("click",function(){const o=this.querySelector(".faq-arrow"),s=this.nextElementSibling;o.classList.toggle("rotate"),s.classList.toggle("visually-hidden")})}),new g(".faq-section",{duration:400,showFirstItem:!1})});(()=>{const e={openMenuBtn:document.querySelector("[data-menuBTN-open]"),closeMenuBtn:document.querySelector("[data-menuBTN-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuLIst:document.querySelector("[data-menu-list]"),orderBTN:document.querySelector("[data-orderBTN]"),menuInput:document.querySelector("[data-menu-input]"),menuItem:document.querySelector("[data-menu-item]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuLIst.addEventListener("click",t),e.orderBTN.addEventListener("click",t),e.menuItem.addEventListener("click",o);function t(){e.menuLIst.classList.remove("is-open"),e.menu.classList.toggle("is-open"),e.body.classList.toggle("no-scroll"),e.orderBTN.classList.remove("is-open")}function o(){e.menuInput.checked=!1}window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.menu.classList.remove("is-open"),e.body.classList.remove("no-scroll"))})})();b.use([w,S]);const R=document.querySelector(".swiper-project"),l=document.querySelector(".projects-next-btn"),a=document.querySelector(".projects-prev-btn");a.addEventListener("click",function(){B.slidePrev()});l.addEventListener("click",function(){B.slideNext()});const B=new b(R,{preventInteractionOnTransition:!0,navigation:{nextEl:l,prevEl:a},keyboard:{enabled:!0,onlyInViewport:!0}}),V=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});V.observe(l,{attributes:!0});const _=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});_.observe(a,{attributes:!0});const x=document.querySelector(".reviews-main-list"),D=document.querySelector(".reviews-swiper"),u=document.querySelector(".reviews-next-btn"),m=document.querySelector(".reviews-prev-btn");function j({avatar_url:e,author:t,review:o}){return`<li class="reviews-item swiper-slide">
            
              <img class="reviews-avatar" src="${e}" alt="" width="48" height="48" />
              <h3 class="reviews-item-title">${t}</h3>
              <p class="reviews-item-text">
                ${o}
              </p>
           
          </li>`}function $(e){return e.map(j).join("")}function z(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),x.appendChild(e)}document.addEventListener("DOMContentLoaded",F);async function F(){try{const e=await M(),t=$(e);x.insertAdjacentHTML("beforeend",t)}catch(e){console.error("Error occurred while fetching reviews:",e),z(),k.info({close:!1,position:"topRight",message:"Sorry, an error occurred while fetching reviews. Please try later!"})}}new b(D,{modules:[w],slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:4,spaceBetween:16}},direction:"horizontal",navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},disabledClass:".swiper-button-disabled"});const K=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(u.classList.contains("swiper-button-disabled")?(u.style.opacity="0.5",u.style.cursor="not-allowed"):(u.style.opacity="1",u.style.cursor="pointer"))})});K.observe(u,{attributes:!0});const Z=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(m.classList.contains("swiper-button-disabled")?(m.style.opacity="0.5",m.style.cursor="not-allowed"):(m.style.opacity="1",m.style.cursor="pointer"))})});Z.observe(m,{attributes:!0});const f=document.querySelector(".footer-modal"),y=document.getElementById("cooperation-comment-form"),c=document.getElementById("email"),H=document.getElementById("comment");y.addEventListener("submit",async function(e){if(e.preventDefault(),I(c.value)&&H.value.trim()!==""){const t=y.elements.email.value,o=y.elements.comment.value;await P({email:t,comment:o});try{U(),y.reset()}catch{console.log(err)}}});function I(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function U(){I(c.value)?(c.style.borderBottomColor="#3cbc81",c.nextElementSibling.style.color="#3cbc81",c.nextElementSibling.textContent="Success!"):(c.style.borderBottomColor="#e74a3b",c.nextElementSibling.style.color="#e74a3b",c.nextElementSibling.textContent="Invalid email, try again"),f.classList.remove("visually-hidden"),document.body.style.background="rgba(15, 15, 16, 0.6)",setTimeout(()=>{f.classList.add("visually-hidden"),document.body.style.background=""},5e3)}const G=document.querySelector(".footer-close-btn"),L=document.querySelector(".footer-modal");G.addEventListener("click",E);L.addEventListener("click",function(e){e.target===L&&E()});document.addEventListener("keydown",function(e){e.key==="Escape"&&E()});function E(){f.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
