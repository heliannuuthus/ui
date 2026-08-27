import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function AttachmentCase08({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return (
    <MigratedExampleCase exampleIndex={7} locale={locale} slug="attachment" />
  );
}
