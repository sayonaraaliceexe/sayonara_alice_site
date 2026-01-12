
document.addEventListener("DOMContentLoaded", () => {
  const scrollbar = document.createElement("div");
  scrollbar.id = "custom-scrollbar";

  const thumb = document.createElement("div");
  thumb.id = "scroll-thumb";
  scrollbar.appendChild(thumb);

  document.body.appendChild(scrollbar);

  const updateThumb = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const thumbHeight = thumb.offsetHeight;
    const trackHeight = scrollbar.offsetHeight;

    thumb.style.top = `${scrollPercent * (trackHeight - thumbHeight)}px`;

    createSpark(scrollPercent * (trackHeight - thumbHeight));
  };

  const createSpark = (top) => {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.top = `${top}px`;
    spark.style.left = "2px";
    document.getElementById("custom-scrollbar").appendChild(spark);

    setTimeout(() => spark.remove(), 700);
  };

  window.addEventListener("scroll", updateThumb);
  updateThumb();
});
