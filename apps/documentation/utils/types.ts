export type PageSections = {
  name: string;
  location: string;
  _id: string;
};

export type Page = {
  name: string;
  location: string;
  sections: Array<PageSections>;
  _id: string;
};
