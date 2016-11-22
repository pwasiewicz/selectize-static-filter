Selectize.define('static-filter', function (options) {
    var opt = $.extend({
            include: function(val) { return true;  }
        },
        options);

    var self = this;
    this.search = (function () {
        var original = self.search;
        return function () {
            var result = original.apply(this, arguments);            

            for (var i = 0; i >= 0 && i < result.items.length; i++) {
                var item = result.items[i];
                if (!opt.include(item.id)) {
                    result.items.splice(i, 1);
                    i--;
                }
            }

            return result;
        };
    })();
});