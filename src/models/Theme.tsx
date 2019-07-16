import { IDictionary } from './Generics';

export class Theme {

    constructor(id: string, label: string, ...subThemes: Theme[]) {
        this.id = id;
        this.label = label;
        this.subThemes = subThemes;
        // if (subThemes) {
        //     subThemes.forEach((item) => {
        //         this.subThemes![item.id] = item;
        //     })
        // }
    }

    id: string;
    label: string;
    subThemes: Theme[];

    static Themes: Theme[] = [
        new Theme("01", "ACTUALITES GENERALES", ...[
            new Theme("20","ECONOMIE/FINANCE"),new Theme("21","NEWS/OPINION"),new Theme("22","PROFESSIONNEL"),new Theme("23","MASCULINS GENERALISTES/MODE")
        ]),
        new Theme("02", "ART ET CULTURE", ...[
            new Theme("24","ARTS ET SPECTACLES"),new Theme("25","HISTOIRE/COLLECTION/LITTERATUR"),new Theme("26","MUSIQUE CLASS/JAZZ/ INSTRUMENT")
        ]),
        new Theme("03", "INFORMATIQUE ET NUMERIQUE", ...[
            new Theme("27","INFORMATIQUE"),new Theme("28","CINEMA IMAGE ET SON"),new Theme("46","SCIENCES"),new Theme("66","JEUX ET STRATEGIE"),
        ]),
        new Theme("04", "ADO ET MUSIQUE", ...[
            new Theme("29","BD"),new Theme("30","MUSIQUE POP ROCK"),new Theme("31","ADO"),
        ]),
        new Theme("05", "SPORTS-AUTO-LOISIRS", ...[
            new Theme("32","AUTO"),new Theme("33","MOTO"),new Theme("34","SPORTS"),new Theme("35","LOISIRS DIVERS"),
        ]),
        new Theme("06", "NATURE ET VOYAGES", ...[
            new Theme("36","ANIMAUX DOMESTIQ./VIE SAUVAGE"),new Theme("37","VOYAGES"),new Theme("38","CHASSE ET PECHE"),
        ]),
        new Theme("07", "MAISON ET ART DE VIVRE", ...[
            new Theme("39","DECORATION/BRICOLAGE"),new Theme("40","CUISINE ET VINS"),new Theme("67","JARDIN/EXTERIEUR"),new Theme("68","LOISIRS CREATIFS"),
        ]),
        new Theme("08", "FEMININS", ...[
            new Theme("41","FEMININS MODE"),new Theme("42","FAMILLE/VIE PRATIQUE"),
        ]),
        new Theme("09", "PICTURE PEOPLE", ...[
            new Theme("43","PICTURE PEOPLE"),
        ]),
        new Theme("10", "TELEVISION", ...[
            new Theme("44","TELEVISION"),
        ]),
        new Theme("11", "LUDIQUES", ...[
            new Theme("45","LUDIQUES"),
        ]),
        new Theme("12", "ENFANTS", ...[
            new Theme("62","EVEIL"),new Theme("63","ENFANCE"),new Theme("64","JUNIOR"),new Theme("65","DIVERS JEUNESSE"),
        ]),
        new Theme("13", "ADULTES", ...[
            new Theme("47","ADULTES"),
        ]),
        new Theme("14", "ENCYCLOPEDIES AVEC OBJET", ...[
            new Theme("15","ENCYCLOPEDIES"),
        ]),
        new Theme("15", "DVD MUSIQUE JEUX", ...[
            new Theme("56","VIDEO"),new Theme("57","MUSIQUE MULTIMEDIA"),new Theme("58","JEUX"),new Theme("59","ENFANT MULTIMEDIA"),new Theme("60","AUTRES"),
        ]),
        new Theme("16", "PRESSE INTERNATIONALE", ...[
            new Theme("51","ACTUALITE/ECONOMIE INTL"),new Theme("52","FEMININ INTL"),new Theme("53","PEOPLE INTL"),new Theme("54","MASCULIN INTL"),new Theme("55","DECO/MAISON/ART INTL"),new Theme("61","AUTRES PUBS INTL"),
        ]),
        new Theme("17", "QUOTIDIENS NATIONAUX", ...[
            new Theme("48","ACTUALITE GENE./ ECO/FINANCE"),new Theme("49","ACTUALITE SPORTIVE"),new Theme("50","QUOTIDIENS HIPPIQUES"),
        ]),
        new Theme("18", "PRESSE QUOT. REGIONALE", ...[
            new Theme("94","PRESSE QUOT. REGIONALE"),
        ]),
        new Theme("22", "DIVERSALIS ENFANTS", ...[
            new Theme("71","COLLECTIONNABLES"),new Theme("72","BONBONS A LICENCE"),new Theme("73","GADGETS"),new Theme("74","PAPETERIE A LICENCE"),
        ]),
        new Theme("23", "DIVERSALIS PARENTS", ...[
            new Theme("69","IDEES CADEAUX"),new Theme("70","PRODUITS DE DEPANNAGE"), new Theme("75","MUSIK"),
        ]),
        new Theme("24", "POINT +", ...[
            new Theme("76","Jeux et Jouets"),new Theme("77","Cadeaux"),new Theme("78","Depannage"),new Theme("79","Librairie"),new Theme("80","Papeterie et Carterie"),new Theme("81","Video"),new Theme("82","Musique"),new Theme("83","Jeux Video"),new Theme("84","Cartes dématérialisées"),new Theme("85","Telephonie"),new Theme("86","Article Fumeur"),
        ]),
    ];
}

// ["19","95","PRODUITS DIVERS"];
// ["19","96","LIVRES"];
// ["20","97","COUPONS OFFRE TITRES"];
// ["20","98","CIRC. AFF. DOC PROF."];
// ["21","99","LOGISTIQUE"];