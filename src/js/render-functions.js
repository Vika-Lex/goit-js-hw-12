export function creatMarkup(arr) {
  return arr
    .map(element => {
      return `
      <li>
      <a href="${element.largeImageURL}" alt="${element.tags}">
      <img width="300" src="${element.webformatURL}" alt="${element.tags}"/>
      <ul class="gallery__description-list gallery-description-list">
         <li class="gallery-description-list__item">
           <h3>Likes</h3>
           <p>${element.likes}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Views</h3>
           <p>${element.views}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Comments</h3>
           <p>${element.comments}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Downloads</h3>
           <p>${element.downloads}</p>
         </li>
       </ul>

      </a>
    
      </li>
      `;
    })
    .join('');
}
