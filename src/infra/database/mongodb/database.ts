import { connect } from 'mongoose';

export const connectDb = async (): Promise<typeof import('mongoose')> => {
  return await connect('mongodb://db/tractian', {
    authSource: 'admin',
    user: process.env.USER_DB,
    pass: process.env.PASS_DB,
  });
};
