"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
class Mobile {
    constructor(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getTrademark() {
        return this.trademark;
    }
    getModel() {
        return this.model;
    }
    getColor() {
        return this.color;
    }
    getPrice() {
        return this.price;
    }
    setName(name) {
        this.name = name;
    }
    setTrademark(trademark) {
        this.trademark = trademark;
    }
    setModel(model) {
        this.model = model;
    }
    setColor(color) {
        this.color = color;
    }
    setPrice(price) {
        this.price = price;
    }
    printCharacteristics() {
        console.log(`The characteristics of the mobile ${this.name} are:`);
        console.log(`Name: ${this.name}`);
        console.log(`Trademark: ${this.trademark}`);
        console.log(`Model: ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Price: ${this.price}`);
    }
}
exports.Mobile = Mobile;
