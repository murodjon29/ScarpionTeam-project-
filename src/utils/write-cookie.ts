import { Response } from 'express';

export const writeToCookie = (
  res: Response,
  dataName: string,
  data: string,
): void => {
  res.cookie(dataName, data, {
    httpOnly: true,
    secure: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};