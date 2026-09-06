const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetUrl(path: string) {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
