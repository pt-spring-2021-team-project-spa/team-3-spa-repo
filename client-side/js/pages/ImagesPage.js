export default function Images(images) {
  console.log(images);
  const items = images.collection.items;
  console.log(items);

  return `
    ${items
      .map((item) => {
        console.log(item.links);
        const itemImage = item.links[0].href;
        return `
          <img src=${itemImage} alt='' />
          `;
      })
      .join('')}
    `;
}