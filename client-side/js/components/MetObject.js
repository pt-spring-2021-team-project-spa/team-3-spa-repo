export default function MetObject(metObject) {
    console.log(metObject);
    if (metObject.artistDisplayName === '') {
        metObject.artistDisplayName = '~ unknown ~';
    }
    return `
    <div class='nasa_card__container'>
        <input type='hidden' class='id' id='metObjectId${metObject.objectID}' value=${metObject.objectID} />
        <h2 class='card__title'>${metObject.title}</h2>
        <h3>${metObject.objectID}</h3>
        <div class='card__img'><img src=${metObject.primaryImage} alt='' /></div>
        <div class='card__desc'>
            <p class='met-artist'>Artist: ${metObject.artistDisplayName}</p>
            <p class='met-medium'>Medium: ${metObject.medium}</p>
            <p class='met-wiki'>Classification: ${metObject.classification}</p>
            <p class='met-site'><a href=${metObject.objectURL}>Additional info on Met Website</a></p>
        </div>
    </div>
    `;
}