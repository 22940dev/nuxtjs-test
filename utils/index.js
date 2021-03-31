import numeral from 'numeral'

/**
 * Convert Number => Thousand Separator Number
 * @param {*} number
 */
export const formatNumber = (number) => numeral(number).format(0, 0)
