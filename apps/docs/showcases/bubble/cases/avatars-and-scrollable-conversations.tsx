import '@heliannuuthus/ui/styles.css';
import { Avatar } from '@heliannuuthus/ui';
import { Tag } from '@heliannuuthus/ui';
import { Bubble } from '@heliannuuthus/ui';
import { ScrollArea } from '@heliannuuthus/ui';
import { Check } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const conversationMessages: ReadonlyArray<{
    time: string;
    author: string;
    avatar: string;
    content: string;
    align?: 'start' | 'end';
    status?: string;
  }> = [
    {
      time: '21:40',
      author: copy('系统'),
      avatar: copy('系'),
      content: copy('预检任务已开始。'),
    },
    {
      time: '21:41',
      author: copy('许澄'),
      avatar: copy('许'),
      content: copy('迁移脚本已在预览环境验证。'),
    },
    {
      time: '21:42',
      author: copy('系统'),
      avatar: copy('系'),
      content: copy('构建 #1842 已通过。'),
    },
    {
      time: '21:44',
      author: copy('周一'),
      avatar: copy('周'),
      content: copy('回滚镜像已确认可用。'),
    },
    {
      time: '21:46',
      author: copy('林默'),
      avatar: copy('林'),
      content: copy('开始切换 10% 生产流量。'),
      align: 'end',
    },
    {
      time: '21:47',
      author: copy('系统'),
      avatar: copy('系'),
      content: copy('错误率维持在 0.04%。'),
    },
    {
      time: '21:48',
      author: copy('林默'),
      avatar: copy('林'),
      content: copy('全量切换完成。'),
      align: 'end',
      status: copy('已读'),
    },
  ];

  const BubbleConversationDemo = () => {
    return (
      <div className="display-scroller-shell">
        <div className="display-scroller-header">
          <div>
            <strong>{copy('发布协作记录')}</strong>
            <span>{copy('7 条消息 · Bubble + Avatar')}</span>
          </div>
          <Tag type="success">{copy('已完成')}</Tag>
        </div>
        <ScrollArea
          className="display-conversation-scroll"
          scrollbar={{ size: 'sm', visibility: 'auto' }}
        >
          <div
            aria-label={copy('发布协作消息')}
            className="display-conversation-scroll-list"
            role="list"
          >
            {conversationMessages.map((message) => (
              <div
                className="display-conversation-message"
                data-align={message.align ?? 'start'}
                key={`${message.time}-${message.author}`}
                role="listitem"
              >
                <Avatar
                  alt={message.author}
                  className="display-conversation-avatar"
                  fallback={message.avatar}
                  fallbackProps={{
                    className:
                      message.align === 'end'
                        ? 'display-avatar-tone-blue'
                        : 'display-avatar-tone-green',
                  }}
                  shape={message.align === 'end' ? 'square' : 'circle'}
                />
                <div className="display-conversation-content">
                  <span className="display-conversation-meta">
                    {message.author} · {message.time}
                  </span>
                  <Bubble
                    align={message.align ?? 'start'}
                    content={message.content}
                    variant={message.align === 'end' ? 'tinted' : 'elevated'}
                  />
                  {message.status && (
                    <span className="display-conversation-status">
                      <Check />
                      {message.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };

  return BubbleConversationDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function BubbleCase05({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-bubble">
      <Example />
    </div>
  );
}
