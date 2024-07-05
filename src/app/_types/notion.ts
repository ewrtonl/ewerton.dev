export interface NotionDatabaseResponse {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
  request_id: string;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url: any;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

interface Properties {
  slug: Slug;
  author: Author;
  published: Published;
  tags: Tags;
  description: Description;
  title: Title;
}

interface Title {
  id: string;
  type: string;
  title: Richtext[];
}

interface Description {
  id: string;
  type: string;
  rich_text: Richtext[];
}

interface Tags {
  id: string;
  type: string;
  multi_select: Multiselect[];
}

interface Multiselect {
  id: string;
  name: string;
  color: string;
}

interface Published {
  id: string;
  type: string;
  checkbox: boolean;
}

interface Author {
  id: string;
  type: string;
  people: Person2[];
}

interface Person2 {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  person: Person;
}

interface Person {
  email: string;
}

interface Slug {
  id: string;
  type: string;
  rich_text: Richtext[];
}

interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Text {
  content: string;
  link?: any;
}

interface Parent {
  type: string;
  database_id: string;
}

interface Createdby {
  object: string;
  id: string;
}

export interface PageOrDatabase {}
