(function (ext) {
  // Convert a decimal number to binary
  ext.decimalToBinary = function (number) {
    return decimalToBinary(number);
  };

  // Convert a letter to Unicode
  ext.letterToUnicode = function (input) {
    return letterToUnicode(input);
  };

  // Convert binary to a decimal number
  ext.binaryToDecimal = function (binary) {
    return binaryToDecimal(binary);
  };

  // Convert Unicode to a letter
  ext.unicodeToLetter = function (unicode) {
    return unicodeToLetter(unicode);
  };

  // Helper function to convert a decimal number to binary
  function decimalToBinary(number) {
    return Number(number).toString(2);
  }

  // Helper function to convert a letter to Unicode
  function letterToUnicode(input) {
    if (input.length === 1) {
      return input.charCodeAt(0);
    }
    return 0;
  }

  // Helper function to convert binary to a decimal number
  function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }

  // Helper function to convert Unicode to a letter
  function unicodeToLetter(unicode) {
    return String.fromCharCode(unicode);
  }

  // Block and descriptor definitions
  var descriptor = {
    blocks: [
      ['r', 'Convert %n to binary', 'decimalToBinary', 10],
      ['r', 'Convert %s to Unicode', 'letterToUnicode', 'A'],
      ['r', 'Convert %s to decimal', 'binaryToDecimal', '1010'],
      ['r', 'Convert %n to letter', 'unicodeToLetter', 65],
    ],
  };

  // Register the extension
  ScratchExtensions.register('AI: Convert', descriptor, ext);
})(window.ScratchExtensions || (window.ScratchExtensions = {}));
