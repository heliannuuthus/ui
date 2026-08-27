import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function BubbleCase03({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return <MigratedExampleCase exampleIndex={2} locale={locale} slug="bubble" />;
}
