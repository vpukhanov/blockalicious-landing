import Image from "next/image";
import screenshotMacOS from "./assets/screenshot-macos.png";
import screenshotIOS from "./assets/screenshot-ios.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content - Single Screen */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in-up opacity-0">
              <div>
                <h1 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl font-bold leading-[1.1] text-balance mb-6">
                  Blockalicious
                </h1>
                <p className="font-[family-name:var(--font-body)] text-xl lg:text-2xl text-muted leading-relaxed">
                  A website blocker for Safari built around a simple principle:
                  helping people focus shouldn&apos;t require surrendering their
                  privacy
                </p>
              </div>

              <div className="space-y-4 text-base text-muted font-[family-name:var(--font-body)]">
                <p>
                  On-device blocking through Safari&apos;s native API. No
                  servers, no analytics, no data collection
                </p>
                <p>Keyboard shortcuts, instant changes, local storage only</p>
                <p className="text-sm">Free and open source</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://apps.apple.com/app/blockalicious/id1608665824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-[family-name:var(--font-body)] font-semibold rounded-lg hover:bg-accent hover:text-foreground transition-all duration-300"
                >
                  Download for iOS & macOS
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="https://github.com/vpukhanov/blockalicious"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-foreground/20 text-foreground font-[family-name:var(--font-body)] font-semibold rounded-lg hover:border-foreground/40 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Source
                </a>
              </div>
            </div>

            {/* Right: Screenshot */}
            <div className="relative animate-fade-in opacity-0 delay-200">
              {/* macOS Screenshot - Desktop */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src={screenshotMacOS}
                  alt="Blockalicious main window showing blocked websites list"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* iPhone Screenshot - Mobile */}
              <div className="lg:hidden relative max-w-sm mx-auto">
                <Image
                  src={screenshotIOS}
                  alt="Blockalicious on iPhone showing blocked websites list"
                  width={600}
                  height={1300}
                  className="w-full h-auto rounded-[3rem] shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-accent/20 rounded-2xl hidden lg:block"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
