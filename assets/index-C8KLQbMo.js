(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const i=document.querySelector("[data-ua]"),a=document.querySelector("[data-ru]"),d=document.querySelector("[data-ua-mob]"),l=document.querySelector("[data-ru-mob]"),o=document.querySelector("[data-overlay]"),u=document.querySelector(".js-menu-container"),c=document.querySelector(".js-form-container"),y=document.querySelector(".js-open-menu"),_=document.querySelector(".js-open-form"),g=document.querySelector(".js-close-form"),L=document.querySelector(".contactForm"),f=document.querySelector(".form__wrap"),v=document.querySelector(".form__success");a.addEventListener("click",()=>{i.classList.remove("active"),a.classList.add("active")});l.addEventListener("click",()=>{d.classList.remove("active"),l.classList.add("active")});i.addEventListener("click",()=>{a.classList.remove("active"),i.classList.add("active")});d.addEventListener("click",()=>{l.classList.remove("active"),d.classList.add("active")});window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&u.classList.remove("is__open")});y.addEventListener("click",()=>{c.classList.remove("is__open"),o.classList.remove("backdrop"),u.classList.toggle("is__open")});_.addEventListener("click",()=>{u.classList.remove("is__open"),c.classList.toggle("is__open"),o.classList.toggle("backdrop")});g.addEventListener("click",()=>{c.classList.remove("is__open"),document.body.classList.remove("backdrop"),o.classList.remove("backdrop")});L.addEventListener("submit",s=>{s.preventDefault(),f.classList.add("send"),v.classList.remove("send"),setTimeout(()=>{c.classList.remove("is__open"),v.classList.add("send"),o.classList.toggle("backdrop")},1e3),setTimeout(()=>{L.reset(),f.classList.remove("send")},2e3)});
