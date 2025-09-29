import React from "react";
import Image from "next/image";
import LogoDark from "/public/icons/logo-dark.svg";
import LogoLight from "/public/icons/logo-light.svg";

export function Footer() {
  return (
    <footer className="border-border/50 bg-background border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src={LogoDark}
                alt="Dashboard Starter Logo"
                width={40}
                height={40}
                className="dark:hidden"
              />
              <Image
                src={LogoLight}
                alt="Dashboard Starter Logo"
                width={40}
                height={40}
                className="hidden dark:block"
              />
              <span className="text-xl font-bold">Dashboard Starter</span>
            </div>
            <p className="text-muted-foreground mb-4">
              A complete dashboard starter kit with Next.js 15, Better Auth,
              dark mode, and shadcn/ui components. Start building your dashboard
              application in minutes.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <a
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-foreground transition-colors"
                >
                  Demo
                </a>
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                GitHub Repository
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="text-muted-foreground space-y-2">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Getting Started
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Examples
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Templates
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Community
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="text-muted-foreground space-y-2">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                GitHub Issues
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                License
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Contributing
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border/50 text-muted-foreground mt-8 border-t pt-8 text-center">
          <p>&copy; 2025 Dashboard Starter Kit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
