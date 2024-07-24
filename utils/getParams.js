export const getParams = (url) => {
  const paramsArray = url.split("&");

  const params = {};

  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    if (key && value) {
      params[key] = value;
    }

    if (param.includes("genres")) {
        const genre = param.split('/').filter(el => el);
        params["genres"] = genre[1]
    }
  });

  return {
    genreId: params["genres"],
    year: params["year"],
  };
};
