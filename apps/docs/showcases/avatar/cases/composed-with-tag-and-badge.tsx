import '@heliannuuthus/ui/styles.css';
import { MigratedExampleCase } from '../../_shared/migrated-example-case';

export default function AvatarCase06({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  return <MigratedExampleCase exampleIndex={5} locale={locale} slug="avatar" />;
}
