
/**
 * Adicionar zero à esquerda ao número, caso não seja dezena.
 *
 * @param {number} target
 * @returns {string} @examples 1 => 01
 */
const pad2 = (target:number):string => (target < 10 ? '0': '') + target;


export default pad2;

