export function apiFetch<T>(
  route: string,
  options: RequestInit = {},
  cache = true
): Promise<T> {
  const defaultOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...(cache
      ? {
          next: {
            revalidate: 60,
          },
        }
      : {}),
  };

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    next: {
      ...defaultOptions.next,
      ...(options?.next ?? {}),
    },
  };

  return fetch(`${process.env.NEXT_PUBLIC_APP_URL}${route}`, mergedOptions)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      const statusCode = res.status;
      const statusText = res.statusText;
      throw new Error(
        `Request failed with status code ${statusCode}${
          statusText ? ` (${statusText})` : ""
        }`
      );
    })
    .catch((err: any) => {
      console.log("fetch failed: ", err.message);

      throw new Error(err?.message ?? "Request failed");
    });
}
