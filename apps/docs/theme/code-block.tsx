import { Button, Tooltip, Typography, useProvider } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import { Box, Check, CodeXml, Copy, Zap } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import {
  Fragment,
  isValidElement,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CodeBlockDisclosureContext } from './code-block-disclosure';
import { localizeShowcaseSource } from './localized-source';
import { resources } from '../src/i18n/resources';

type CodeBlockProps = {
  children?: ReactNode;
  containerElementClassName?: string;
  height?: number | string;
  lang?: string;
  lineNumbers?: boolean;
  title?: string;
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
}: CodeBlockProps) => {
  const { pathname } = useLocation();
  const { resolvedAppearance } = useProvider();
  const chinese = pathname.startsWith('/zh/');
  const locale = chinese ? 'zh' : 'en';
  const labels = resources[locale].common.demo;
  const sourceDisclosure = useContext(CodeBlockDisclosureContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
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
  const displayedTitle = sourcePath?.split('/').pop() ?? title;
  const repositorySourcePath = sourcePath ? `apps/docs/${sourcePath}` : null;
  const stackBlitzHref = repositorySourcePath
    ? `https://stackblitz.com/fork/github/heliannuuthus/ui?file=${encodeURIComponent(repositorySourcePath)}&startScript=dev`
    : null;
  const codeSandboxHref = repositorySourcePath
    ? `https://codesandbox.io/p/github/heliannuuthus/ui/main?file=${encodeURIComponent(`/${repositorySourcePath}`)}`
    : null;
  const sourceDisclosureEnabled =
    sourcePath != null && sourceDisclosure != null;

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
      onMouseLeave={() => setCopied(false)}
    >
      {title ? (
        <Typography.Text
          as="div"
          className="docs-code-title"
          hidden={sourceDisclosureEnabled && !sourceDisclosure.expanded}
          size="sm"
          tone="muted"
        >
          {displayedTitle}
        </Typography.Text>
      ) : null}
      <div
        className="docs-code-content"
        hidden={sourceDisclosureEnabled && !sourceDisclosure.expanded}
        id={sourceDisclosure?.panelId}
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
        <Tooltip
          content={copied ? labels.copied : labels.copyCode}
          openDelay={copied ? 0 : undefined}
        >
          <Button
            aria-label={copied ? labels.copied : labels.copyCode}
            onClick={() => void copy()}
            size="icon-sm"
            variant="ghost"
          >
            {copied ? (
              <Check aria-hidden="true" />
            ) : (
              <Copy aria-hidden="true" />
            )}
          </Button>
        </Tooltip>
        {repositorySourcePath ? (
          <>
            <Tooltip content={labels.openCodeSandbox}>
              <Button
                aria-label={labels.openCodeSandbox}
                href={codeSandboxHref!}
                rel="noreferrer"
                size="icon-sm"
                target="_blank"
                variant="ghost"
              >
                <Box aria-hidden="true" />
              </Button>
            </Tooltip>
            <Tooltip content={labels.openStackBlitz}>
              <Button
                aria-label={labels.openStackBlitz}
                href={stackBlitzHref!}
                rel="noreferrer"
                size="icon-sm"
                target="_blank"
                variant="ghost"
              >
                <Zap aria-hidden="true" />
              </Button>
            </Tooltip>
          </>
        ) : null}
        {sourceDisclosureEnabled ? (
          <Tooltip
            content={
              sourceDisclosure.expanded
                ? labels.collapseCode
                : labels.expandCode
            }
          >
            <Button
              aria-controls={sourceDisclosure.panelId}
              aria-expanded={sourceDisclosure.expanded}
              aria-label={
                sourceDisclosure.expanded
                  ? labels.collapseCode
                  : labels.expandCode
              }
              onClick={() =>
                sourceDisclosure.onExpandedChange(!sourceDisclosure.expanded)
              }
              size="icon-sm"
              variant="ghost"
            >
              <CodeXml aria-hidden="true" />
            </Button>
          </Tooltip>
        ) : null}
        <span aria-live="polite" className="sr-only">
          {copied ? labels.copied : ''}
        </span>
      </div>
    </div>
  );
};
