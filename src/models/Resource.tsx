import { IDictionary } from './Generics'

export enum Language {
    French = "fr",
    English = "en",
    Spanish = "es",
    German = "gr",
    Italian = "it",
    Dutch = "nl"
}

export enum RessourceType {
    Text = 1,
    Image = 2
}

export class Resource {

    constructor(id: string, type: RessourceType, value: string) {
        this.id = id;
        this.type = type;
        this.value = value;

        function toLower() {
            return String(value).toLowerCase();
            
        }

        function toUpper() {
            return String(value.toUpperCase());
        }

        function firstUpper() {
            if (!value || value == "") return "";
            return value.charAt(0).toUpperCase() + value.slice(1);
        }

        // function upperAfterSpace() {
        //     if (!value || value == "") return "";
        //     return value.charAt(0).toUpperCase() + value.slice(1);
        // }
    }

    id: string;
    type: RessourceType;
    value: string;
}

class ResourceDictionary {
    static FRResources: IDictionary<Resource> = {
        ["general.codif"]: new Resource("general.codif", RessourceType.Text, "Codif"),
        ["general.title"]: new Resource("general.title", RessourceType.Text, "Titre"),
        ["general.theme"]: new Resource("general.theme", RessourceType.Text, "Thème"),
        ["general.subtheme"]: new Resource("general.subtheme", RessourceType.Text, "Sous-thème"),
        ["general.country"]: new Resource("general.country", RessourceType.Text, "Pays"),
        ["general.lang"]: new Resource("general.lang", RessourceType.Text, "Langue"),
        ["general.order"]: new Resource("general.order", RessourceType.Text, "Tri par"),

        ["search.qst.search"]: new Resource("search.qst.search", RessourceType.Text, "VOUS CHERCHEZ UN TITRE ?"),
        ["search.msg.fill"]: new Resource("search.msg.fill", RessourceType.Text, "Renseignez l'un des critères ci-dessous puis validez"),
        ["search.titlepress"]: new Resource("search.titlepress", RessourceType.Text, "Titre Presse"),
        ["search.allcatalog"]: new Resource("search.allcatalog", RessourceType.Text, "Ensemble du catalogue"),
        ["search.withsite"]: new Resource("search.withsite", RessourceType.Text, "Avec site Web "),
        ["search.titleexport"]: new Resource("search.titleexport", RessourceType.Text, "Titres exportés"),
 
        ["search.select.theme"]: new Resource("search.select.theme", RessourceType.Text, "sélectionnez un thème"),
        ["search.select.subtheme"]: new Resource("search.select.subtheme", RessourceType.Text, "sélectionnez un sous thème"),
        ["search.select.country"]: new Resource("search.select.country", RessourceType.Text, "sélectionnez un pays"),
        ["search.select.lang"]: new Resource("search.select.lang", RessourceType.Text, "sélectionnez une langue"),
    }

    static ENResources: IDictionary<Resource> = {
        ["general.codif"]: new Resource("general.codif", RessourceType.Text, "Codif"),
        ["general.title"]: new Resource("general.title", RessourceType.Text, "Title"),
        ["general.theme"]: new Resource("general.theme", RessourceType.Text, "Theme"),
        ["general.subtheme"]: new Resource("general.subtheme", RessourceType.Text, "Subtheme"),
        ["general.country"]: new Resource("general.country", RessourceType.Text, "Country"),
        ["general.lang"]: new Resource("general.lang", RessourceType.Text, "Language"),
        ["general.order"]: new Resource("general.order", RessourceType.Text, "Sort by"),

        ["search.qst.search"]: new Resource("search.qst.search", RessourceType.Text, "ARE YOU LOOKING FOR A TITLE ?"),
        ["search.msg.fill"]: new Resource("search.msg.fill", RessourceType.Text, "Fill out one of the criteria below and validate"),
        ["search.titlepress"]: new Resource("search.titlepress", RessourceType.Text, "Title Press"),
        ["search.allcatalog"]: new Resource("search.allcatalog", RessourceType.Text, "Entire catalog"),
        ["search.withsite"]: new Resource("search.withsite", RessourceType.Text, "With website"),
        ["search.titleexport"]: new Resource("search.titleexport", RessourceType.Text, "Exported Titles"),

        ["search.select.theme"]: new Resource("search.select.theme", RessourceType.Text, "select a theme"),
        ["search.select.subtheme"]: new Resource("search.select.subtheme", RessourceType.Text, "select a sub theme"),
        ["search.select.country"]: new Resource("search.select.country", RessourceType.Text, "select a country"),
        ["search.select.lang"]: new Resource("search.select.lang", RessourceType.Text, "select a language"),
    }

    static ESResources: IDictionary<Resource> = {
        ["general.codif"]: new Resource("general.codif", RessourceType.Text, "Codif"),
        ["general.title"]: new Resource("general.title", RessourceType.Text, "Título"), 
        ["general.theme"]: new Resource("general.theme", RessourceType.Text, "Tema"),
        ["general.subtheme"]: new Resource("general.subtheme", RessourceType.Text, "Subtema"),
        ["general.country"]: new Resource("general.country", RessourceType.Text, "Paese"),
        ["general.lang"]: new Resource("general.lang", RessourceType.Text, "Idioma"),
        ["general.order"]: new Resource("general.order", RessourceType.Text, "Ordenar por"),

        ["search.qst.search"]: new Resource("search.qst.search", RessourceType.Text, "¿ESTÁS BUSCANDO UN TÍTULO?"),
        ["search.msg.fill"]: new Resource("search.msg.fill", RessourceType.Text, "Rellene uno de los siguientes criterios y valide"),
        ["search.titlepress"]: new Resource("search.titlepress", RessourceType.Text, "Título Prensa"),
        ["search.allcatalog"]: new Resource("search.allcatalog", RessourceType.Text, "Todo el catalogo"),
        ["search.withsite"]: new Resource("search.withsite", RessourceType.Text, "Con sitio web"),
        ["search.titleexport"]: new Resource("search.titleexport", RessourceType.Text, "Títulos exportados"),

        ["search.select.theme"]: new Resource("search.select.theme", RessourceType.Text, "seleccione un tema"),
        ["search.select.subtheme"]: new Resource("search.select.subtheme", RessourceType.Text, "seleccione un tema secundario"),
        ["search.select.country"]: new Resource("search.select.country", RessourceType.Text, "selecciona un país"),
        ["search.select.lang"]: new Resource("search.select.lang", RessourceType.Text, "selecciona un idioma"),
    }

    static GRResources: IDictionary<Resource> = {
        ["general.codif"]: new Resource("general.codif", RessourceType.Text, "Codif"),
        ["general.title"]: new Resource("general.title", RessourceType.Text, "Titel"),
        ["general.theme"]: new Resource("general.theme", RessourceType.Text, "Thema"),
        ["general.subtheme"]: new Resource("general.subtheme", RessourceType.Text, "Subthema"),
        ["general.country"]: new Resource("general.country", RessourceType.Text, "Land"),
        ["general.lang"]: new Resource("general.lang", RessourceType.Text, "Sprache"),
        ["general.order"]: new Resource("general.order", RessourceType.Text, "Sortieren nach"),

        ["search.qst.search"]: new Resource("search.qst.search", RessourceType.Text, "SUCHEN SIE EINEN TITEL?"),
        ["search.msg.fill"]: new Resource("search.msg.fill", RessourceType.Text, "Füllen Sie eines der folgenden Kriterien aus und bestätigen Sie"),
        ["search.titlepress"]: new Resource("search.titlepress", RessourceType.Text, "Titel drücken"),
        ["search.allcatalog"]: new Resource("search.allcatalog", RessourceType.Text, "Gesamter Katalog"),
        ["search.withsite"]: new Resource("search.withsite", RessourceType.Text, "Mit Website"),
        ["search.titleexport"]: new Resource("search.titleexport", RessourceType.Text, "Exportierte Titel"),

        ["search.select.theme"]: new Resource("search.select.theme", RessourceType.Text, "Wählen Sie ein Thema"),
        ["search.select.subtheme"]: new Resource("search.select.subtheme", RessourceType.Text, "Wählen Sie ein Unterthema"),
        ["search.select.country"]: new Resource("search.select.country", RessourceType.Text, "Wählen Sie ein Land aus"),
        ["search.select.lang"]: new Resource("search.select.lang", RessourceType.Text, "Wählen Sie eine Sprache aus"),
    }

    static ITResources: IDictionary<Resource> = {
        ["general.codif"]: new Resource("general.codif", RessourceType.Text, "Codif"),
        ["general.title"]: new Resource("general.title", RessourceType.Text, "Titolo"),
        ["general.theme"]: new Resource("general.theme", RessourceType.Text, "Tema"),
        ["general.subtheme"]: new Resource("general.subtheme", RessourceType.Text, "Sottotema"),
        ["general.country"]: new Resource("general.country", RessourceType.Text, "Paese"),
        ["general.lang"]: new Resource("general.lang", RessourceType.Text, "Lingua"),
        ["general.order"]: new Resource("general.order", RessourceType.Text, "Ordina per"),

        ["search.qst.search"]: new Resource("search.qst.search", RessourceType.Text, "STAI CERCANDO UN TITOLO?"),
        ["search.msg.fill"]: new Resource("search.msg.fill", RessourceType.Text, "Compila uno dei criteri seguenti e convalida"),
        ["search.titlepress"]: new Resource("search.titlepress", RessourceType.Text, "Titolo Premere"),
        ["search.allcatalog"]: new Resource("search.allcatalog", RessourceType.Text, "Tutto il catalogo"),
        ["search.withsite"]: new Resource("search.withsite", RessourceType.Text, "Con il sito Web"),
        ["search.titleexport"]: new Resource("search.titleexport", RessourceType.Text, "Titoli esportati"),

        ["search.select.theme"]: new Resource("search.select.theme", RessourceType.Text, "seleziona un tema"),
        ["search.select.subtheme"]: new Resource("search.select.subtheme", RessourceType.Text, "seleziona un sottotema"),
        ["search.select.country"]: new Resource("search.select.country", RessourceType.Text, "seleziona un paese"),
        ["search.select.lang"]: new Resource("search.select.lang", RessourceType.Text, "seleziona una lingua"),
    }

    static NLResources: IDictionary<Resource> = {
        ["general.codif"]: new Resource("general.codif", RessourceType.Text, "Codif"),
        ["general.title"]: new Resource("general.title", RessourceType.Text, "Titel"),
        ["general.theme"]: new Resource("general.theme", RessourceType.Text, "Thema"),
        ["general.subtheme"]: new Resource("general.subtheme", RessourceType.Text, "Subthema"),
        ["general.country"]: new Resource("general.country", RessourceType.Text, "Land"),
        ["general.lang"]: new Resource("general.lang", RessourceType.Text, "Taal"),
        ["general.order"]: new Resource("general.order", RessourceType.Text, "Sorteer op"),

        ["general.content"]: new Resource("", RessourceType.Text, ""),
        ["search.qst.search"]: new Resource("search.qst.search", RessourceType.Text, "ZOEK JE EEN TITEL ?"),
        ["search.msg.fill"]: new Resource("search.msg.fill", RessourceType.Text, "Vul een van de onderstaande criteria in en valideer"),
        ["search.titlepress"]: new Resource("search.titlepress", RessourceType.Text, "Titel Druk"),
        ["search.allcatalog"]: new Resource("search.allcatalog", RessourceType.Text, "Volledige catalogus"),
        ["search.withsite"]: new Resource("search.withsite", RessourceType.Text, "Met website"),
        ["search.titleexport"]: new Resource("search.titleexport", RessourceType.Text, "Geëxporteerde titels"),

        ["search.select.theme"]: new Resource("search.select.theme", RessourceType.Text, "selecteer een thema"),
        ["search.select.subtheme"]: new Resource("search.select.subtheme", RessourceType.Text, "selecteer een subthema"),
        ["search.select.country"]: new Resource("search.select.country", RessourceType.Text, "selecteer een land"),
        ["search.select.lang"]: new Resource("search.select.lang", RessourceType.Text, "selecteer een taal"),
    }
}

export class Resources {
    static dictionary : IDictionary<IDictionary<Resource>> = {
        [Language.French]: ResourceDictionary.FRResources,
        [Language.English]: ResourceDictionary.ENResources,
        [Language.Spanish]: ResourceDictionary.ESResources,
        [Language.German]: ResourceDictionary.GRResources,
        [Language.Italian]: ResourceDictionary.ITResources,
        [Language.Dutch]: ResourceDictionary.NLResources,
    }
}
