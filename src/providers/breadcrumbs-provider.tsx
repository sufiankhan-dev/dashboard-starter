"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbContextType {
  items: BreadcrumbItem[];
  isLoading: boolean;
}

const BreadcrumbContext = createContext<BreadcrumbContextType>({
  items: [],
  isLoading: true,
});

export const useBreadcrumb = () => useContext(BreadcrumbContext);

interface BreadcrumbProviderProps {
  children: ReactNode;
}

export function BreadcrumbProvider({ children }: BreadcrumbProviderProps) {
  const pathname = usePathname();
  const [items, setItems] = useState<BreadcrumbItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateBreadcrumbs = async () => {
      setIsLoading(true);
      const breadcrumbs: BreadcrumbItem[] = [
        {
          label: "Dashboard",
          href: "/dashboard",
          isCurrentPage: pathname.endsWith("/dashboard"),
        },
      ];

      const paths = pathname.split("/").filter(Boolean);

      if (paths.length > 0) {
        paths.shift();
      }

      if (paths[0] === "dashboard") {
        paths.shift();
      }

      const locale = pathname.split("/")[1] || "";
      let currentPath = `/${locale}/dashboard`;

      const routeLabels: Record<string, string> = {
        research: "Research",
        company: "Company",
        insights: "Insights",
        settings: "Settings",
        leads: "Leads",
        analytics: "Analytics",
        profile: "Profile",
        account: "Account",
        notifications: "Notifications",
      };

      paths.forEach((path, i) => {
        currentPath += `/${path}`;
        const isLast = i === paths.length - 1;

        breadcrumbs.push({
          label:
            routeLabels[path] || path.charAt(0).toUpperCase() + path.slice(1),
          href: currentPath,
          isCurrentPage: isLast,
        });
      });

      setItems(breadcrumbs);
      setIsLoading(false);
    };

    generateBreadcrumbs();
  }, [pathname]);

  return (
    <BreadcrumbContext.Provider value={{ items, isLoading }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
