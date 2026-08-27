import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function ButtonCase07({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return <MigratedExampleCase exampleIndex={6} locale={locale} slug="button" />;
}
