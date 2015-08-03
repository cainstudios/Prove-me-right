/**
 * @module ui/main.reel/my-module1
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class MyModule1
 * @extends Montage
 */
exports.MyModule1 = Montage.specialize(/** @lends MyModule1# */ {
    constructor: {
        value: function MyModule1() {
            this.super();
        }
    }
});
