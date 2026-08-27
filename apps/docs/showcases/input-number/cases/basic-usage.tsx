import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function InputNumberCase01({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return (
    <MigratedExampleCase exampleIndex={0} locale={locale} slug="input-number" />
  );
}
