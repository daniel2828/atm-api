import { registerEnumType } from '@nestjs/graphql';

export enum TransactionType {
  WITHDRAWAL = 'WITHDRAWAL',
  DEPOSIT = 'DEPOSIT',
  TRANSFER_IN = 'TRANSFER_IN',
  TRANSFER_OUT = 'TRANSFER_OUT',
  FEE = 'FEE',
}

registerEnumType(TransactionType, {
  name: 'TransactionType',
  description: 'Transaction types',
});
