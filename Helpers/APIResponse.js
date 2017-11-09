var exports  = {};

exports.success = function (data, length){
    return {
        status: 'success',
        length: length,
        data: data,
        success: {
            code: 200
        }
    };
}

exports.fail = function (code, message) {
    return {
        status: 'fail',
        error: {
            code: code,
            message: message
        }
    };
}

module.exports = exports;
