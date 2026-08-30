import '@heliannuuthus/ui/styles.css';
import { Stack, type StackAlign, type StackJustify } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const alignmentCases: Array<{
    align?: StackAlign;
    description: string;
    justify?: StackJustify;
    label: string;
    title: string;
  }> = [
    {
      align: 'start',
      description: copy('align 控制交叉轴，元素沿顶部对齐。'),
      label: 'align="start"',
      title: copy('交叉轴起点'),
    },
    {
      align: 'center',
      description: copy('align 控制交叉轴，元素按中心线对齐。'),
      label: 'align="center"',
      title: copy('交叉轴居中'),
    },
    {
      align: 'end',
      description: copy('align 控制交叉轴，元素沿底部对齐。'),
      label: 'align="end"',
      title: copy('交叉轴终点'),
    },
    {
      justify: 'start',
      description: copy('justify 控制主轴，内容从左侧开始排列。'),
      label: 'justify="start"',
      title: copy('主轴起点'),
    },
    {
      justify: 'center',
      description: copy('justify 控制主轴，整组内容在中间聚合。'),
      label: 'justify="center"',
      title: copy('主轴居中'),
    },
    {
      justify: 'between',
      description: copy('justify 控制主轴，把剩余空间放到元素之间。'),
      label: 'justify="between"',
      title: copy('两端分布'),
    },
  ];

  const StackAlignmentDemo = ({
    axis = 'align',
  }: {
    axis?: 'align' | 'justify';
  }) => {
    const visibleCases = alignmentCases.filter((item) =>
      axis === 'justify' ? item.justify != null : item.align != null
    );

    return (
      <div className="stack-alignment-grid">
        {visibleCases.map((item) => (
          <article className="stack-alignment-case" key={item.label}>
            <div className="stack-alignment-copy">
              <code>{item.label}</code>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <Stack
              align={item.align ?? 'center'}
              block
              className="stack-alignment-stage"
              gap={6}
              justify={item.justify ?? 'start'}
              orientation="horizontal"
            >
              <span className="stack-alignment-item stack-alignment-item-short">
                A
              </span>
              <span className="stack-alignment-item stack-alignment-item-tall">
                B
              </span>
              <span className="stack-alignment-item">C</span>
            </Stack>
          </article>
        ))}
      </div>
    );
  };

  return StackAlignmentDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function StackCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-stack">
      <Example />
    </div>
  );
}
