import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided.' });
  }

  const [, token] = authHeader.split(' '); // desetruturacao, pega somente a posicao 1

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id; // coloca o id do user no corpo da requsicao

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid.' });
  }
};
