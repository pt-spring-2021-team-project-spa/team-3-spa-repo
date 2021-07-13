// import Card from './Card';

export default function Cards(cards) {
    console.log(cards);
    const cards = cards.collection.items;
    console.log(cards);
    return `
        <div class='cards__container'>
            ${cards
                .map((card) => {
                    console.log(card.data)
                    const card.title = item.data[0].title;
                    const card.title = item.links[0].title;
                    const card.title = item.data[0].title;
                    return `
                        ${Card(card)}
                    `;
                })
                .join('')}
        </div>
    `;
}