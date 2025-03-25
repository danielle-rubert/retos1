"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getBrand = function () {
        return this.brand;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    return Mobile;
}());
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.calculateTotalPrice();
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.calculateTotalPrice();
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.calculateTotalPrice = function () {
        return this.mobiles.reduce(function (sum, mobile) { return sum + mobile.getPrice(); }, 0);
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
