'use strict';

function find(collection, ch) {
    return collection.find(item => item.key === ch);
}

function summarize(collection) {
    let result = [];
    for (let item of collection) {
        let obj = find(result, item);
        obj ? obj.count++ : result.push({key: item, count: 1});
    }
    return result;
}

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result,obj) {

    for (var i = 0; i < obj.count; i++) {
        result.push(obj.key);
    }

}

function expand(collection) {
    let result = [];
    // collection.map(item => {
    //     if (item.length === 1) {
    //         result.push(item);
    //     } else {
    //         let obj = split(item);
    //         push(result, obj);
    //     }
    // })
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let obj = split(item);
            push(result, obj);
        }
    }
    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
