import{S as p,N as v,K as L,A as f,a as h,i as x}from"./assets/vendor-9e0fbed3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const I=document.querySelector(".about-swipper"),N=document.querySelector(".about-swiper-next-button"),u=new p(I,{modules:[v,L],navigation:{nextEl:N},loop:!0,direction:"horizontal",watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},spaceBetween:0,breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});u.update();const k=document.querySelector(".swiper-slide:first-child");k.style.backgroundColor="rgb(237, 59, 68)";u.on("slideChangeTransitionStart",()=>{const e=u.activeIndex,t=u.slides[e-1];t&&(t.style.backgroundColor="initial");const o=u.slides[e];o.style.backgroundColor="rgb(237, 59, 68)"});new f(".about-education",{duration:600,collapse:!0,openOnInit:[0],showMultiple:!0,onOpen:()=>{aboutArr.classList.add("rotate")},onClose:()=>{aboutArr.classList.remove("rotate")}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".about-education-list").forEach(t=>{t.addEventListener("click",function(){const o=this.querySelector(".about-arrow"),r=this.querySelector(".text-acordion");o.classList.toggle("rotate"),r.classList.toggle("visually-hidden")})}),new f(".faq-section",{duration:400,showFirstItem:!1})});async function O(){const o="https://portfolio-js.b.goit.study/api/reviews";return(await h.get(o)).data}async function M(e){const r="https://portfolio-js.b.goit.study/api/requests";return(await h.post(r,e)).data}const C=document.querySelector(".content"),g=document.querySelectorAll(".marquee__line");function P(e){return e.getBoundingClientRect().y<0}window.addEventListener("scroll",e=>{P(C)?g.forEach(t=>t.classList.add("animate-block")):g.forEach(t=>t.classList.remove("animate-block"))});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-accordion").forEach(t=>{t.addEventListener("click",function(){const o=this.querySelector(".faq-arrow"),r=this.nextElementSibling;o.classList.toggle("rotate"),r.classList.toggle("visually-hidden")})}),new f(".faq-section",{duration:400,showFirstItem:!1})});(()=>{const e={openMenuBtn:document.querySelector("[data-menuBTN-open]"),closeMenuBtn:document.querySelector("[data-menuBTN-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuLIst:document.querySelector("[data-menu-list]"),orderBTN:document.querySelector("[data-orderBTN]"),menuInput:document.querySelector("[data-menu-input]"),menuItem:document.querySelector("[data-menu-item]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuLIst.addEventListener("click",t),e.orderBTN.addEventListener("click",t),e.menuItem.addEventListener("click",o);function t(){e.menuLIst.classList.remove("is-open"),e.menu.classList.toggle("is-open"),e.body.classList.toggle("no-scroll"),e.orderBTN.classList.remove("is-open")}function o(){e.menuInput.checked=!1}window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.menu.classList.remove("is-open"),e.body.classList.remove("no-scroll"))})})();p.use([v,L]);const T=document.querySelector(".swiper-project"),c=document.querySelector(".projects-next-btn"),a=document.querySelector(".projects-prev-btn");a.addEventListener("click",function(){S.slidePrev()});c.addEventListener("click",function(){S.slideNext()});const S=new p(T,{preventInteractionOnTransition:!0,navigation:{nextEl:c,prevEl:a},keyboard:{enabled:!0,onlyInViewport:!0}}),A=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});A.observe(c,{attributes:!0});const R=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});R.observe(a,{attributes:!0});const q=document.querySelector(".reviews-main-list"),V=document.querySelector(".reviews-swiper"),l=document.querySelector(".reviews-next-btn"),d=document.querySelector(".reviews-prev-btn");function _({avatar_url:e,author:t,review:o}){return`<li class="reviews-item swiper-slide">
            
              <img class="reviews-avatar" src="${e}" alt="" width="48" height="48" />
              <h3 class="reviews-item-title">${t}</h3>
              <p class="reviews-item-text">
                ${o}
              </p>
           
          </li>`}function D(e){return e.map(_).join("")}function j(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),q.appendChild(e)}document.addEventListener("DOMContentLoaded",$);async function $(){try{const e=await O(),t=D(e);q.insertAdjacentHTML("beforeend",t)}catch(e){console.error("Error occurred while fetching reviews:",e),j(),x.info({close:!1,position:"topRight",message:"Sorry, an error occurred while fetching reviews. Please try later!"})}}new p(V,{modules:[v],slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:4,spaceBetween:16}},direction:"horizontal",navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},disabledClass:".swiper-button-disabled"});const z=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});z.observe(l,{attributes:!0});const F=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(d.classList.contains("swiper-button-disabled")?(d.style.opacity="0.5",d.style.cursor="not-allowed"):(d.style.opacity="1",d.style.cursor="pointer"))})});F.observe(d,{attributes:!0});const b=document.querySelector(".footer-modal"),m=document.getElementById("cooperation-comment-form"),i=document.getElementById("email"),K=document.getElementById("comment");m.addEventListener("submit",async function(e){if(e.preventDefault(),B(i.value)&&K.value.trim()!==""){const t=m.elements.email.value,o=m.elements.comment.value;await M({email:t,comment:o});try{Z(),m.reset()}catch{console.log(err)}}});function B(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function Z(){B(i.value)?(i.style.borderBottomColor="#3cbc81",i.nextElementSibling.style.color="#3cbc81",i.nextElementSibling.textContent="Success!"):(i.style.borderBottomColor="#e74a3b",i.nextElementSibling.style.color="#e74a3b",i.nextElementSibling.textContent="Invalid email, try again"),b.classList.remove("visually-hidden"),document.body.style.background="rgba(15, 15, 16, 0.6)",setTimeout(()=>{b.classList.add("visually-hidden"),document.body.style.background=""},5e3)}const H=document.querySelector(".footer-close-btn"),E=document.querySelector(".footer-modal");H.addEventListener("click",w);E.addEventListener("click",function(e){e.target===E&&w()});document.addEventListener("keydown",function(e){e.key==="Escape"&&w()});function w(){b.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map