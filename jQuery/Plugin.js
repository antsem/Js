/**
 * jQuery plugin
 */

(function($){

    $.fn.plugin = function(opts) {

        // default options
        var defaults = {
            key: "value"
        };

        var options = $.extend(defaults, opts || {});

        return this.each(function() {
            // code...
        });

    };

})(jQuery);