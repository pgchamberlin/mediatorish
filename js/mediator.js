define([], function() {
    var first, second;

    return {
        registerColleagues: function(f, s) {
            first = f;
            second = s;
        },
        onlyFirst: function() {
            first.show();
            second.hide();
        },
        onlySecond: function() {
            first.hide();
            second.show();
        },
        showAll: function() {
            first.show();
            second.show();
        },
        hideAll: function() {
            first.hide();
            second.hide();
        },
        setPubsub: function(p) {
            pubsub = p;
        },
        bindEvents: function() {
            pubsub.on('only:first', this.onlyFirst);
            pubsub.on('only:second', this.onlySecond);
            pubsub.on('show:all', this.showAll);
            pubsub.on('hide:all', this.hideAll);
        }
    };
});
