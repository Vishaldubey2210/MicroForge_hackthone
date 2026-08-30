export interface IField {
  id?: string;
  name: string;
  type: 'String' | 'Number' | 'Boolean' | 'Date' | 'Json' | 'ObjectId';
  required: boolean;
  unique: boolean;
  defaultValue?: string;
}

export interface ISchema {
  _id?: string;
  name: string;
  fields: IField[];
  timestamps: boolean;
}

export interface IProject {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
}
