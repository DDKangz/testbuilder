// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var cards = [
  {
    prefix: [38, 39],
    length: [14],
    name: 'Diner\'s Club'
  },
  {
    prefix: [34, 37],
    length: [15],
    name: 'American Express'
  },
  {
    prefix: [4],
    length: [13, 16, 19],
    name: 'Visa'
  },
  {
    prefix: [51, 52, 53, 54, 55],
    length: [16],
    name: 'MasterCard'
  },
  {
    prefix: [6011, 644, 645, 646, 647, 648, 649, 65],
    length: [16, 19],
    name: 'Discover'
  },
  {
    prefix: [5018, 5020, 5038, 6304],
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    name: 'Maestro'
  },
  {
    prefix: [622126-622925, 624-626, 6282-6288],
    length: [16-19],
    name: 'China UnionPay'
  },
  {
    prefix: [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
    length: [16, 18, 19],
    name: 'Switch'
  }
];




var detectNetwork = function(cardNumber) {
  const prefix = cardNumber[0];
  const cardLength = cardNumber.length;
  const threeNum = cardNumber.slice(1, 4);
  const secondNum = cardNumber[1];
  const fiveNum = cardNumber.slice(1, 6);
  if (prefix === '3') {
    if (secondNum === '8' || secondNum === '9') {
      if (cardLength === 14) {
        return 'Diner\'s Club';
      }
    } else if (secondNum === '4' || secondNum === '7') {
      if (cardLength === 15) {
        return 'American Express';
      }
    }
  }
  
  if (prefix === '4') {
    if (threeNum === '903' || threeNum === '905' || threeNum === '911' || threeNum === '936') {
      if (cardLength === 16 || cardLength === 18 || cardLength === 19) {
        return 'Switch';
      }
    }
    if (cardLength === 13 || cardLength === 16 || cardLength === 19) {
      return 'Visa';
    }
  }
  
  if (prefix === '5') {
    if (secondNum >= 1 && secondNum <= 5) {
      if (cardLength === 16) {
        return 'MasterCard';
      }
    } else if (fiveNum === '64182') {
      if (cardLength === 16 || cardLength === 18 || cardLength === 19) {
        return 'Switch';
      }
    }
    if (threeNum === '018' || threeNum === '020' || threeNum === '038') {
      if (cardLength >= 12 && cardLength <= 19) {
        return 'Maestro'
      }
    }
  }
  
  if (prefix === '6') {
    if (secondNum === '5') {
      return 'Discover';
    } else if (secondNum === '4') {
      const cNum = Number(cardNumber[2]);
      if (cNum >= 4 && cNum <= 9) {
        if (cardLength === 16 || cardLength === 19) {
          return 'Discover';
        }
      }
    }
    if (threeNum === '333' || threeNum === '759' || fiveNum === '33110') {
      if (cardLength === 16 || cardLength === 18 || cardLength === 19) {
        return 'Switch';
      }
    }
    if (threeNum === '011') {
      if (cardLength === 16 || cardLength === 19) {
        return 'Discover';
      }
    } else if (threeNum === '304') {
      if (cardLength >= 12 && cardLength <= 19) {
        return 'Maestro';
      }
    } else if (Number(threeNum) >= 282 && Number(threeNum) <= 288 ) {
      if (cardLength >= 16 && cardLength <= 19) {
        return 'China UnionPay';
      }
    } else if (secondNum === '2') {
      const thirdNum = Number(cardNumber[2]);
      const restNum = Number(cardNumber.slice(2, 6));
      if (thirdNum >= 4 && thirdNum <= 6) {
        if (cardLength >= 16 && cardLength <= 19) {
          return 'China UnionPay';
        }
      } else if (restNum >= 2126 && restNum <= 2925) {
        if (cardLength >= 16 && cardLength <= 19) {
          return 'China UnionPay';
        }
      }
    }
  }
};
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.