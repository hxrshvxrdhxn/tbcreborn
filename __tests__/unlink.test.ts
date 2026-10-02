import { unlinkUnpublished } from "@/lib/hubs";

describe("unlinkUnpublished", () => {
  const visible = new Set(["/blog/live-post", "/glossary/api"]);

  it("keeps links to visible pages", () => {
    const html = '<p>See <a href="/blog/live-post">this post</a> and <a href="/glossary/api">API</a>.</p>';
    expect(unlinkUnpublished(html, visible)).toBe(html);
  });

  it("turns links to unpublished pages into plain text", () => {
    const html = '<p>See <a href="/blog/future-post">the guide</a>.</p>';
    expect(unlinkUnpublished(html, visible)).toBe("<p>See the guide.</p>");
  });

  it("leaves other links alone", () => {
    const html = '<a href="/book-consultation">Book</a> <a href="https://example.com">x</a>';
    expect(unlinkUnpublished(html, visible)).toBe(html);
  });

  it("does nothing when visibility is unknown", () => {
    const html = '<a href="/blog/future-post">x</a>';
    expect(unlinkUnpublished(html, null)).toBe(html);
  });
});
