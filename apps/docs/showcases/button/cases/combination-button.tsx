import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const GroupedButtons = () => {
    return (
      <div className="mx-auto w-80 max-w-full">
        <Button.Group aria-label="分页操作" block orientation="horizontal">
          <Button variant="outline">上一项</Button>
          <Button>下一项</Button>
        </Button.Group>
      </div>
    );
  };

  return GroupedButtons;
})();

const EnExample = (() => {
  const GroupedButtons = () => {
    return (
      <div className="mx-auto w-80 max-w-full">
        <Button.Group
          aria-label="Pagination actions"
          block
          orientation="horizontal"
        >
          <Button variant="outline">Previous</Button>
          <Button>Next</Button>
        </Button.Group>
      </div>
    );
  };

  return GroupedButtons;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-button">
      <Example />
    </div>
  );
}
