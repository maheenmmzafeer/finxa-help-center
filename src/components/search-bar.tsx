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
          className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-2.5 pr-24 text-sm text-slate-50 shadow-[0_12px_30px_rgba(0,0,0,0.24)] outline-none ring-0 backdrop-blur transition placeholder:text-slate-400 focus:border-[color:rgba(69,224,209,0.45)] focus:bg-white/10 focus:shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-[0.85rem] bg-[linear-gradient(135deg,#1bc7b4_0%,#45e0d1_100%)] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-950 shadow-[0_10px_22px_rgba(69,224,209,0.22)] transition hover:-translate-y-[55%] hover:shadow-[0_14px_28px_rgba(69,224,209,0.3)]"
        >
          Search
        </button>
      </div>
    </form>
  );
}
