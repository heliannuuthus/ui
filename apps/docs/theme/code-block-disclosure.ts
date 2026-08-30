import { createContext } from 'react';

type CodeBlockDisclosureValue = {
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
  panelId: string;
};

export const CodeBlockDisclosureContext =
  createContext<CodeBlockDisclosureValue | null>(null);
