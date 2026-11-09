import { Pagination } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Pagination
        defaultPage={6}
        limit={{ defaultValue: 10 }}
        total={120}
        simple
        size="sm"
      />
      <Pagination
        defaultPage={3}
        pages={8}
        disabled
        previous={false}
        next={false}
      />
      <Pagination pages={1} hideOnSinglePage />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Pagination
        defaultPage={6}
        limit={{ defaultValue: 10 }}
        total={120}
        simple
        size="sm"
      />
      <Pagination
        defaultPage={3}
        pages={8}
        disabled
        previous={false}
        next={false}
      />
      <Pagination pages={1} hideOnSinglePage />
    </>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-pagination">
      <Example />
    </div>
  );
}
