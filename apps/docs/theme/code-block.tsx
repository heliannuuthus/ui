import { Button, Toggle, Typography, useProvider } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import { Box, Check, Copy, PencilLine, WrapText, Zap } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import {
  Fragment,
  isValidElement,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { localizeShowcaseSource } from './localized-source';
import { resources } from '../src/i18n/resources';

type CodeBlockProps = {
  children?: ReactNode;
  containerElementClassName?: string;
  height?: number | string;
  lang?: string;
  lineNumbers?: boolean;
  title?: string;
  wrapCode?: boolean;
};

const nodeText = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join('');
  if (!isValidElement<{ children?: ReactNode }>(node)) return '';
  return nodeText(node.props.children);
};

export const CodeBlock = ({
  children,
  containerElementClassName,
  height,
  lang = 'txt',
  lineNumbers = false,
  title,
  wrapCode = true,
}: CodeBlockProps) => {
  const { pathname } = useLocation();
  const { resolvedAppearance } = useProvider();
  const chinese = pathname.startsWith('/zh/');
  const locale = chinese ? 'zh' : 'en';
  const labels = resources[locale].common.demo;
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [wrapped, setWrapped] = useState(wrapCode);
  const localizedSource = useMemo(() => {
    if (!title?.startsWith('showcases/') || !title.endsWith('.tsx'))
      return null;
    const source = nodeText(children)
      .replace(/\r\n/gu, '\n')
      .replace(/\n{2,}/gu, '\n');
    const localized = localizeShowcaseSource(source, chinese ? 'zh' : 'en');
    return localized === source ? null : localized.trimEnd();
  }, [children, chinese, title]);
  const sourcePath = title?.startsWith('showcases/') ? title : null;
  const repositorySourcePath = sourcePath ? `apps/docs/${sourcePath}` : null;
  const editHref = repositorySourcePath
    ? `https://github.com/heliannuuthus/ui/edit/main/${repositorySourcePath}`
    : null;
  const stackBlitzHref = repositorySourcePath
    ? `https://stackblitz.com/fork/github/heliannuuthus/ui?file=${encodeURIComponent(repositorySourcePath)}&startScript=dev`
    : null;
  const codeSandboxHref = repositorySourcePath
    ? `https://codesandbox.io/p/github/heliannuuthus/ui/main?file=${encodeURIComponent(`/${repositorySourcePath}`)}`
    : null;

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copy = async () => {
    const code =
      localizedSource ??
      contentRef.current?.querySelector('code')?.textContent ??
      '';
    await navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    <div
      className={`docs-code-block language-${lang}${containerElementClassName ? ` ${containerElementClassName}` : ''}`}
      data-line-numbers={lineNumbers || undefined}
      data-localized-source={localizedSource == null ? undefined : true}
      data-source-path={sourcePath ?? undefined}
      data-wrapped={wrapped || undefined}
      onMouseLeave={() => setCopied(false)}
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
        {localizedSource == null ? (
          children
        ) : (
          <Highlight
            code={localizedSource}
            language="tsx"
            theme={
              resolvedAppearance === 'dark' ? themes.nightOwl : themes.github
            }
          >
            {({ className, getLineProps, getTokenProps, style, tokens }) => (
              <pre className={className} style={style}>
                <code>
                  {tokens.map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                      <span {...getLineProps({ line })}>
                        {line.map((token, tokenIndex) => (
                          <span
                            {...getTokenProps({ token })}
                            key={tokenIndex}
                          />
                        ))}
                      </span>
                      {lineIndex < tokens.length - 1 &&
                      !line.some((token) =>
                        String(token.content).includes('\n')
                      )
                        ? '\n'
                        : null}
                    </Fragment>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
        )}
      </div>
      <div
        aria-label={chinese ? '代码工具' : 'Code tools'}
        className="docs-code-toolbar"
        role="toolbar"
      >
        <Toggle
          aria-label={wrapped ? labels.unwrapCode : labels.wrapCode}
          onChange={setWrapped}
          title={wrapped ? labels.unwrapCode : labels.wrapCode}
          value={wrapped}
        >
          <WrapText aria-hidden="true" />
        </Toggle>
        <Button
          aria-label={copied ? labels.copied : labels.copyCode}
          onClick={() => void copy()}
          size="icon-xs"
          title={copied ? labels.copied : labels.copyCode}
          variant="ghost"
        >
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </Button>
        {editHref ? (
          <>
            <Button
              aria-label={labels.openCodeSandbox}
              href={codeSandboxHref!}
              rel="noreferrer"
              size="icon-xs"
              target="_blank"
              title={labels.openCodeSandbox}
              variant="ghost"
            >
              <Box aria-hidden="true" />
            </Button>
            <Button
              aria-label={labels.openStackBlitz}
              href={stackBlitzHref!}
              rel="noreferrer"
              size="icon-xs"
              target="_blank"
              title={labels.openStackBlitz}
              variant="ghost"
            >
              <Zap aria-hidden="true" />
            </Button>
            <Button
              aria-label={labels.editOnGitHub}
              href={editHref}
              rel="noreferrer"
              size="icon-xs"
              target="_blank"
              title={labels.editOnGitHub}
              variant="ghost"
            >
              <PencilLine aria-hidden="true" />
            </Button>
          </>
        ) : null}
        <span aria-live="polite" className="sr-only">
          {copied ? labels.copied : ''}
        </span>
      </div>
    </div>
  );
};
