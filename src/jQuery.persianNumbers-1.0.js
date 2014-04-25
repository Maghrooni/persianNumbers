/*
 * persianNumbers - jQuery Plugin for converting English numbers to Persian and Arabic Numbers 
 * 
 * Version: 1.0
 * Author : Mahdi Maghrooni | http://maghrooni.ir
 * Web: http://github.com/Maghrooni/persianNumbers
 * 
 * License under
 *      MIT License http://www.opensource.org/licenses/mit-license
 * 
 */
(function($) {
    $.extend({
        persianNumbers: function(input) {
            var persian = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};
            var string = (input + '').split('');
            var count = string.length;
            var num;
            for (var i = 0; i <= count; i++) {
                num = string[i];
                if (persian[num]) {
                    string[i] = persian[num];
                }
            }
            return string.join('');
        }
    });
})(jQuery);