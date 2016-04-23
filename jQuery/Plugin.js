/**
 * jQuery plugin
 */

(function($){

    $.fn.plugin = function(options) {

        options = $.extend({
            key: "value"
        }, options);

        return this.each(function() {
            // code...
        });

    };

})(jQuery);