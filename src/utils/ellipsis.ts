/**
 * Saber se há necessidade de add '...'
 *
 * @param {string} text
 * @param {number} maxCharacters
 * @return {boolean}
 */
export const hasNeedEllipsis = (text:string, maxCharacters:number) => text.length > maxCharacters;
/**
 * Formatar texto. Manter apenas até o max de caractes e add no final '...'
 *
 * @param {string} text
 * @param {number} maxCharacters
 * @return {string}
 */
export const formatterEllipsis = (text:string,maxCharacters:number) => text.slice(0,maxCharacters) + '...';
/**
 * Cortar texto e add no final '...', caso ultrapasse a quantidade max de caracteres setado
 *
 * @param {string} text
 * @param {number} maxCharacters
 * @returns {string}
 */
const ellipsis = (text:string, maxCharacters:number)=>{
    if(!hasNeedEllipsis(text,maxCharacters)) return text;
    return formatterEllipsis(text, maxCharacters);
};


/**
 * Saber se há necessidade de add '...'. Isso ocorre quando atingi a quantidade max de palavras
 *
 * @param {string} paragraph
 * @param {number} maxWords
 * @return {booelan}
 */
export const reachedMaxWords = (paragraph:string, maxWords:number) => paragraph.replace(/\s+/g, ' ').split(' ').length > maxWords;

/**
 * pega a quantidade max de palavras, e add '...' no final. caso ao contrário faz nada.
 *
 * @param {string} paragraph
 * @param {number} maxWords
 * @returns
 */
export const wordEllipsis = (paragraph:string, maxWords:number) => {
    const words = paragraph.split(' ');
    if(words.length < maxWords) return paragraph;
    return words.splice(0, maxWords).join(' ') + '...';
};

export default ellipsis;