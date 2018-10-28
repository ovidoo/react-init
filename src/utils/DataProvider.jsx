export default class DataProvider {

    static getData(uri) {
        return fetch(uri)
            .catch((error) => {
                console.log('AHHH! An Error!', error);
            })
            .then(response => {
                return response.json();
            })
            .then(res => {
                return res;
            })
    }
}