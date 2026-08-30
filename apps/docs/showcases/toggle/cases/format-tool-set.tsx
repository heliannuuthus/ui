import '@heliannuuthus/ui/styles.css';
import { Toggle } from '@heliannuuthus/ui';
import { Bold, Italic, Underline } from 'lucide-react';

export default function ToggleFormatToolSetCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const labels =
    locale === 'en'
      ? { bold: 'Bold', italic: 'Italic', underline: 'Underline' }
      : { bold: '粗体', italic: '斜体', underline: '下划线' };

  return (
    <div className="demo-preview demo-preview-toggle">
      <Toggle.Group
        aria-label={locale === 'en' ? 'Text formatting' : '文本格式'}
        defaultValue={['bold']}
        items={[
          { value: 'bold', label: <Bold />, 'aria-label': labels.bold },
          { value: 'italic', label: <Italic />, 'aria-label': labels.italic },
          {
            value: 'underline',
            label: <Underline />,
            'aria-label': labels.underline,
          },
        ]}
        multiple
        variant="outline"
      />
    </div>
  );
}
