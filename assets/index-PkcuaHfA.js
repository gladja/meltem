(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))L(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&L(i)}).observe(document,{childList:!0,subtree:!0});function b(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function L(e){if(e.ep)return;e.ep=!0;const t=b(e);fetch(e.href,t)}})();const a=document.querySelector("[data-ua]"),l=document.querySelector("[data-ru]"),d=document.querySelector("[data-ua-mob]"),u=document.querySelector("[data-ru-mob]"),o=document.querySelector("[data-overlay]"),r=document.querySelector(".hero__wrap"),m=document.querySelector(".js-menu-container"),c=document.querySelector(".js-form-container"),_=document.querySelector(".js-open-menu"),g=document.querySelector(".js-open-form"),S=document.querySelector(".js-close-form"),p=document.querySelector(".contactForm"),v=document.querySelector(".form__wrap"),f=document.querySelector(".form__btn"),y=document.querySelector(".form__success");l.addEventListener("click",()=>{a.classList.remove("active"),l.classList.add("active")});u.addEventListener("click",()=>{d.classList.remove("active"),u.classList.add("active")});a.addEventListener("click",()=>{l.classList.remove("active"),a.classList.add("active")});d.addEventListener("click",()=>{u.classList.remove("active"),d.classList.add("active")});window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&m.classList.remove("is__open")});_.addEventListener("click",()=>{c.classList.remove("is__open"),o.classList.remove("backdrop"),r.classList.remove("backdrop"),m.classList.toggle("is__open")});g.addEventListener("click",()=>{m.classList.remove("is__open"),c.classList.toggle("is__open"),o.classList.toggle("backdrop"),r.classList.toggle("backdrop")});S.addEventListener("click",()=>{c.classList.remove("is__open"),document.body.classList.remove("backdrop"),o.classList.remove("backdrop"),r.classList.remove("backdrop")});p.addEventListener("submit",s=>{s.preventDefault(),v.classList.add("send"),f.classList.add("send"),y.classList.remove("send"),setTimeout(()=>{c.classList.remove("is__open"),y.classList.add("send"),o.classList.toggle("backdrop"),r.classList.toggle("backdrop")},1e3),setTimeout(()=>{p.reset(),v.classList.remove("send"),f.classList.remove("send")},2e3)});new Swiper(".mySwiper",{scrollbar:{el:".swiper-scrollbar"}});
