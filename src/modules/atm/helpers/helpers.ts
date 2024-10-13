import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import * as bcrypt from 'bcrypt';

export const encryptPin = async (pinCode: string) => {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(pinCode, saltOrRounds);
  return hash;
};

export const dummyCardGenerator = async (pinCode: string) => {
  const iv = randomBytes(16);
  const password = process.env.PIN_SECRET;

  const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);

  const textToEncrypt = pinCode;
  const encryptedText = Buffer.concat([
    cipher.update(textToEncrypt),
    cipher.final(),
  ]);
  return encryptedText;
};

export const generateRandomNumber = (digits: number): number => {
  if (digits <= 0) {
    throw new Error('Error generating random number');
  }

  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
