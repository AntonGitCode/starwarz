// не пригодилось

export const updateFavouriteItemsLS = (key: string, item: any) => {
  let updateFavouriteItems = [];
  const saved = localStorage.getItem(key);
  if (saved) {
    const parsed = JSON.parse(saved);
    updateFavouriteItems = [...parsed, item];
    const serialized = JSON.stringify(updateFavouriteItems);
    localStorage.setItem(key, serialized);
  } else {
    localStorage.setItem(key, JSON.stringify([item]));
  }
};

export const removeFavouriteItemsLS = (key: string, item: any) => {
  let updateFavouriteItems = [];
  const saved = localStorage.getItem(key);

  if (saved) {
    const parsed = JSON.parse(saved);
    updateFavouriteItems = parsed.filter(
      (parsedItem: any) => parsedItem.name !== item.name
    );
    const serialized = JSON.stringify(updateFavouriteItems);
    localStorage.setItem(key, serialized);
  }
};