import ScrollIndicator from '../components/scroll-indicator/ScrollIndicator';
import useScrollHeight from '../hooks/useScrollHeight';
import DocumentationLayout from '../layouts/DocumentationLayout';

export function Index() {
  const height = useScrollHeight()
  // console.log(height)
  return (
    <DocumentationLayout title='Documentation' description='Official documenation for the payment gateway' scrollheight={height}>
      <div className="flex min-h-screen">
        {/* <div className="z-0 absolute top-40 -left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-52 -right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute -bottom-8 left-20 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" /> */}
        iam the other stuff
      </div>
      {/* <ScrollIndicator page_progress={height} /> */}
      <div className="flex min-h-screen">
        {/* <div className="z-0 absolute top-40 -left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-52 -right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute -bottom-8 left-20 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" /> */}
        iam the other stuff
      </div>
      <div className="flex min-h-screen">
        {/* <div className="z-0 absolute top-40 -left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-52 -right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute -bottom-8 left-20 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" /> */}
        iam the other stuff
      </div>
    </DocumentationLayout>
  );
}

export default Index;
