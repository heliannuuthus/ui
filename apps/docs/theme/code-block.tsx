import { Button, Typography } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import { Check, Copy, WrapText } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

type CodeBlockProps = {
  children?: ReactNode;
  containerElementClassName?: string;
  height?: number | string;
  lang?: string;
  lineNumbers?: boolean;
  title?: string;
  wrapCode?: boolean;
};

export const CodeBlock = ({
  children,
  containerElementClassName,
  height,
  lang = 'txt',
  lineNumbers = false,
  title,
  wrapCode = false,
}: CodeBlockProps) => {
  const { pathname } = useLocation();
  const chinese = pathname.startsWith('/zh/');
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [wrapped, setWrapped] = useState(wrapCode);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copy = async () => {
    const code = contentRef.current?.querySelector('code')?.textContent ?? '';
    await navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    <div
      className={`docs-code-block language-${lang}${containerElementClassName ? ` ${containerElementClassName}` : ''}`}
      data-line-numbers={lineNumbers || undefined}
      data-wrapped={wrapped || undefined}
    >
      {title ? (
        <Typography.Text
          as="div"
          className="docs-code-title"
          size="sm"
          tone="muted"
        >
          {title}
        </Typography.Text>
      ) : null}
      <div
        className="docs-code-content"
        ref={contentRef}
        style={height == null ? undefined : { maxHeight: height }}
      >
        {children}
      </div>
      <div className="docs-code-actions">
        <Button
          aria-label={
            wrapped
              ? chinese
                ? '关闭代码自动换行'
                : 'Disable code wrapping'
              : chinese
                ? '代码自动换行'
                : 'Wrap code'
          }
          onClick={() => setWrapped((value) => !value)}
          size="icon-xs"
          variant="ghost"
        >
          <WrapText aria-hidden="true" />
        </Button>
        <Button
          aria-label={
            copied
              ? chinese
                ? '已复制'
                : 'Copied'
              : chinese
                ? '复制代码'
                : 'Copy code'
          }
          onClick={() => void copy()}
          size="icon-xs"
          variant="ghost"
        >
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </Button>
      </div>
    </div>
  );
};
