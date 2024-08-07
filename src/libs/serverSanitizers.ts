
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { removeSpecialCharacters } from './stringHelpers';

/**
 * Creates a sanitized short description
 * @param text 
 * @param length 
 * @param useHtml 
 * @returns 
 */
export const getShortCleanDescription =(text: string, length: number, useHtml?:boolean) => {

    const clean = DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(text, {USE_PROFILES: {html: useHtml}});

    if (clean.length > length) {
        return clean.substring(0, length) + '...';
    } else {
        return clean;
    }
}

/**
 * Clean content that is meant to have HTML and keeps the good HTML
 * @param text 
 * @returns 
 */
export const getCleanContent = (text: string) => {
    const clean = DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(text);
    return clean;
}


/**
 * Cleans the passed in input to prevent xss attacks/etc
 */
export const sanitizeInput = (input:string) => {
    if(!input) {
        return "";
    }
    const cleanedInput = DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(input, 
                                {USE_PROFILES: {html: false}, ALLOWED_TAGS: []}); //To Prevent the default allowed tags
    return cleanedInput;
}

/**
 * Cleans input that is meant to be a number and returns a valid integer
 * @param input 
 */
export const sanitizeInputInt = (input:string|number|undefined) => {

    const cleanedInput = DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(`${input}`, {USE_PROFILES: {html: false}, ALLOWED_TAGS: []});
    
    const parsedInt = parseInt(cleanedInput);

    //handling really large numbers
    if(parsedInt > 99999999) {
        return 0;
    }

    return isNaN(parsedInt) ? 0 : parsedInt;    
}

/**
 * Cleans input that is meant to be a url slug which replaces spaces with '-' and  
 * removes any other special characters
 */
export const sanitizeInputSlug = (slug:string) => {
    const cleanSlug = sanitizeInput(slug);
    
    //To avoid losing '-' when remove special characters
    const slugWithSpaces = cleanSlug.replaceAll("-", " ");
    
    const slugNoSpecialChars = removeSpecialCharacters(slugWithSpaces);
    
    //Adding back '-' which all slugs should use and not have any spaces
    const validSlug = slugNoSpecialChars.replaceAll(" ", "-");

    return validSlug;
}