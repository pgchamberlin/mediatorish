define([
    'js/mediator'
], function(Mediator) {

    describe('Mediator', function() {

        var first, second;

        beforeEach(function() {
            first = {
                show: function() {},
                hide: function() {}
            },
            second = {
                show: function() {},
                hide: function() {}
            };
            spyOn(first, 'show');
            spyOn(first, 'hide');
            spyOn(second, 'show');
            spyOn(second, 'hide');

            Mediator.registerColleagues(first, second);
        });

        it('should show the first colleague and hide the second', function() {
            Mediator.onlyFirst();
            expect(first.show).toHaveBeenCalled();
            expect(second.hide).toHaveBeenCalled();
        });

        it('should show the second colleague and hide the first', function() {
            Mediator.onlySecond();
            expect(first.hide).toHaveBeenCalled();
            expect(second.show).toHaveBeenCalled();
        });

        it('should show all the colleagues', function() {
            Mediator.showAll();
            expect(first.show).toHaveBeenCalled();
            expect(second.show).toHaveBeenCalled();
        });

        it('should hide all of the colleagues', function() {
            Mediator.hideAll();
            expect(first.hide).toHaveBeenCalled();
            expect(second.hide).toHaveBeenCalled();
        });

        it('should subscribe to the appropriate events', function() {
            var pubsub = {
                on: function(eventName, callback) {}
            };
            spyOn(pubsub, 'on');

            Mediator.setPubsub(pubsub);
            Mediator.bindEvents();

            expect(pubsub.on).toHaveBeenCalledWith('only:first', Mediator.onlyFirst);
            expect(pubsub.on).toHaveBeenCalledWith('only:second', Mediator.onlySecond);
            expect(pubsub.on).toHaveBeenCalledWith('show:all', Mediator.showAll);
            expect(pubsub.on).toHaveBeenCalledWith('hide:all', Mediator.hideAll);
        });

        using('event and call pairs', [
                ['only:first', 'onlyFirst'],
                ['only:second', 'onlySecond'],
                ['show:all', 'showAll'],
                ['hide:all', 'hideAll']
        ], function(eventName, callbackName) {
            it('should call the correct handler for each event notification', function() {
                var pubsub = {
                    subscriptions: [],
                    on: function(eventName, callback) {
                        this.subscriptions[eventName] = callback;
                    },
                    emit: function(eventName) {
                        if (typeof this.subscriptions[eventName] === 'function') {
                            this.subscriptions[eventName]();
                        }
                    }
                };
                spyOn(Mediator, callbackName);
                Mediator.setPubsub(pubsub);
                Mediator.bindEvents();

                pubsub.emit(eventName);

                expect(Mediator[callbackName]).toHaveBeenCalled();

            });
        });

    });
});


