import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Blockalicious",
  description: "Privacy policy for Blockalicious website blocker for Safari",
};

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-6 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-8 font-[family-name:var(--font-body)]"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </Link>

          <article className="space-y-8">
            <header className="space-y-4">
              <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-bold leading-tight">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted font-[family-name:var(--font-body)]">
                Published January 30, 2026
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6 font-[family-name:var(--font-body)] text-foreground">
              <p className="text-xl leading-relaxed">
                Blockalicious does not collect, store, or share any personal
                data.
              </p>

              <p className="text-lg leading-relaxed text-muted">
                The app works entirely offline and does not access the internet.
                All blocking happens on-device through Safari&apos;s native
                content blocker API. Your blocked website list is stored locally
                on your device.
              </p>
            </div>
          </article>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end items-center gap-4 text-sm text-muted font-[family-name:var(--font-body)]">
          <div className="flex gap-6">
            <a
              href="https://apps.apple.com/app/blockalicious/id1608665824"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              App Store
            </a>
            <a
              href="https://github.com/vpukhanov/blockalicious"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
