const orm = require('../config/orm.js');

const burger = {
    getAll: function (_callback) {
        orm.selectAll((res) => {
            _callback(res);
        });
    },

    create: function (burgerName, _callback) {
        orm.insert(burgerName, (res) => {
            _callback(res);
        });
    }
};

module.exports = burger;