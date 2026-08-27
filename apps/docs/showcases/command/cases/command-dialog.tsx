import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function CommandCase05({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return (
    <MigratedExampleCase exampleIndex={4} locale={locale} slug="command" />
  );
}
