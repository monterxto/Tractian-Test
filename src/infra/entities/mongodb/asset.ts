import { model, Schema, Types } from 'mongoose';
import { Asset } from '@/core/entities/asset.entity';

export type AssetDocument = Asset & {
  _id: Types.ObjectId;
};

const AssetSchema = new Schema<Asset>({
  imageUrl: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },

  owner: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  unitId: {
    type: String,
    required: true,
  },

  healthLevel: {
    type: Number,
    required: true,
  },
});

export const AssetModel = model<Asset>('Asset', AssetSchema);
