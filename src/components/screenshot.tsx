import Image from "next/image";

type ScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

export function Screenshot({ src, alt, caption, priority = false }: ScreenshotProps) {
  return (
    <figure className="mx-auto mt-6 w-full max-w-[44rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(10,18,29,0.72)] p-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.26)]">
      <div className="flex items-center gap-1.5 px-3 pb-2 pt-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#1bc7b4]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#45e0d1]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#8ff7ec]" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={704}
        height={448}
        priority={priority}
        className="block h-auto max-h-[28rem] w-full rounded-[1.1rem] object-contain"
      />
      {caption ? <figcaption className="mt-2 border-t border-white/10 px-4 py-3 text-sm leading-6 text-slate-200">{caption}</figcaption> : null}
    </figure>
  );
}