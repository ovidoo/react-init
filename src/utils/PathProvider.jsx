export default class PathProvider {

    static getPath(resource_uri) {
        return window.location.protocol + '//' + window.location.hostname + '/' + resource_uri
    }
}