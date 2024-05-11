import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import remarkHtml from "remark-html"


interface RichTextProps {
  data: {
    body: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  return (
    <section className="rich-text py-6 bg-black text-gray-50 dark:bg-black dark:text-gray-50 ">
      {/* <Markdown children={data.body} remarkPlugins={[remarkGfm]}/> */}
      <Markdown className="prose prose-invert prose-violet " remarkPlugins={[remarkGfm]}>{data.body}</Markdown>
      {/* text-gray-50 prose-headings:text-gray-50 prose-a:text-gray-50 prose-em:text-gray-50 prose-strong:text-gray-50 prose-blockquote:text-gray-50 prose-code:text-gray-50 */}
    </section>
  );
}