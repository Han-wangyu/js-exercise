function parseParam(url) {
    const [_, params] = url.split('?');
    let result = {};
    params && params.split('&').map(item => {
        let [key, value = true] = item.split('=');
        value = (typeof value === 'boolean') ? value : decodeURIComponent(value);
        result[key] = !result[key] ? value : [].concat(result[key], value);
    })
    return result;
}

const res = parseParam('https://www.domain.com/?user=jack&id=123&id=456&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled');
console.log(res);