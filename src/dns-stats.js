const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};
  
  for (let domain of domains) {
    const parts = domain.split('.');
    let currentDomain = '';
    
    // Идем с конца (от зоны .ru к началу)
    for (let i = parts.length - 1; i >= 0; i--) {
      currentDomain = '.' + parts[i] + currentDomain;
      stats[currentDomain] = (stats[currentDomain] || 0) + 1;
    }
  }
  
  return stats;
}

module.exports = {
  getDNSStats
};
