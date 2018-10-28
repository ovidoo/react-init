export default class PathProvider {

    static getPath() {
        return window.location.protocol + '//' + window.location.hostname + '/'
    }
}