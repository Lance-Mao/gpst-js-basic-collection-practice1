'use strict';

function includes(collection, ch) {
    return collection.includes(ch);
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    for (let item of collectionA) {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count--;
        }
        result.push({key, count});
    }
    return result;
}
