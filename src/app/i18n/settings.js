export const fallbackLocale = "en";
export const languages = [fallbackLocale, "de"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(locale = fallbackLocale, ns = defaultNS) {
  return {
    // debug: true,
    supportedLocales: languages,
    fallbackLocale,
    locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
