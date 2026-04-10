import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-24 text-center md:px-6">
      <p className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
        404 Error
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
      <p className="mt-3 max-w-xl text-slate-600">
        The help article you requested does not exist or may have been moved to a new location.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
          Back to Help Center
        </Link>
        <Link href="/getting-started" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800">
          Open Getting Started
        </Link>
      </div>
    </main>
  );
}
