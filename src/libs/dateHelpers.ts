/**
 * Returns a date in utc time that matches
 * 2024-06-09T14:00:33.183+00:00 format
 * @param date 
 * @returns 
 */
export const convertDateToUtc = (date:Date) => {
    return date.toISOString().replace('Z', '+00:00');
}