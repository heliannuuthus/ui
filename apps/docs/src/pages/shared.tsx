import { Button, Card, Tabs, Typography } from '@heliannuuthus/ui';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

const installCommands = {
  pnpm: 'pnpm add @heliannuuthus/ui',
  npm: 'npm install @heliannuuthus/ui',
  yarn: 'yarn add @heliannuuthus/ui',
  bun: 'bun add @heliannuuthus/ui',
} as const;

export const CodePanel = ({
  code,
  copyLabel,
  copiedLabel,
  title,
}: {
  code: string;
  copyLabel: string;
  copiedLabel: string;
  title: string;
}) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <Card className="guide-code-panel" variant="outline">
      <div className="guide-code-toolbar">
        <Typography.Text as="span" size="sm" tone="muted">
          {title}
        </Typography.Text>
        <Button
          aria-label={copied ? copiedLabel : copyLabel}
          onClick={() => void copy()}
          size="icon-xs"
          variant="ghost"
        >
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </Button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </Card>
  );
};

export const InstallTabs = ({
  copyLabel,
  copiedLabel,
}: {
  copyLabel: string;
  copiedLabel: string;
}) => (
  <Tabs
    animation="none"
    className="install-tabs"
    defaultValue="pnpm"
    items={Object.entries(installCommands).map(([manager, command]) => ({
      value: manager,
      label: manager,
      content: (
        <CodePanel
          code={command}
          copiedLabel={copiedLabel}
          copyLabel={copyLabel}
          title="terminal"
        />
      ),
    }))}
    variant="line"
  />
);

export const PageEyebrow = ({ children }: { children: string }) => (
  <Typography.Text
    as="p"
    className="docs-page-eyebrow"
    size="sm"
    weight="semibold"
  >
    {children}
  </Typography.Text>
);
