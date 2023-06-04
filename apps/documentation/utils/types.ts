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

export type LanguageType = {
  name: string;
  _id: string;
};

export type CodeItemType = {
  code: string;
  _id: string;
};
