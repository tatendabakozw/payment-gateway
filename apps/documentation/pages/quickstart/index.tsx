import DocumentationLayout from '../../layouts/DocumentationLayout';

/* eslint-disable-next-line */
export interface QuickstartProps {}

export function Quickstart(props: QuickstartProps) {
  return (
    <DocumentationLayout
      title="Quickstart"
      description="Quickstart your journey to our gateway"
    >
      <div className="min-h-screen">Welcome to Quickstart!</div>
    </DocumentationLayout>
  );
}

export default Quickstart;
