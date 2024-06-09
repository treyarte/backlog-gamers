export enum articleSitesEnum {
    Unknown = 0,
    Ign = 1,
    GameSpot = 2,
    Vg247 = 3,
    PcGamer = 4,
    NintendoLife = 5,
    Kotaku = 6,
    GameDeveloper = 7,
    Gematsu = 8,
    Desctructiod = 9,
    Mmos = 10,
    Siliconera = 11,
    HardcoreGamer = 12,
    Game8co = 13,
}

export type articleSiteType = {
    name:string,
    url:string
} 

export const articleSitesDisplay = {
    [articleSitesEnum.Unknown]: {name: "Unknown", url: "/404"},
    [articleSitesEnum.Ign]: {name: "IGN", url: "https://www.ign.com"},
    [articleSitesEnum.GameSpot]: {name: "GameSpot", url: "https://www.gamespot.com/"},
    [articleSitesEnum.Vg247]: {name: "VG247", url: "https://www.vg247.com"},
    [articleSitesEnum.PcGamer]: {name: "PC Gamer", url: "https://www.pcgamer.com"},
    [articleSitesEnum.NintendoLife]: {name: "Nintendo Life", url: "https://www.nintendolife.com"},
    [articleSitesEnum.Kotaku]: {name: "Kotaku", url: "https://kotaku.com"},
    [articleSitesEnum.GameDeveloper]: {name: "Game Developer", url: "https://www.gamedeveloper.com"},
    [articleSitesEnum.Gematsu]: {name: "Gematsu", url: "https://www.gematsu.com"},
    [articleSitesEnum.Desctructiod]: {name: "Desctructiod", url: "https://www.destructoid.com"},
    [articleSitesEnum.Mmos]: {name: "MMOs", url: "https://mmos.com"},
    [articleSitesEnum.Siliconera]: {name: "Siliconera", url: "https://www.siliconera.com"},
    [articleSitesEnum.HardcoreGamer]: {name: "Hardcore Gamer", url: "https://hardcoregamer.com"},
    [articleSitesEnum.Game8co]: {name: "Game8", url: "https://game8.co/articles"},
}