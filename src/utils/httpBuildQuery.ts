

/**
 * 
 *
 * @param {*} objParams
 * @returns
 */
const httpBuildQuery = (objParams:any, encode:boolean = true)=>{
    return Object.keys(objParams).map(key => {
        if(encode) return `${encodeURIComponent(key)}=${encodeURIComponent(objParams[key])}`;
        return `${key}=${objParams[key]}`;
    }).join('&');
}

export default httpBuildQuery;