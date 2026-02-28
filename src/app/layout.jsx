import { site } from "@/data/site";
import "./globals.css";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import CustomCursor from "@/components/ui/CustomCursor";
import CursorGlow from "@/components/ui/CursorGlow";
export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
    images: [
      {
        url: site.ogImage,
      },
    ],
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[var(--bg)] text-[var(--text-main)] selection:bg-[var(--accent)] selection:text-white">
        <SmoothScrolling>
          <CustomCursor />
          <CursorGlow />

          <nav className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-[100] mix-blend-difference pointer-events-none">
            <span className="text-2xl font-black tracking-tighter text-white pointer-events-auto">
              P<span className="text-[var(--accent)]">.</span>
            </span>
            <div className="flex items-center gap-6 md:gap-8 pointer-events-auto">
              <div className="hidden md:flex gap-8 text-sm font-bold text-white/80 uppercase tracking-[0.2em]">
                {["About", "Skills", "Projects", "Experience", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ),
                )}
              </div>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-bold border border-white/20 px-4 py-2 rounded-full text-white hover:bg-white hover:text-[var(--bg)] transition-all uppercase tracking-widest"
              >
                Resume
              </a>
            </div>
          </nav>

          <div className="overflow-x-hidden">{children}</div>

          <footer className="relative z-10 py-8 border-t border-[var(--border)] text-center mix-blend-difference pointer-events-none">
            <p className="text-[var(--text-muted)] text-sm font-medium tracking-wide">
              © {new Date().getFullYear()} {site.title.split("|")[0].trim()}.
              All rights reserved.
            </p>
          </footer>
        </SmoothScrolling>
      </body>
    </html>
  );
}
