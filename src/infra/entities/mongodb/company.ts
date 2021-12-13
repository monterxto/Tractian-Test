import { model, Schema, Types } from 'mongoose';
import { Company } from '@/core/entities/company.entity';

export type CompanyDocument = Company & {
  _id: Types.ObjectId;
};

export const CompanySchema = new Schema<Company>({
  name: { type: String, required: true },
});

export const CompanyModel = model<Company>('Company', CompanySchema);
