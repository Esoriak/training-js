const _ = require("lodash");

var MyLodash = {};

/**
 * Removes leading and trailing whitespace or specified characters from string.
 */
MyLodash.trim = function (string) {
    let cleanstring = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            cleanstring.push(string[i])
        }
    }
    console.log(cleanstring.join(''))
    return cleanstring.join('')
    // return _.trim(string);

}

/**
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 */
MyLodash.reverse = function (array) {
    let arrayrev = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayrev.push(array[i])
    }
    return arrayrev;
    //     // return _.reverse(array);
}

/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. 
 * The order of result values is determined by the order they occur in the array.
 */

MyLodash.uniq = function (values) {

    let newtab = [];
    for (let i = 0; i < values.length; i++) {
        let count = 0;
        for (let j = 0; j < newtab.length; j++) {
            if (values[i] === newtab[j]) {
                count++
            }
        }
        if (count === 0) {
            newtab.push(values[i])
        }
    }
    return newtab;
    // return _.uniq(values);
};

// MyLodash.uniq = function ( values) {
//     let newtab = []
//     for (let i= 0; i<=2; i++) {
//         newtab.push(values[i])
//     }
//     return newtab
// }

/**
 * This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. 
 * The order of result values is determined by the order they occur in the array.
 */
MyLodash.uniqBy = function (values, extra) {
    let newtab = [];
    for (let i = 0; i < values.length; i++) {
        let count = 0;
        for (let j = -1; j < newtab.length; j++) {
            if (extra(values[i]) === extra(newtab[j])) {
                count++
            }
        }

        if (count === 0) {
            newtab.push(values[i])
        }
    }
    console.log(newtab)
    return newtab;
    //return _.uniqBy(values, extra);
};

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for. 
 * The predicate is invoked with three arguments: (value, index|key, collection).
 */
MyLodash.find = function (array, extra) {
    let newuser = []
    for (let i = 0; i < array.length; i++) {
        if (extra(array[i]) === true) {
            newuser.push(array[i])
        }
    }
    return newuser;
    //return _.find(array, extra);
}

/**
 * Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. 
 * This method performs a stable sort, that is, it preserves the original sort order of equal elements. 
 * The iteratees are invoked with one argument: (value).
 */
// MyLodash.sortBy = function (array, extra) {
//     let tabsort = []
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].age)
//         for (let j = 1; j < array.length; j++) {
//             if (array[i].age < array[j].age) {
//                 tabsort.push(array[i])
//             }
//         }
//     }
//     console.log(tabsort)
//     return tabsort
//     //return _.sortBy(array, extra);
// }

MyLodash.sortBy = function (array, extra) {
    let tabsort = []

    tabsort = array.sort((a,b) => {
        if ( a[extra[0]].charCodeAt(0) - b[extra[0]].charCodeAt(0) != 0) {
            return a[extra[0]].charCodeAt(0) - b[extra[0]].charCodeAt(0)
        } else {
            array.sort((c,d) => c[extra[1]] - d[extra[1]])
        }
        
    })
    console.log(tabsort)
    return tabsort
    // return _.sortBy(array,extra) ;
}
/**
 * Creates an array of unique values that is the symmetric difference of the given arrays. 
 * The order of result values is determined by the order they occur in the arrays.
 */
MyLodash.xor = function (array, extra) {
    return array;
    //return _.xor(array, extra);
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee. 
 * The order of grouped values is determined by the order they occur in collection. 
 * The corresponding value of each key is an array of elements responsible for generating the key. 
 * The iteratee is invoked with one argument: (value).
 */
MyLodash.groupBy = function (array, extra) {
    return array;
    //return _.groupBy(array, extra);
}

/**
 * Recursively flattens array.
 */
MyLodash.flattenDeep = function (array) {
    let tab= []
    for (let i=0; i < array.length; i++) {
        for (let j= 0; j< array[i].length; j++)
            tab.push(array[i[j]])
    }
    return tab;
    //return _.flattenDeep(array);
}

/**
 * This method is like _.defaults except that it recursively assigns default properties.
 */
MyLodash.defaultsDeep = function (values, extra) {
    return values;
    //return _.defaultsDeep(values, extra);
}

module.exports = MyLodash;