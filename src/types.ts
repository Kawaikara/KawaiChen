export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteIdentity {
  title: string;
  description?: string;
  homeHref?: string;
}

export interface ThemedSelectOption {
  disabled?: boolean;
  i18nKey?: string;
  label: string;
  value: string;
}
