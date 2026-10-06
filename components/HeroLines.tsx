import Image from "next/image";

// Calm line-motion loop behind the home hero. The poster is the LCP image and the only layer on
// phones and for people who prefer reduced motion; the video plays on larger screens only.
export default function HeroLines() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Image src="/img/hero-lines-poster.jpg" alt="" fill priority className="object-cover object-right" />
      <video
        className="hero-lines-video absolute inset-0 h-full w-full object-cover object-right"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/img/hero-lines-poster.jpg"
      >
        <source src="/video/hero-lines.webm" type="video/webm" />
        <source src="/video/hero-lines.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
