import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function TableCase09({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return <MigratedExampleCase exampleIndex={8} locale={locale} slug="table" />;
}
