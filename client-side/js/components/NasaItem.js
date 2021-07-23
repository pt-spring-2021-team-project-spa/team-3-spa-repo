export default function NasaItem(nasaItem, itemIndex) {
    // console.log(itemIndex);
        return `
        <div class='nasa_card__container'>
            <input type='hidden' class='id' id='nasaCardId${nasaItem.data[0].nasa_id}' value=${nasaItem.data[0].nasa_id} />
            <h2 class='card__title'>${nasaItem.data[0].title}</h2>
            <h3>${nasaItem.data[0].nasa_id}</h3>
            <div class='card__img'><img src=${nasaItem.links[0].href} alt='' /></div>
            <div class='card__desc'>
                <p class='nasa-description'>Description: ${nasaItem.data[0].description}</p>
            </div>
        </div>
        `;

}