"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});
promise.then((data) => {
});
