function getRequest(location, callback) {
    fetch(location)
        .then((response) => response.json())
        .then((data) => callback(data))
        .then((err) => console.log(err));
}

export default {
    getRequest,
};