import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const ButtonStates = () => {
    return (
      <>
        <Button disabled>不可用</Button>
        <Button aria-busy="true" disabled>
          处理中
        </Button>
        <Button aria-invalid="true" variant="outline">
          校验失败
        </Button>
      </>
    );
  };

  return ButtonStates;
})();

const EnExample = (() => {
  const ButtonStates = () => {
    return (
      <>
        <Button disabled>Not available</Button>
        <Button aria-busy="true" disabled>
          Processing
        </Button>
        <Button aria-invalid="true" variant="outline">
          Verification failed
        </Button>
      </>
    );
  };

  return ButtonStates;
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
