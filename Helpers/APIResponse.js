var exports  = {};

exports.success = function (data){
    return {
        status: 'success',
        data: data,
        success: {
            code: 200
        }
    };
}

exports.fail = function (data, code, message) {
    return {
        status: 'fail',
        error: {
            code: code,
            message: message
        }
    };
}

module.exports = exports;
