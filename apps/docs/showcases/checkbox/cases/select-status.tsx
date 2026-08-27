import '@heliannuuthus/ui/styles.css';
import { Checkbox } from '@heliannuuthus/ui';

export default function CheckboxSelectStatusCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const labels =
    locale === 'en'
      ? ['Unchecked', 'Checked', 'Partially selected', 'Disabled']
      : ['未选择', '已选择', '部分选择', '不可用'];

  return (
    <div className="demo-preview demo-preview-checkbox">
      <div className="flex flex-wrap gap-4">
        <Checkbox>{labels[0]}</Checkbox>
        <Checkbox defaultChecked>{labels[1]}</Checkbox>
        <Checkbox indeterminate>{labels[2]}</Checkbox>
        <Checkbox disabled>{labels[3]}</Checkbox>
      </div>
    </div>
  );
}
