'use strict';

function includes(collection, ch) {
    return collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(item => includes(collectionB,item));
}
