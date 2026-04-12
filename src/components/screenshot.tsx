import Image from "next/image";

type ScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

export function Screenshot({ src, alt, caption, priority = false }: ScreenshotProps) {
  return (
    <figure className="mx-auto mt-6 w-full max-w-[44rem] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)]">
      <Image
        src={src}
        alt={alt}
        width={704}
        height={448}
        priority={priority}
        className="block h-auto max-h-[28rem] w-full rounded-xl object-contain"
      />
      {caption ? <figcaption className="mt-2 border-t border-slate-200 px-4 py-3 text-sm text-slate-600">{caption}</figcaption> : null}
    </figure>
  );
}