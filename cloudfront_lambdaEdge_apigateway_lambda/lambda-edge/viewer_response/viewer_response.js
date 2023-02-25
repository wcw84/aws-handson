'use strict';

exports.handler = (event, context, callback) => {
   const response = event.Records[0].cf.response;
   const headers = response.headers;

    var headerName = 'x-header-test';
    var event_name = 'viewer_response';

    if (headers[headerName]) {
        const v = headers[headerName][0]['value'];
        headers[headerName] = [{key: headerName, value: `${v}-${event_name}`}]
    } else {
        headers[headerName] = [{key: headerName, value: event_name}]
    }

    console.log(`new response: ${JSON.stringify(response)}`)
    callback(null, response);
};