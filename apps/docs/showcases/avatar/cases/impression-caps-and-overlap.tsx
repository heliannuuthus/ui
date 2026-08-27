import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Avatar } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const avatarPeople = [
    { initials: copy('林'), tone: 'blue' },
    { initials: copy('周'), tone: 'amber' },
    { initials: copy('陈'), tone: 'green' },
    { initials: copy('许'), tone: 'rose' },
    { initials: copy('吴'), tone: 'violet' },
    { initials: copy('宋'), tone: 'slate' },
  ] as const;

  const AvatarGroupDemo = () => {
    const [max, setMax] = useState(4);
    const [overlap, setOverlap] = useState(8);

    return (
      <div className="display-avatar-group-demo">
        <div className="display-avatar-group-stage">
          <div>
            <span>{copy('发布协作者')}</span>
            <strong>
              {copy('当前展示')}
              {Math.min(max, avatarPeople.length)}
              {copy('人')}
            </strong>
          </div>
          <Avatar.Group
            aria-label={copy(
              `展示 ${Math.min(max, avatarPeople.length)} 位协作者，其余自动汇总`
            )}
            items={avatarPeople.map((person) => ({
              alt: person.initials,
              fallback: person.initials,
              fallbackProps: {
                className: `display-avatar-tone-${person.tone}`,
              },
            }))}
            max={max}
            overlap={overlap}
            size="lg"
          />
        </div>
        <div className="display-avatar-group-controls">
          <label>
            <span>
              {copy('最多展示')}
              <output>{max}</output>
            </span>
            <Slider
              aria-label={copy('最多展示的头像数量')}
              effect="none"
              max={6}
              min={1}
              onChange={(value) =>
                setMax(Array.isArray(value) ? (value[0] ?? 4) : value)
              }
              step={1}
              value={max}
            />
          </label>
          <label>
            <span>
              {copy('重叠程度')}
              <output>{overlap}px</output>
            </span>
            <Slider
              aria-label={copy('头像重叠程度')}
              effect="none"
              max={12}
              min={0}
              onChange={(value) =>
                setOverlap(Array.isArray(value) ? (value[0] ?? 8) : value)
              }
              step={2}
              value={overlap}
            />
          </label>
        </div>
      </div>
    );
  };

  return AvatarGroupDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AvatarCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-avatar">
      <Example />
    </div>
  );
}
