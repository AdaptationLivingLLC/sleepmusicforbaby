import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import Logo from "./Logo";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="header-moonlit fixed inset-x-0 top-0 z-50 transition-all duration-500"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          {/* YouTube channel avatar / brand icon */}
          <a
            href="https://youtube.com/@SleepMusicForBaby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
            aria-label="Sleep Music for Baby — Visit our YouTube channel"
          >
            <img
              src="https://vibe.filesafe.space/1786340794772236965/attachments/2928a16d-e29d-4667-981b-34147fcd058e.jpg"
              alt="Sleep Music for Baby"
              className="h-11 w-11 rounded-full border-2 object-cover shadow-lg transition-transform duration-300 hover:scale-110"
              style={{ borderColor: "rgba(245, 231, 178, 0.6)" }}
            />
          </a>
          <a href="/" className="flex flex-col leading-none" aria-label="Sleep Music for Baby — home">
            <span className="font-heading text-xl font-semibold tracking-wide" style={{ color: "#FFF8D5" }}>
              Sleep Music for Baby
            </span>
            <span className="font-body text-sm font-semibold tracking-wide text-gold-24k">
              SleepMusicForBaby.com
            </span>
          </a>
        </div>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-base font-medium transition-colors"
                style={{ color: "#FFF8D5" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5E7B2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FFF8D5")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/sleep-music"
          className="ml-4 hidden rounded-full px-6 py-3 font-body text-base font-bold transition-transform duration-300 hover:scale-105 lg:inline-flex border-gold-ornate-btn"
          style={{ color: "#0B1733", background: "linear-gradient(180deg, #F0D878, #D4AF37, #C9A227, #D4AF37)" }}
        >
          Listen Free
        </a>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          style={{ color: "#FFF8D5" }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="header-moonlit border-t border-white/10 px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3.5 font-body text-lg font-medium transition-colors hover:bg-white/5"
                  style={{ color: "#FFF8D5" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5E7B2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFF8D5")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/sleep-music"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 font-body text-lg font-bold border-gold-ornate-btn"
            style={{ color: "#0B1733", background: "linear-gradient(180deg, #F0D878, #D4AF37, #C9A227, #D4AF37)" }}
          >
            Listen Free
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
