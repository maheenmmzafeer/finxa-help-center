import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-24 text-center md:px-6">
      <p className="rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
        Error 404
      </p>
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Error 404 — Page Not Found
      </h1>
      <p className="mt-3 max-w-xl text-slate-700">
        The help article you requested does not exist or may have been moved to a new location.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
          Back to Help Center
        </Link>
        <Link href="/getting-started?guides=open" className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
          Open All Guides
        </Link>
      </div>
    </main>
  );
}
