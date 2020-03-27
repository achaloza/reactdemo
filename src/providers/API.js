import ENV from '../enviornment/enviornment'

export default class API {
    // call get method 
    static async get(url, params = {}, otherUrl = false) {
        let callUrl = ENV.url + url;

        if (this.checkEmpty(params)) {
            callUrl += '?' + this.objToQueryString(params);
        }
        if (otherUrl) {
            callUrl = url;
        }
        try {
            console.log('url: ', callUrl, 'responseJson: ', responseJson);
            let response = await fetch(callUrl);
            let responseJson = await response.json();
            console.log('url: ', callUrl, 'responseJson: ', responseJson)
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
    // call post method with parameter
    static async post(url, params) {
        let callUrl = ENV.url + url;

        try {
            let reqBody = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            };
            //check parameter is empty or not
            if (!this.checkEmpty(params)) {
                reqBody.body = JSON.stringify(params);
            }
            let response = await fetch(callUrl, reqBody);
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error('post: ', error);
        }
    }
    // call post method with parameter
    static async put(url, params) {
        let callUrl = ENV.url + url;

        try {
            let reqBody = {
                method: 'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            };
            //check parameter is empty or not
            if (!this.checkEmpty(params)) {
                reqBody.body = JSON.stringify(params);
            }
            let response = await fetch(callUrl, reqBody);
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error('post: ', error);
        }
    }
    static checkEmpty = (params) => {
        return !Object.keys(params).length === 0 && params.constructor === Object;
    }
    objToQueryString = obj => {
        const keyValuePairs = [];
        for (let i = 0; i < Object.keys(obj).length; i += 1) {
            keyValuePairs.push(
                `${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(
                    Object.values(obj)[i],
                )}`,
            );
        }
        return keyValuePairs.join('&');
    };
}