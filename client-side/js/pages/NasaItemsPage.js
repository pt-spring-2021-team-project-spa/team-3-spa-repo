import NasaItems from '../components/NasaItems.js';

export default function NasaItemsPage(nasaItems) {
    return `
    <h1>Nasa Items Page</h1>
    ${NasaItems(nasaItems)}
    `;
}