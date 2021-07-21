// export default function Card(card) {
//     return `
//     <div class='card__container'>
//         <input type='hidden' id='cardId' value=${card.data[1].nasa_id} />
//         <h3 class='card__title'>${card.data[0].title}</h2>
//         <h4>${card.data[0].nasa_id}</h3>
//         <div class='card__img'><img src=${card.links[1].href} alt='' /></div>
//         <p class='card__desc'>Description: ${card.data[1].description}</p>
//     </div>
//     `;
// }

export default function RandomCard(cardData) {
    console.log(cardData);
    return `
    <div class="card">
      <div class="card__inner">
        <div class="card__face card__face--front">
          <h3>SATURN</h2>
        </div>

        <div class="card__photo">
          <img src="http://localhost:8080/images/saturn.jpg" class="card-img" />
        </div>

        <div class="card__face card__face--back">
          <div class="card__content">
            <div class="card__header">
              <h3>DID YOU KNOW?</h2>
            </div>
            <div class="card__body">
              <h4>The Planet:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                dapibus enim. Nulla.
              </p>
              <h4>The Planet:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                dapibus enim. Nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                dapibus enim. Nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    `
}