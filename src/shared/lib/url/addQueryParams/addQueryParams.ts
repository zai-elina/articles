export const getQueryParams = (params: PartialRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
};

/**
 * Функция доваление параметров в url
 * @param params 
 */
export const addQueryParams = (params: PartialRecord<string, string>) => {
  window.history.pushState(null, "", getQueryParams(params));
};
