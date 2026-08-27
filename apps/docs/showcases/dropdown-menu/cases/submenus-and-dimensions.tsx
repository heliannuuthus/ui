import '@heliannuuthus/ui/styles.css';
import { useState, type ReactNode } from 'react';
import { Button } from '@heliannuuthus/ui';
import { DropdownMenu } from '@heliannuuthus/ui';
import {
  Download,
  FileImage,
  FileSpreadsheet,
  FileText,
  MoreHorizontal,
} from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const DemoFrame = ({
    eyebrow,
    title,
    children,
  }: {
    eyebrow: string;
    title: string;
    children: ReactNode;
  }) => {
    return (
      <div className="dropdown-menu-demo">
        <div>
          <span>{eyebrow}</span>
          <strong>{title}</strong>
        </div>
        {children}
      </div>
    );
  };

  const DropdownMenuSubmenuDemo = () => {
    const [format, setFormat] = useState(copy('尚未选择格式'));

    return (
      <DemoFrame eyebrow={copy('分层操作')} title={format}>
        <DropdownMenu
          size="lg"
          align="end"
          trigger={
            <Button>
              <Download />
              {copy('导出')}
              <MoreHorizontal />
            </Button>
          }
          items={[
            {
              label: copy('导出为'),
              icon: <Download />,
              children: [
                {
                  label: copy('PDF 文档'),
                  icon: <FileText />,
                  onSelect: () => setFormat(copy('已选择：PDF 文档')),
                },
                {
                  label: copy('PNG 图片'),
                  icon: <FileImage />,
                  onSelect: () => setFormat(copy('已选择：PNG 图片')),
                },
                {
                  label: copy('CSV 表格'),
                  icon: <FileSpreadsheet />,
                  onSelect: () => setFormat(copy('已选择：CSV 表格')),
                },
              ],
            },
            { type: 'separator' },
            {
              label: copy('下载原始文件'),
              icon: <Download />,
              onSelect: () => setFormat(copy('已选择：原始文件')),
            },
          ]}
        />
      </DemoFrame>
    );
  };

  return DropdownMenuSubmenuDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function DropdownMenuCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-dropdown-menu">
      <Example />
    </div>
  );
}
