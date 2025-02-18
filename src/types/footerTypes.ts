export interface FooterNavItem {
  text: string;
  href: string;
  badge?: string;
}

export interface FooterNavCategory {
  category: string;
  items: FooterNavItem[];
}