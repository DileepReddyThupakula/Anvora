import {
  LayoutDashboard,
  TrendingUp,
  Briefcase,
  FolderKanban,
  Activity,
  BookOpen,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navigationItems: NavItem[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Trading", href: "/trading", icon: TrendingUp },
  { name: "Business", href: "/business", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Operations", href: "/operations", icon: Activity },
  { name: "Knowledge", href: "/knowledge", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
];
