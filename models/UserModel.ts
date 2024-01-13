import { Schema, model, Document, Model } from "mongoose";

export interface UserModelInterface {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const UserSchema = new Schema<UserModelDocumentInterface>(
  {
    email: {
      unique: true,
      required: true,
      type: String,
    },
    fullname: {
      required: true,
      type: String,
    },
    username: {
      unique: true,
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel: Model<UserModelDocumentInterface> = model<UserModelDocumentInterface>('User', UserSchema);
