type MinutesToHours = {
    hours: number;
    minutes: number;
};
type SecondsToHours = MinutesToHours & {seconds:number};

export const minutesToHours = (time:number):MinutesToHours => {
    const divider = 60;
    return {
        hours: Math.floor( time / divider ),
        minutes: time % divider,
    }  
};
export const secondsToHours = (time:number):SecondsToHours =>{
    const divider = 60*60;
    return {
        hours: Math.floor( time / divider ),
        minutes: Math.floor( (time % divider) / 60 ),
        seconds: time % 60,
    }
};

/**
 *
 * Minutos para horas
 * @param {number} time
 * @param {string} [pattern='H:i'] patrões disponíveis: H (horas) i (minutos)
 * @returns {string} @examples time:65, pattern: 'H horas i m\\inutos' => 1 hora 5 minutos
 */
export const formatterMinutesToHours = (time:number, pattern:string='H:i'):string => {
    const {hours,minutes} = minutesToHours(time);
    const data:any = {
        'H': hours,
        'i': minutes,
    };
    return pattern.replace(/\\?(H|i)/g, (match:string)=>{
        return data[match] !== undefined ? data[match]: match.slice(1);
    });
};
/**
 *
 * Segundos para horas
 * @param {number} time
 * @param {string} [pattern='H:i'] patrões disponíveis: H (horas) i (minutos) s (segundos)
 * @returns {string} @examples time:3900, pattern: 'H hora\\s i m\\inuto\\s s \\segundo\\s' => 1 hora 5 minutos 0 segundos
 */
export const formatterSecondsToHours = (time:number, pattern:string='H:i:s'):string => {
    const {hours,minutes,seconds} = secondsToHours(time);
    const data:any = {
        "H" : hours,
        "i" : minutes,
        "s": seconds,
    };
    return pattern.replace(/\\?(H|i|s)/g, (match:string)=>{
        return data[match] !== undefined ? data[match]: match.slice(1);
    });
};