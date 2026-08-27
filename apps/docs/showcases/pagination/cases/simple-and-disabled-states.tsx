import { Pagination } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Pagination
        defaultCurrent={6}
        defaultPageSize={10}
        total={120}
        simple
        size="sm"
      />
      <Pagination
        defaultCurrent={3}
        pageCount={8}
        disabled
        previous={false}
        next={false}
      />
      <Pagination pageCount={1} hideOnSinglePage />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Pagination
        defaultCurrent={6}
        defaultPageSize={10}
        total={120}
        simple
        size="sm"
      />
      <Pagination
        defaultCurrent={3}
        pageCount={8}
        disabled
        previous={false}
        next={false}
      />
      <Pagination pageCount={1} hideOnSinglePage />
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
