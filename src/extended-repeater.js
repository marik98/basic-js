const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  str = String(str);
  const opts = options || {};
  
  const repeatTimes = opts.repeatTimes !== undefined ? opts.repeatTimes : 1;
  const separator = opts.separator !== undefined ? opts.separator : '+';
  const addition = opts.addition !== undefined ? String(opts.addition) : '';
  const additionRepeatTimes = opts.additionRepeatTimes !== undefined ? opts.additionRepeatTimes : 1;
  const additionSeparator = opts.additionSeparator !== undefined ? opts.additionSeparator : '|';

  let addPart = '';
  if (opts.addition !== undefined) {
    if (opts.additionRepeatTimes !== undefined) {
      addPart = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    } else {
      addPart = addition;
    }
  }

  const block = str + addPart;

  if (opts.repeatTimes !== undefined) {
    return Array(repeatTimes).fill(block).join(separator);
  }
  
  return block;
}

module.exports = {
  repeater
};
