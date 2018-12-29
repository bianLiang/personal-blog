var test = true;
var pord = false;
const setApi = () => {
    let api;
    if(test) {
        api = 'http://localhost:8080';
    } else if (pord) {
        api = 'http://45.76.195.155:8080';
    };
    return api;
};
module.exports = {
    setApi: setApi
}