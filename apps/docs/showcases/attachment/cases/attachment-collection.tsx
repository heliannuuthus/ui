import '@heliannuuthus/ui/styles.css';
import { Attachment } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import {
  Download,
  FileArchive,
  FileCode2,
  FileText,
  RotateCcw,
} from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  type AttachmentState = 'idle' | 'uploading' | 'processing' | 'error' | 'done';

  type AttachmentOrientation = 'horizontal' | 'vertical';

  const releaseFiles: Array<{
    description: string;
    icon: typeof FileText;
    name: string;
    state: AttachmentState;
  }> = [
    {
      name: 'release-notes.md',
      description: copy('24 KB · 已同步'),
      icon: FileText,
      state: 'done',
    },
    {
      name: 'web-console.tgz',
      description: copy('8.4 MB · 正在校验'),
      icon: FileArchive,
      state: 'processing',
    },
    {
      name: 'source-map.zip',
      description: copy('12.1 MB · 上传失败'),
      icon: FileCode2,
      state: 'error',
    },
  ];

  const AttachmentGroupDemo = ({
    orientation = 'horizontal',
  }: {
    orientation?: AttachmentOrientation;
  }) => {
    return (
      <div className="display-attachments">
        <div className="display-section-label">
          {orientation === 'vertical' ? copy('纵向缩略卡') : copy('横向文件行')}
        </div>
        <Attachment.Group
          items={releaseFiles.map((file) => {
            const Icon = file.icon;
            return {
              key: file.name,
              title: file.name,
              description: file.description,
              media: <Icon />,
              orientation,
              state: file.state,
              actions: (
                <Button
                  aria-label={copy(`下载 ${file.name}`)}
                  size="icon-xs"
                  variant="ghost"
                >
                  {file.state === 'error' ? <RotateCcw /> : <Download />}
                </Button>
              ),
            };
          })}
        />
      </div>
    );
  };

  return AttachmentGroupDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AttachmentCase08({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-attachment">
      <Example />
    </div>
  );
}
