import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (user: { _id: string; username: string }): string => {
  const payload = {id: user._id,name: user.username};
  const secretKey = process.env.JWT_SECRET as string;
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, secretKey, options);
};

export const verifyToken = (token: string): object | null => {
  const secretKey = process.env.JWT_SECRET as string;
  try {
    return jwt.verify(token, secretKey) as object;
  } catch (error) {
    return null;
  }
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies.jwt;
  
    if (!token) {
      res.status(401).send('Unauthorized');
      return;
    }
  
    const decoded = verifyToken(token);
  
    if (!decoded) {
      res.status(401).send('Invalid token');
      return;
    }
  
    (req as any).user = decoded;
    next();
  };