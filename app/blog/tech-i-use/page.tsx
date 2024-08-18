import BlogTemplate from "@/components/utils/BlogTemplate";
export default function MyJourney() {
  return (
    <div className="flex flex-col px-2 pt-2 md:pt-4 md:px-4 items-center justify-center w-full h-full">
      <BlogTemplate heading="Tech I Use" readTime="3min" updatedOn="2023-01-01">
        Hi, There,
      </BlogTemplate>
    </div>
  );
}
