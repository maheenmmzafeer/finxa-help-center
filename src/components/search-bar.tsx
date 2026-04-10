type SearchBarProps = {
  defaultValue?: string;
  placeholder?: string;
  action?: string;
  inputName?: string;
};

export function SearchBar({
  defaultValue = "",
  placeholder = "Search Finxa Commerce guides...",
  action = "/",
  inputName = "q",
}: SearchBarProps) {
  return (
    <form action={action} method="get" className="w-full">
      <label htmlFor={inputName} className="sr-only">
        Search help center
      </label>
      <div className="relative">
        <input
          id={inputName}
          name={inputName}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-slate-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}
