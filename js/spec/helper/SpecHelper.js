/**
  * We're going to implement the data provider pattern, which Jasmine
  * doesn't have built in.
  *
  * I have lifted this method from: 
  * http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests
  */
using = function(name, values, func) {
    for (var i = 0, count = values.length; i < count; i++) {
        if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
            values[i] = [values[i]];
        }
        func.apply(this, values[i]);
        jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
    }
};

