import { profile } from "@/lib/data/profile";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/25 bg-ink text-ivory">
      <div className="mx-auto flex max-w-[1680px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex flex-col gap-2">
          <span className="font-display text-xl leading-none">{profile.name}</span>
          <span className="label text-stone">
            {profile.shortRole} · {profile.locationShort}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <ArrowLink href={profile.linkedin} label="LinkedIn" external invert />
          <ArrowLink href={`mailto:${profile.email}`} label="Email" invert />
          {profile.resumeHref ? (
            <ArrowLink href={profile.resumeHref} label="Résumé" external invert />
          ) : null}
          <a href="#top" className="link-underline label text-ivory">
            Back to top
          </a>
        </div>

        <span className="label text-stone">© {year}</span>
      </div>
    </footer>
  );
}
