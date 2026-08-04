import { docsCopy } from './i18n/content';
import { useState } from 'react';
import { AspectRatio } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Label } from '@heliannuuthus/ui';

const coverRatios = [
  {
    id: 'landscape',
    label: '16:9',
    ratio: 16 / 9,
    description: docsCopy('横向文章封面'),
  },
  {
    id: 'standard',
    label: '4:3',
    ratio: 4 / 3,
    description: docsCopy('内容卡片封面'),
  },
  {
    id: 'square',
    label: '1:1',
    ratio: 1,
    description: docsCopy('社交媒体封面'),
  },
] as const;

export const AspectRatioCoverDemo = () => {
  const [activeRatio, setActiveRatio] = useState<(typeof coverRatios)[number]>(
    coverRatios[0]
  );
  const docsBasePath = window.location.hostname.endsWith('github.io')
    ? '/ui'
    : '';

  return (
    <div className="aspect-ratio-demo">
      <AspectRatio
        className="aspect-cover-frame"
        data-cover-ratio={activeRatio.id}
        ratio={activeRatio.ratio}
      >
        <img
          src={`${docsBasePath}/heliannuuthus.jpg`}
          alt={docsCopy('冰块中的向日葵')}
        />
        <div className="aspect-cover-copy">
          <span>HELIANNUUTHUS / NOTES</span>
          <strong>{docsCopy('让内容拥有稳定的画面')}</strong>
        </div>
        <span className="aspect-cover-ratio">{activeRatio.label}</span>
      </AspectRatio>

      <form
        className="aspect-cover-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <span className="aspect-cover-eyebrow">{docsCopy('封面设置')}</span>
          <strong>{docsCopy('新建内容封面')}</strong>
        </div>
        <div className="aspect-cover-field">
          <Label htmlFor="aspect-cover-title">{docsCopy('文章标题')}</Label>
          <Input
            id="aspect-cover-title"
            defaultValue={docsCopy('向日葵的夏天')}
          />
        </div>
        <div className="aspect-cover-field">
          <span id="aspect-cover-ratio-label">{docsCopy('展示比例')}</span>
          <div
            className="aspect-cover-options"
            role="group"
            aria-labelledby="aspect-cover-ratio-label"
          >
            {coverRatios.map((option) => (
              <Button
                aria-pressed={activeRatio.label === option.label}
                key={option.label}
                size="sm"
                type="button"
                variant={
                  activeRatio.label === option.label ? 'default' : 'outline'
                }
                onClick={() => setActiveRatio(option)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        <p>
          {docsCopy('当前用于')}
          {activeRatio.description}
          {docsCopy('，图片会自动填满容器并保持比例。')}
        </p>
        <Button size="sm" type="submit">
          {docsCopy('保存封面')}
        </Button>
      </form>
    </div>
  );
};
