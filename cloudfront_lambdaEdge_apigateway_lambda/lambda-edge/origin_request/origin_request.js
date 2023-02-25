'use strict';

exports.handler = (event, context, callback) => {
    var headerName = 'x-header-test';
    var event_name = 'origin_request';
    try {
        const request = event.Records[0].cf.request;
        const headers = request.headers;

        if (headers[headerName]) {
            const v = headers[headerName][0]['value'];
            headers[headerName] = [{key: headerName, value: `${v}-${event_name}`}]
        } else {
            headers[headerName] = [{key: headerName, value: event_name}]
        }
        
        console.log('new request: ', request)
        callback(null, request)
    } catch (err) {
        console.error('error', err)
        callback(err)
    }
};
