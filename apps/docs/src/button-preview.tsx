import { docsCopy } from './i18n/content';
import { useState } from 'react';
import { Button, Stack } from '@heliannuuthus/ui';

export const ButtonActionsDemo = () => {
  const [message, setMessage] = useState(docsCopy('尚未执行操作'));

  return (
    <form
      className="flex flex-wrap items-center justify-center gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(docsCopy('表单已提交'));
      }}
    >
      <Stack orientation="horizontal" wrap>
        <Button type="submit">{docsCopy('保存')}</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setMessage(docsCopy('草稿已预览'))}
        >
          {docsCopy('预览')}
        </Button>
      </Stack>
      <output aria-live="polite">{message}</output>
    </form>
  );
};
