/* eslint-disable @typescript-eslint/no-explicit-any */
// unique key for all items should have name of _id
// key should be called _id because database being used is mongodb

// remove item from array
export const removeFromArray = (arr: any[], key: string) => {
  const new_array = arr.filter((item: { _id: string }) => item._id !== key);
  return new_array;
};

// add any item to the array
export const addToArray = (arr: any[], newItem: any) => {
  const new_arr = [...arr, newItem];
  return new_arr;
};

// add to array if it doesnt exist
export const addUniqueToArray = (arr: any[], key: string, newItem: any) => {
  const existItem = arr.find((item: { _id: string }) => item._id === key); // check if item already exists
  const new_array = existItem
    ? arr.map((item: { _id: string }) => (item._id === key ? newItem : item))
    : [...arr, newItem]; // add if its not tehre
  return new_array;
};

// check if item already exists in array
export const doesItemExist = (arr: any[], key: string) => {
  const newitem = arr.find((item) => item._id === key);
  const exists = newitem ? true : false;
  return exists;
};

// check if item already exists in array
export const getFromArray = (arr: any[], key: string) => {
  const newitem = arr.find((item) => item._id === key);
  const exists = newitem ? true : false;
  return exists ? newitem : null;
};

// check if item already exists in array
export const getItemPosition = (arr: any[], key: string) => {
  const index = arr.findIndex((p) => p._id == key);
  return index;
};

// get previous item from array
export const getPreviousItem = (arr: any[], key: string) => {
  const index = arr.findIndex((p) => p._id == key);
  if(index === 0){
    return null
  }
  const len = arr.length;

  const previous = arr[(index + len - 1) % len];
  return previous;
};

// get next item from array
export const getNextItem = (arr: any[], key: string) => {
  const index = arr.findIndex((p) => p._id == key);
  const len = arr.length;
  if(index === len){
    return null
  }

  const next = arr[(index + 1) % len];
  return next;
};
