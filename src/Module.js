/**
 * Simple js module
 */

// V1

(function(app) {

    app.newModule = {

    };

})(app);

// V2

var module = (function() {

    // private

    function privateMethod()
    {

    }

    // public

    return {

        /**
         * My publicMethod
         */
        publicMethod: function()
        {
            // code...
        }

    };

})();

// OR

var module = (function() {

    var exp = {}; // export

    /**
     * My publicMethod
     */
    exp.publicMethod = function()
    {

    };

    return exp;

})();

// use

module.publicMethod();