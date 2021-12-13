import { model, Schema, Types } from 'mongoose';
import { Unit } from '@/core/entities/unit.entity';

export type UnitDocument = Unit & {
  _id: Types.ObjectId;
};

const UnitSchema = new Schema<Unit>({
  name: { type: String, required: true },
  companyId: { type: String, required: true },
  address: { type: String, required: true },
});

export const UnitModel = model<Unit>('Unit', UnitSchema);
