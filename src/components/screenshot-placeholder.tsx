type ScreenshotPlaceholderProps = {
  title: string;
  note: string;
};

export function ScreenshotPlaceholder({ title, note }: ScreenshotPlaceholderProps) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
      <div className="flex min-h-48 items-center justify-center rounded-xl bg-white text-center text-sm text-slate-500">
        Screenshot placeholder: {title}
      </div>
      <figcaption className="mt-3 text-sm text-slate-600">{note}</figcaption>
    </figure>
  );
}
