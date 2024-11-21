"use strict";
// I ❤️ Chat GPT
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterManager = void 0;
var CounterManager = /** @class */ (function () {
    function CounterManager() {
        this.counters = {};
    }
    // Function to increment the value of a counter and return the current value
    CounterManager.prototype.incrementCounter = function (name, amount) {
        if (amount === void 0) { amount = 1; }
        if (!this.counters[name]) {
            this.counters[name] = { name: name, value: 0 };
        }
        this.counters[name].value += amount;
        return this.counters[name].value;
    };
    // Function to decrement the value of a counter and return the current value
    CounterManager.prototype.decrementCounter = function (name, amount) {
        if (amount === void 0) { amount = 1; }
        if (this.counters[name]) {
            this.counters[name].value -= amount;
            if (this.counters[name].value < 0) {
                this.counters[name].value = 0; // Ensure the counter doesn't go below zero
            }
            return this.counters[name].value;
        }
        return 0; // Counter doesn't exist, return 0
    };
    return CounterManager;
}());
exports.CounterManager = CounterManager;
