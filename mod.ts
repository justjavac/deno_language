import { hasOwnProperty } from "https://deno.land/x/std/_util/has_own_property.ts";
import languages from "./languages.ts";

export type LangDirection = "rtl" | "ltr";

export interface LanguageInfo {
  /** name of the language in English */
  name: string;
  nativeName: string;
  direction: LangDirection;
}

/**
 * Get the writing direction of the language. "rtl" or "ltr".
 * @param langcode
 */
export function getLangDirection(langcode: string): LangDirection {
  return hasOwnProperty(languages.rtl, langcode) ? "rtl" : "ltr";
}

/**
 * Check if the language code is valid.
 * @param langcode
 */
export function isValid(
  langcode: string,
): langcode is keyof typeof languages.lang {
  return hasOwnProperty(languages.lang, langcode);
}

/**
 * get an array with all the language codes supported
 */
export function getAllLanguageCode(): string[] {
  return Object.keys(languages.lang);
}

export function getLanguageInfo(langcode: string): LanguageInfo | null {
  if (!isValid(langcode)) {
    return null;
  }

  let lang = languages.lang[langcode];

  return {
    name: lang[0],
    nativeName: lang[1],
    direction: getLangDirection(langcode),
  };
}
