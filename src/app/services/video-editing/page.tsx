import { PageBanner } from "@/components/PageBanner";

export default function Page() {
  return (
    <>
      <PageBanner 
        title="Video Editing" 
        breadcrumb={[{ label: "Video Editing" }]} 
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Video Editing Content Coming Soon</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We are currently migrating this content from the original WebCodian website. 
              Stay tuned for updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
