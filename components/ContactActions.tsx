export default function ContactActions() {
  return (
    <div className="flex flex-wrap gap-3 text-sm">
      <a
        href="mailto:ilies.chenene@universite-paris-saclay.fr"
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#222] px-4 py-2 font-medium text-white transition-colors hover:bg-[#444] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b8dd9]"
      >
        contact me
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#666] px-4 py-2 font-medium text-[#222] transition-colors hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b8dd9]"
      >
        CV (PDF) ↗
      </a>
    </div>
  );
}
