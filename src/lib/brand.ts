const warmGradientPattern = /amber|orange|yellow|red|rose|pink|fuchsia|magenta/i;

export function getBrandGradient(gradient: string) {
  return warmGradientPattern.test(gradient)
    ? "from-primary to-brand-secondary"
    : "from-primary to-brand-primary-light";
}
