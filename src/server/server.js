"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var PORT = 5000;
app.get('/', function (req, res, next) {
    res.status(200).json({
        'message': 'Running Node with Express and Typescript'
    });
});
app.listen(PORT, function () {
    console.log("Server running on ".concat(PORT, "."));
});
