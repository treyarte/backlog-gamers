/**
 * Functions to help manage and format dates
 */

export const formatDate = (date:string|Date) => {
    const d = new Date(date);
    const options:Intl.DateTimeFormatOptions= {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(d);
    return formattedDate;
}