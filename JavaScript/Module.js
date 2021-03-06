/**
 * Simple js module
 */

// V1

var app = {};

(function(app) {

    app.Module = {

        Method: function()
        {
            // code...
        }

    };

})(app);

// use

app.Module.Method();

// V2

var module = (function() {

    // private

    function privateMethod()
    {
        // code...
    }

    // public

    return {

        publicMethod: function()
        {
            // code...
        }

    };

})();

// OR

var module = (function() {

    var exp = {}; // export

    exp.publicMethod = function()
    {
        // code...
    };

    return exp;

})();

// use

module.publicMethod();