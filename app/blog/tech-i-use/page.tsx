import BlogTemplate from "@/components/utils/BlogTemplate";
export default function MyJourney() {
  return (
    <div className="flex flex-col px-2 pt-2 md:pt-4 md:px-4 items-center justify-center w-full h-full">
      <div className="w-full gap-2 flex-col flex max-w-screen-lg h-full">
        <BlogTemplate
          heading="Tech I Use"
          readTime="3min"
          updatedOn="2023-01-01"
        />
        <p className="text-justify text-neutral-400">Hi, There,</p>
      </div>
    </div>
  );
}
