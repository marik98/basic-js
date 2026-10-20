const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    return this.process(encryptedMessage, key, -1);
  }

  process(text, key, direction) {
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperText.length; i++) {
      const charCode = upperText.charCodeAt(i);
      
      if (charCode >= 65 && charCode <= 90) {
        const keyCharCode = upperKey.charCodeAt(keyIndex % upperKey.length) - 65;
        let shifted = charCode - 65 + direction * keyCharCode;
        shifted = (shifted % 26 + 26) % 26;
        result += String.fromCharCode(shifted + 65);
        keyIndex++;
      } else {
        result += upperText[i];
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
