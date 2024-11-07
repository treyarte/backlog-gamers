import { createContext } from "react";
import { articleSitesEnum } from "../models/enums/articleSitesEnum";

/**
 * Type for NavContext object
 */
type feedSettingsContextType = {
    excludedSites:articleSitesEnum[], 
    updateExcludedSites:(sites:articleSitesEnum[]) => void,    
}

/**
 * The starting state of our NavContext
 */
const defaultFeedSettingsContext:feedSettingsContextType = {
    excludedSites: [],
    updateExcludedSites: function (sites: articleSitesEnum[]): void {
        throw new Error("Function not implemented.");
    }
}

export const FeedSettingsContext = createContext(defaultFeedSettingsContext);