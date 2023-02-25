'use strict';

exports.handler = async (event, context) => {
    var headerName = 'x-header-test';
    var event_name = 'viewer_request';
    try {
        const request = event.Records[0].cf.request;
        const headers = request.headers
        if (headers[headerName]) {
            const v = headers[headerName][0]['value'];
            headers[headerName] = [{key: headerName, value: `${v}-${event_name}`}]
        } else {
            headers[headerName] = [{key: headerName, value: event_name}]
        }
 
        console.log(`new request: ${JSON.stringify(request)}`)
        return request;
    } catch (err) {
        console.log(err)
        return Response403;
    }
};
