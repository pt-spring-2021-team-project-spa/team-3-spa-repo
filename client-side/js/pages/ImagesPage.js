export default function Images(images) {
  console.log(images);
  const items = images.collection.items;
  console.log(items);

  return `
    ${items
      .map((item) => {
        console.log(item.links);
        const cardTitle = item.data[0].title;
        const itemImage = item.links[0].href;
        const cardShortDescription = item.data[0].description_508;
        const cardLongDescription = item.data[0].description;
        return `
          <h2>${cardTitle}</h2>
          <img src=${itemImage} alt='' />
          <p>${cardLongDescription}</p>
          `;
      })
      .join('')}
    `;
}