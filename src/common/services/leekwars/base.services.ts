import {CookieJar} from "tough-cookie";
import {wrapper} from "axios-cookiejar-support";
import axios from "axios";

// const jar = new CookieJar();
// const $http = wrapper(axios.create({
//     baseURL: 'https://leekwars.com/api'
//     , headers: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//         , 'X-PK6-Header': 'thepocket006'
//     }
//     , jar
// }));
const $http = axios.create({
    baseURL: 'https://leekwars.com/api'
    , headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        , 'X-PK6-Header': 'thepocket006'
    }
});

$http.interceptors.request.use(
    config => {
        if (config.data) {
            config.data = parseData(config.data)
        }
        return config
    }
    , error => Promise.reject(error)
)

$http.interceptors.response.use(
    data => {
        return (new Promise((resolve, reject) => {
            return resolve(data.data)
        }))
    },
    err => () => {
        console.log('[http::error]', err)
        return Promise.reject(err)
    }
)

export function parseData(form: any): string {
    if (!(form instanceof FormData)) {
        const f = []
        for (const k in form) {
            f.push(k + '=' + encodeURIComponent(form[k]))
        }
        form = f.join('&')
    }

    return form
}

export const $baseHttp = $http
