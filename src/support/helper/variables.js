'use strict'

var varMap = {};

var Variables = {

    addVariable: function (key, value) {
        varMap[key] = value;
    },

    getVariable: function (key) {
        return varMap[key];
    },

    getAllVariables: function () {
        return varMap;
    },

    nutParseVars: function (text) {
        if (text.includes('vars.')) {
            var list = text.match(/(vars.[\w]*)/g);

            list.forEach(function (item) {
                var varName = item.split(".")[1];
                var varValue = varMap[varName];

                text = text.replace(item, varValue);
            });
        }
        return text;
    }
};

module.exports = Variables;