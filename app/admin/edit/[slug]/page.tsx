import { notFound } from "next/navigation";
import { getRawPost } from "@/lib/posts";
import AdminPostEditor from "@/components/AdminPostEditor";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EditPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getRawPost(slug);
  if (!post) notFound();

  const { frontmatter: fm, body } = post;

  return (
    <AdminPostEditor
      isEdit
      initialSlug={slug}
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
