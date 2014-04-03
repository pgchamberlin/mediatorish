## Mediatorish

### Sort-of mediator implemented in JavaScript, using require.js and Jasmine

This is just a small piece of code playing with using a mediator to handle event subscriptions and delegate the appropriate work to its colleague objects. To see how it works take a look at the spec in js/spec/mediator.js, or clone this repo and navigate to SpecRunner.html.

This is a specialist mediator which marshalls the behaviour of a number of colleagues. It contains methods which call combinations of methods on them. Each of these methods is coupled to an event emitted by an external pub/sub system, to which the mediator subscribes on behalf of its colleagues. It is possible that the events are emitted by the colleagues themselves, but this is not necessarily the case. I doesn't matter to this mediator.
