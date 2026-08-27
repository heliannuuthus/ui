import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function LayoutCase04({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return <MigratedExampleCase exampleIndex={3} locale={locale} slug="layout" />;
}
