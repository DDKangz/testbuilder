/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  //it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  //});

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club') 
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club')
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var should = chai.should();
 
  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var should = chai.should();
 

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var should = chai.should();
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011345678901234000').should.equal('Discover');
  });
  it('has a prefix of 644-649 and a length of 19', function() {
    detectNetwork('6443456789012340000').should.equal('Discover');
    detectNetwork('6453456789012340000').should.equal('Discover');
    detectNetwork('6463456789012340000').should.equal('Discover');
    detectNetwork('6473456789012340000').should.equal('Discover');
    detectNetwork('6483456789012340000').should.equal('Discover');
    detectNetwork('6493456789012340000').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511345678901234000').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011345678901234').should.equal('Discover');
  });
  it('has a prefix of 644-649 and a length of 16', function() {
    detectNetwork('6441345678901234').should.equal('Discover');
    detectNetwork('6451345678901234').should.equal('Discover');
    detectNetwork('6461345678901234').should.equal('Discover');
    detectNetwork('6471345678901234').should.equal('Discover');
    detectNetwork('6481345678901234').should.equal('Discover');
    detectNetwork('6491345678901234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511345678901234').should.equal('Discover');
  });
});

describe('Maestro', function() {
  var should = chai.should();
  // Write full test coverage for the Maestro card
  it('has a prefix of 5018 and a length of 12-19', function() {
    detectNetwork('501834567890').should.equal('Maestro');
    detectNetwork('5018345678901').should.equal('Maestro');
    detectNetwork('50183456789012').should.equal('Maestro');
    detectNetwork('501834567890123').should.equal('Maestro');
    detectNetwork('5018345678901234').should.equal('Maestro');
    detectNetwork('50183456789012345').should.equal('Maestro');
    detectNetwork('501834567890123456').should.equal('Maestro');
    detectNetwork('5018345678901234567').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 12-19', function() {
    detectNetwork('502034567890').should.equal('Maestro');
    detectNetwork('5020345678901').should.equal('Maestro');
    detectNetwork('50203456789012').should.equal('Maestro');
    detectNetwork('502034567890123').should.equal('Maestro');
    detectNetwork('5020345678901234').should.equal('Maestro');
    detectNetwork('50203456789012345').should.equal('Maestro');
    detectNetwork('502034567890123456').should.equal('Maestro');
    detectNetwork('5020345678901234567').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 12-19', function() {
    detectNetwork('503834567890').should.equal('Maestro');
    detectNetwork('5038345678901').should.equal('Maestro');
    detectNetwork('50383456789012').should.equal('Maestro');
    detectNetwork('503834567890123').should.equal('Maestro');
    detectNetwork('5038345678901234').should.equal('Maestro');
    detectNetwork('50383456789012345').should.equal('Maestro');
    detectNetwork('503834567890123456').should.equal('Maestro');
    detectNetwork('5038345678901234567').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 12-19', function() {
    detectNetwork('630434567890').should.equal('Maestro');
    detectNetwork('6304345678901').should.equal('Maestro');
    detectNetwork('63043456789012').should.equal('Maestro');
    detectNetwork('630434567890123').should.equal('Maestro');
    detectNetwork('6304345678901234').should.equal('Maestro');
    detectNetwork('63043456789012345').should.equal('Maestro');
    detectNetwork('630434567890123456').should.equal('Maestro');
    detectNetwork('6304345678901234567').should.equal('Maestro');
  });
});

describe('China UnionPay', function() {
  var should = chai.should();

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       detectNetwork(prefix.toString() + '1234567891').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       detectNetwork(prefix.toString() + '12345678912').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       detectNetwork(prefix.toString() + '123456789123').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       detectNetwork(prefix.toString() + '1234567891234').should.equal('China UnionPay');
      });
    })(prefix)
  }
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       detectNetwork(prefix.toString() + '1234567891234').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       detectNetwork(prefix.toString() + '12345678912345').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       detectNetwork(prefix.toString() + '123456789123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       detectNetwork(prefix.toString() + '1234567891234567').should.equal('China UnionPay');
      });
    })(prefix)
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
       detectNetwork(prefix.toString() + '123456789123').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
       detectNetwork(prefix.toString() + '1234567891234').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
       detectNetwork(prefix.toString() + '12345678912345').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
       detectNetwork(prefix.toString() + '123456789123456').should.equal('China UnionPay');
      });
    })(prefix)
  }
});

describe('Switch', function() {
  var should = chai.should();

  it('has a prefix of 4903 and a length of 16', function() {
    detectNetwork('4903000000123456').should.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 16', function() {
    detectNetwork('4905000000123456').should.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 16', function() {
    detectNetwork('4911000000123456').should.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 16', function() {
    detectNetwork('4936000000123456').should.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 16', function() {
    detectNetwork('5641820000123456').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 16', function() {
    detectNetwork('6331100000123456').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function() {
    detectNetwork('6333000000123456').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function() {
    detectNetwork('6759000000123456').should.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 18', function() {
    detectNetwork('490300000000123456').should.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    detectNetwork('490500000000123456').should.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function() {
    detectNetwork('491100000000123456').should.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function() {
    detectNetwork('493600000000123456').should.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    detectNetwork('564182000000123456').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    detectNetwork('633110000000123456').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function() {
    detectNetwork('633300000000123456').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    detectNetwork('675900000000123456').should.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 19', function() {
    detectNetwork('4903000000000123456').should.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function() {
    detectNetwork('4905000000000123456').should.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    detectNetwork('4911000000000123456').should.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function() {
    detectNetwork('4936000000000123456').should.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    detectNetwork('5641820000000123456').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    detectNetwork('6331100000000123456').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function() {
    detectNetwork('6333000000000123456').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function() {
    detectNetwork('6759000000000123456').should.equal('Switch');
  });
});