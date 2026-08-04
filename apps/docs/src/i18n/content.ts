import { i18n } from '.';
import { englishContentTranslations } from './content-translations';

const chinesePattern = /[\u3400-\u9fff]/u;
const sourcePhrases = Object.keys(englishContentTranslations).sort(
  (left, right) => right.length - left.length
);

const isEnglish = () => {
  return (i18n.resolvedLanguage ?? i18n.language).startsWith('en');
};

export const docsCopy = (source: string): string => {
  if (!isEnglish() || !chinesePattern.test(source)) return source;

  const exact = englishContentTranslations[source];
  if (exact) return exact;

  let localized = source;
  for (const phrase of sourcePhrases) {
    if (localized.includes(phrase)) {
      localized = localized
        .split(phrase)
        .join(englishContentTranslations[phrase] ?? phrase);
    }
  }
  return localized;
};
