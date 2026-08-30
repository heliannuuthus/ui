import { englishContentTranslations } from '../../src/i18n/content-translations';

const sourcePhrases = Object.keys(englishContentTranslations).sort(
  (left, right) => right.length - left.length
);

export const createCaseCopy = (locale: 'en' | 'zh') => (source: string) => {
  if (locale === 'zh') return source;

  const exact = englishContentTranslations[source];
  if (exact) return exact;

  return sourcePhrases.reduce(
    (localized, phrase) =>
      localized.includes(phrase)
        ? localized
            .split(phrase)
            .join(englishContentTranslations[phrase] ?? phrase)
        : localized,
    source
  );
};
