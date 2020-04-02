import * as R from 'ramda';

const callGet = function callGet(entrypoint, param = {}){
    let headers = {};
    if(!R.isEmpty(param)){
        headers = param;
    }
    return fetch(entrypoint,
        {
            method:'GET',
            headers
        })
        .then((response) => {
            if(R.prop('ok', response)){
                return response.json();
            }
            return null;
        });
}

const callGetText = function callGetText(entrypoint, param = {}){
    let headers = {};
    if(!R.isEmpty(param)){
        headers = param;
    }
    return fetch(entrypoint,
        {
            method:'GET',
            headers
        })
        .then((response) => {
            if(R.prop('ok', response)){
                return response.text();
            }
            return null;
        });
}

const callPost = function callPost(entrypoint, body, param = {}){
    const headers = {
        'Content-Type': 'application/json',
    };
    if(!R.isEmpty(param)){
        Object.assign(headers, param);
    }
    return fetch(entrypoint,
        {
            method:'POST',
            headers,
            body: JSON.stringify(body)
        })
        .then((response) => {
            if(R.prop('ok', response)){
                return response.json();
            }
            return null;
        });
}

function put(entrypoint, body, param = {}){
    const headers = {
        'Content-Type': 'application/json',
    }
    if(!R.isEmpty(param)){
        Object.assign(headers, param);
    }
    return fetch(entrypoint,
        {
            method:'PUT',
            headers,
            body: JSON.stringify(body)
        })
        .then((response) => {
            if(R.prop('ok', response)){
                return response.json();
            }
            throw new RangeError('HTTP status code not in range (2xx).');
        });
}

function patch(entrypoint, body, param = {}){
    const headers = {
        'Content-Type': 'application/json',
    }
    if(!R.isEmpty(param)){
        Object.assign(headers, param);
    }
    return fetch(entrypoint,
        {
            method: 'PATCH',
            headers,
            body: JSON.stringify(body),
        })
        .then((response) => {
            if(R.prop('ok', response)){
                return response.json();
            }
            throw new RangeError('HTTP status code not in range (2xx).');
        });
}
export{
    callGet,
    callGetText,
    callPost,
    put,
    patch
}