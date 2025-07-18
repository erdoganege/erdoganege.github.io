document.addEventListener("DOMContentLoaded", () => {
  const tocContainer = document.getElementById("toc");
  if (!tocContainer) return;

  const headers = document.querySelectorAll(".blog-container h2, .blog-container h3");
  if (headers.length === 0) return;

  const tocList = document.createElement("ul");
  tocContainer.innerHTML = "<h3>📑 Table of Contents</h3>";
  tocContainer.appendChild(tocList);

  headers.forEach(header => {
    const text = header.textContent.trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    // Prevent duplicate IDs
    if (!header.id) header.id = slug;

    const li = document.createElement("li");
    if (header.tagName === "H3") li.style.marginLeft = "1rem";

    const link = document.createElement("a");
    link.href = `#${header.id}`;
    link.textContent = text;

    li.appendChild(link);
    tocList.appendChild(li);
  });
});
