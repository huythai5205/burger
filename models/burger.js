const orm = require('../config/orm.js');

const burger = {
    getAll: function (_callback) {
        orm.selectAll((res) => {
            _callback(res);
        });
    },

    create: function (burgerName, _callback) {
        orm.insert(burgerName, () => {
            _callback();
        });
    },

    update: function (_callback) {
        orm.update(burgerId, () => {
            _callback();
        });
    }
};

module.exports = burger;