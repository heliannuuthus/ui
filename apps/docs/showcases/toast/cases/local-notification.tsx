import '@heliannuuthus/ui/styles.css';
import { Button, Toast, useToast } from '@heliannuuthus/ui';

const WorkspaceAction = ({
  label,
  message,
}: {
  label: string;
  message: string;
}) => {
  const { toast } = useToast();
  return <Button onClick={() => toast.info(message)}>{label}</Button>;
};

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const copy =
    locale === 'zh'
      ? { label: '刷新', message: '预览已刷新' }
      : { label: 'Refresh', message: 'Preview has been refreshed' };

  return (
    <div className="demo-preview demo-preview-toast">
      <Toast.Provider scope="local">
        <WorkspaceAction {...copy} />
        <Toast.Toaster position="top-right" richColors scope="local" />
      </Toast.Provider>
    </div>
  );
}
