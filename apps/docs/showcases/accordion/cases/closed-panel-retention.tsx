import '@heliannuuthus/ui/styles.css';
import { Accordion } from '@heliannuuthus/ui';
import { Tag } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const accordionDisabledItems = [
    {
      value: 'preflight',
      title: copy('预检结果'),
      content: copy('构建、类型检查和 42 项端到端用例均已通过。'),
    },
    {
      value: 'rollback',
      title: copy('回滚方案'),
      content: copy('异常时切回上一版本。'),
    },
  ];

  const AccordionPresenceDemo = ({
    strategy = 'unmount',
  }: {
    strategy?: 'findable' | 'mounted' | 'unmount';
  }) => (
    <div className="display-panel">
      <div className="display-panel-heading">
        <div>
          <span className="display-eyebrow">{strategy}</span>
          <strong>{copy('关闭面板的保留策略')}</strong>
        </div>
        <Tag>
          {strategy === 'findable'
            ? 'hiddenUntilFound'
            : strategy === 'mounted'
              ? 'keepMounted'
              : copy('默认卸载')}
        </Tag>
      </div>
      <Accordion
        items={accordionDisabledItems}
        {...(strategy === 'findable'
          ? { hiddenUntilFound: true as const }
          : strategy === 'mounted'
            ? { keepMounted: true }
            : {})}
      />
    </div>
  );

  return AccordionPresenceDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AccordionCase09({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-accordion">
      <Example />
    </div>
  );
}
