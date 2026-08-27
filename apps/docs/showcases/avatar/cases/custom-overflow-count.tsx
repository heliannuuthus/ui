import '@heliannuuthus/ui/styles.css';
import { Avatar } from '@heliannuuthus/ui';
import { Tag } from '@heliannuuthus/ui';
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

  const AvatarCountDemo = ({ custom = false }: { custom?: boolean }) => (
    <div className="rounded-3xl border p-5">
      <Avatar.Group
        items={avatarPeople.map((person) => ({
          alt: person.initials,
          fallback: person.initials,
          fallbackProps: { className: `display-avatar-tone-${person.tone}` },
        }))}
        max={3}
        renderCount={custom ? (count) => <Tag>+{count}</Tag> : undefined}
        shape="square"
        size="lg"
      />
    </div>
  );

  return AvatarCountDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AvatarCase05({
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
