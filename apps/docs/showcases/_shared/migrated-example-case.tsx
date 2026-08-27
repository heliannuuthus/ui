import type { ComponentExample } from '@docs/component-docs';
import { ComponentHarness } from '@docs/component-harness';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import '../../src/showcase.css';

type MigratedExampleCaseProps = {
  exampleIndex: number;
  locale: 'en' | 'zh';
  slug: string;
};

export const MigratedExampleCase = ({
  exampleIndex,
  locale,
  slug,
}: MigratedExampleCaseProps) => {
  const [example, setExample] = useState<ComponentExample>();

  useEffect(() => {
    let active = true;

    void Promise.all([
      import('@docs/component-docs'),
      import('@docs/i18n'),
    ]).then(async ([documentationModule, i18nModule]) => {
      await i18nModule.i18n.changeLanguage(locale);
      const nextExample =
        documentationModule.componentDocumentation[slug]?.examples[
          exampleIndex
        ];

      if (active) setExample(nextExample);
    });

    return () => {
      active = false;
    };
  }, [exampleIndex, locale, slug]);

  if (example == null) {
    return (
      <div aria-live="polite" className="component-case-loading">
        {locale === 'zh' ? '正在加载示例…' : 'Loading example…'}
      </div>
    );
  }

  const renderPreview = (values: Record<string, string>) =>
    typeof example.preview === 'function'
      ? example.preview(values)
      : example.preview;
  const style =
    example.previewHeight == null
      ? undefined
      : ({
          '--demo-preview-height':
            typeof example.previewHeight === 'number'
              ? `${example.previewHeight}px`
              : example.previewHeight,
        } as CSSProperties);

  return (
    <div
      className={`demo-preview demo-preview-${slug}${
        example.cases || example.caseAxes ? ' demo-preview-harness' : ''
      }`}
      style={style}
    >
      {example.cases ? (
        <ComponentHarness
          cases={example.cases}
          minCaseWidth={example.caseMinWidth}
        >
          {renderPreview}
        </ComponentHarness>
      ) : example.caseAxes ? (
        <ComponentHarness
          axes={example.caseAxes}
          minCaseWidth={example.caseMinWidth}
        >
          {renderPreview}
        </ComponentHarness>
      ) : (
        renderPreview({})
      )}
    </div>
  );
};
