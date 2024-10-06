export const roundDecimal = (decimal:number) => {
    return Math.round((decimal + Number.EPSILON) * 100)/100;  
}

export const convertToUsd=(value:number)=>{
    return new Intl.NumberFormat(undefined, {
        style:'currency',
        currency: 'USD',
        maximumFractionDigits:0,
        minimumFractionDigits:0,
    }).format(value);
}

const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

  /**
 * Generates a less deterministic random number by using 
 * @param min 
 * @param max 
 * @returns 
 */
export function getRandomNumber(min:number, max:number) {
    const array = new Uint32Array(1); //we need an array buffer to use crypto
    crypto.getRandomValues(array); //Gets us an random cryptographic number
    
    const cryptoRandom = array[0];  

    const now = Date.now(); 

    const combinedRandomTime = (cryptoRandom + now) / 2;  

    const seed = (combinedRandomTime % 1000) / 1000;

    return Math.floor(seed * (max - min + 1)) + min;
}