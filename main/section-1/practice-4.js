'use strict';

function includes(collection, ch) {
    return collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.map(item => {
        if (includes(objectB.value,item.key)) return item.key;
    }).filter(elem => elem !== undefined);
}
