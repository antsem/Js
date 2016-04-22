/**
 * --------------------------------------------------------------------------------
 * Array
 */

// Create array

var array = [1, 2, 3, 4, 5];

// OR

var array = new Array();

/**
 * Push
 *
 * Добавляет один или более элементов в конец массива
 * Adds one or more elements to the end of the array
 */

array.push(6, 7); // => [1, 2, 3, 4, 5, 6, 7]

/**
 * Join
 *
 * Объединяет все элементы массива в строку
 */

var str = array.join(', '); // => 1, 2, 3, 4, 5

/**
 * Splice(start, deleteCount)
 *
 * Изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые
 */

var array = ['one', 'two', 'three'];

for (var i = 0; i < array.length; i++) {

    if (array[i] == 'two') {
        array.splice(i, 1);
    }

}

// => ["one", "three"]

/** ----------------------------------------------------------------------------
* Cycles
* --------------------------------------------------------------------------- */

/**
 * for
 */

var i;

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/**
 * for in
 */

for (var i in array) {
    console.log(array[i]);
}

/**
 * forEach
 */

array.forEach(function(item, i, array){
    console.log(item);
});