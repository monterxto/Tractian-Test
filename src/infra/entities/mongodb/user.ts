import { model, Schema, Types } from 'mongoose';
import { User } from '@/core/entities/user.entity';

export type UserDocument = User & {
  _id: Types.ObjectId;
};

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  companyId: { type: String, required: true },
});

export const UserModel = model<User>('User', UserSchema);
