"use client";

const links: { label: string; href: string; hasArrow?: boolean }[] = [
  { label: "Values", href: "#who-we-are" },
  { label: "Services", href: "#services" },
  { label: "Let's Talk", href: "#contact", hasArrow: true },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-16">
      <a href="#" className="text-sm font-medium tracking-[0.15em] text-light">
        TRUE MERIDIAN
      </a>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm tracking-wide text-light/60 transition-colors duration-200 hover:text-light"
            >
              {link.label}
              {link.hasArrow && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-1.5 inline-block"
                >
                  <path
                    d="M1 13L13 1M13 1H3M13 1V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
