import { ReactNode } from "react";

export enum CRUD {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  READ = 'READ',
}

export enum HTTP_METHOD {
  PUT = 'PUT',
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
}

export enum ResCode {
  FORM = 'form',
  TOAST = 'toast',
  DEBUG = 'debug',
  ALERT = 'alert',
}

export enum MessageType {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'success',
}

export enum ModalAction {
  OK = 'OK',
  CANCEL = 'CANCEL',
}

export enum DonationState {
  OK = 'OK',
  CANCEL = 'CANCEL',
}

export enum CompanyStatus {
  ACTIVE = 'active',
  EXPIRED = 'expired',
  FRAUD = 'fraud',
  SUCCESSFUL ='successful',
}  

export enum DonationState {
  INVALID = 'invalid',
  VALID = 'valid',
}  

export interface IMessageBlock {
  text: string;
  code: ResCode;
  msgType: MessageType;
}

export interface IDonateForm {
  amount: number;
  nickname: string;
}

export interface ITableField {
  title: string;
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit' | undefined;
  field: string | ((row: any) => ReactNode);
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
}
