import{a as h,i as d,S as m}from"./assets/vendor-b4e87522.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const y="https://pixabay.com/api/",L="43029074-bbcb488b86e9977f1b5ed3d25",b=document.querySelector(".loader-container");let c=1;function w(){c=1}function _(){c++}async function u(s){try{let e=`${y}?key=${L}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${c}&per_page=15`;const a=await h.get(e);return _(),a}catch{d.error({message:err.message,backgroundColor:"#FC3D03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3}),b.classList.add("hidden")}}function g(s){return s.map(e=>`
      <li class="js-gallery-item">
      <a href="${e.largeImageURL}" alt="${e.tags}">
      <img width="300" src="${e.webformatURL}" alt="${e.tags}"/>
      <ul class="gallery__description-list gallery-description-list">
         <li class="gallery-description-list__item">
           <h3>Likes</h3>
           <p>${e.likes}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Views</h3>
           <p>${e.views}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Comments</h3>
           <p>${e.comments}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Downloads</h3>
           <p>${e.downloads}</p>
         </li>
       </ul>

      </a>
    
      </li>
      `).join("")}const t={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),spinner:document.querySelector(".loader-container"),btnLoadMore:document.querySelector(".btn-load_more")};let p=new m(".gallery a",{captions:!0,captionsData:"alt"}),l="";t.form.addEventListener("submit",C);t.btnLoadMore.addEventListener("click",M);window.addEventListener("wheel",$);async function C(s){s.preventDefault(),t.btnLoadMore.classList.add("btn-load_more-hidden"),w(),l=s.target.elements.request.value,t.spinner.classList.remove("hidden");const e=await u(l);if(e.data.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#FC3D03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3}),t.spinner.classList.add("hidden"),s.target.reset();return}t.btnLoadMore.classList.remove("btn-load_more-hidden"),t.gallery.innerHTML="",t.gallery.insertAdjacentHTML("afterbegin",g(e.data.hits)),p.refresh(),t.spinner.classList.add("hidden"),s.target.reset()}async function M(s){t.btnLoadMore.classList.add("btn-load_more-hidden"),t.spinner.classList.remove("hidden");const e=await u(l);if(t.btnLoadMore.classList.remove("btn-load_more-hidden"),t.gallery.insertAdjacentHTML("beforeend",g(e.data.hits)),p.refresh(),t.spinner.classList.add("hidden"),e.data.hits.length===0){d.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#FC3D03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3}),t.btnLoadMore.classList.add("btn-load_more-hidden");return}}function i(){if(t.gallery.children[0])return t.gallery.children[0].offsetHeight*2}function $(s){s.deltaY>0?i()&&window.scrollBy(0,i()):i()&&window.scrollBy(0,-i())}
//# sourceMappingURL=commonHelpers.js.map
