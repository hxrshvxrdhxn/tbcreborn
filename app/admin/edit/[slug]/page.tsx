import { notFound } from "next/navigation";
import { getRawPost } from "@/lib/posts";
import AdminPostEditor from "@/components/AdminPostEditor";

interface Props {
  params: { slug: string };
}

export default function EditPostPage({ params }: Props) {
  const post = getRawPost(params.slug);
  if (!post) notFound();

  const { frontmatter: fm, body } = post;

  return (
    <AdminPostEditor
      isEdit
      initialSlug={params.slug}
      initialTitle={fm.title ?? ""}
      initialExcerpt={fm.excerpt ?? ""}
      initialCategory={fm.category ?? "Strategy"}
      initialStatus={fm.status ?? "published"}
      initialPublishedAt={fm.publishedAt ?? fm.date ?? ""}
      initialDate={fm.date ?? ""}
      initialBody={body}
    />
  );
}
