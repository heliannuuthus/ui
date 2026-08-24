import { Showcase, type ShowcasePage } from '../showcase';

export const DocsPage = ({ page }: { page: ShowcasePage }) => {
  return <Showcase page={page} />;
};
