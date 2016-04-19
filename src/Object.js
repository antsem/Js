/**
 * Object
 */

// Create V1

var obj = {};

// Add prop

obj.prop_1 = 1;

obj['prop_2'] = 2;

// Create V2

var obj = {
    "prop_1": 1,
    "prop_2": 2
};

// Circle

for (var key in obj) {

    var value = obj[key];

    console.log(value);
}

// Delete prop

delete obj.prop_1;
