type SourceLocale = 'en' | 'zh';

const exampleNames = {
  en: 'EnExample',
  zh: 'ZhExample',
} as const;

export const localizeShowcaseSource = (
  source: string,
  locale: SourceLocale
) => {
  const selectedName = exampleNames[locale];
  const otherName = exampleNames[locale === 'zh' ? 'en' : 'zh'];
  const selectedStart = source.indexOf(`const ${selectedName} =`);
  const otherStart = source.indexOf(`const ${otherName} =`);
  const wrapperStart = source.indexOf('export default function');

  if (selectedStart < 0 || otherStart < 0 || wrapperStart < 0) return source;

  const firstExampleStart = Math.min(selectedStart, otherStart);
  const selectedEnd = [otherStart, wrapperStart]
    .filter((index) => index > selectedStart)
    .sort((left, right) => left - right)[0];

  if (selectedEnd == null) return source;

  const prefix = source.slice(0, firstExampleStart).trimEnd();
  const selectedExample = source
    .slice(selectedStart, selectedEnd)
    .trim()
    .replace(`const ${selectedName} =`, 'const Example =');
  return `${prefix}\n\n${selectedExample}\n\nexport default Example;\n`;
};
