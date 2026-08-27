import '@heliannuuthus/ui/styles.css';
import { Input } from '@heliannuuthus/ui';

export default function InputNumberSizesAndStatesCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const label = locale === 'en' ? 'Concurrent jobs' : '并发任务数';

  return (
    <div className="demo-preview demo-preview-input-number">
      <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
        <Input.Number
          aria-label={`${label} · small`}
          defaultValue={8}
          size="sm"
        />
        <Input.Number
          aria-label={`${label} · no controls`}
          controls={false}
          defaultValue={8}
        />
        <Input.Number aria-label={`${label} · read only`} readOnly value={8} />
        <Input.Number aria-label={`${label} · disabled`} disabled value={8} />
        <Input.Number
          aria-invalid
          aria-label={`${label} · invalid`}
          defaultValue={8}
        />
      </div>
    </div>
  );
}
