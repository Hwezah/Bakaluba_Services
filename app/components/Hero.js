import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  image,
  alt = "Hero background image",
}) {
  return (
    <section className="relative h-[70vh]">
      {/* Section acts as the positioning context */}
      <Image
        src={image}
        alt={alt} // Use the passed alt text or default
        fill
        className="object-cover" // Image will cover the section
        priority // Advisable for LCP elements like hero images
      />
      {/* Content overlay, centered on top of the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 py-8 px-10">
        <h1 className="text-5xl md:text-[6rem] font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
