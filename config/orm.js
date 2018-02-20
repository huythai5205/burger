const connection = require('./connection.js');

const orm = {
    selectAll: function (_callback) {
        let query = 'SELECT * FROM burgers';
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                _callback(result);
            }
        });
    },
    insert: function (burgerName, _callback) {
        console.log(burgerName);
        let query = 'INSERT INTO burgers(burger_name) VALUES(?)';
        connection.query(query, [burgerName], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                _callback(result);
            }
        });
    },
    update: function () {

    }
};

module.exports = orm;