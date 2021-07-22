export default function MetObject(metObject) {
    console.log(metObject);
    return `
    <div class='nasa_card__container'>
        <input type='hidden' class='id' id='metObjectId${metObject.objectID}' value=${metObject.objectID} />
        <h2 class='card__title'>${metObject.title}</h2>
        <h3>${metObject.objectID}</h3>
        <div class='card__img'><img src=${metObject.primaryImage} alt='' /></div>
        <div class='card__desc'>
            <p class='met-artist'>Artist: ${metObject.artistDisplayName}</p>
            <p class='met-medium'>Medium: ${metObject.medium}</p>
            <p class='met-site'>Additional Met Info: ${metObject.medium}</p>
            <p class='met-wiki'>Wiki info: ${metObject.medium}</p>
        </div>
    </div>
    `;
}