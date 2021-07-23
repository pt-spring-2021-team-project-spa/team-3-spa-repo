import NasaItem from '../components/NasaItem.js';

export default function(nasaItem) {
    return `
        <h1>Nasa Item Page</h1>
        ${NasaItem(nasaItem)}
    `;
}
