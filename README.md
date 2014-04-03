## Mediatorish

### Sort-of mediator implemented in JavaScript, using require.js and Jasmine

This is just a small piece of code playing with using a mediator to handle event subscriptions and delegate the appropriate work to its colleague objects. To see how it works take a look at the spec in js/spec/mediator.js, or clone this repo and navigate to SpecRunner.html.

### Behaviour

This sort-of mediator marshalls the behaviour of a number of colleagues (my example uses two). It contains methods which call combinations of methods on its colleagues. Each of its methods is coupled to an event emitted by an external pub/sub system, to which the mediator subscribes. It is possible that the events are emitted by the colleagues themselves, for example on user input to a view, but this is not necessarily the case.

### Reading

If you're interested in the mediator pattern proper, check out Addy Osmani's [Patterns for Large Scale JS Application Architecture](http://addyosmani.com/largescalejavascript/#mediatorpattern) (which has a catchy name).
