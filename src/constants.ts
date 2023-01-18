import {ReactNode} from 'react';
import { StringDataType } from 'sequelize';

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
export interface IMessageBlock {
    text: string;
    code: ResCode;
    msgType: MessageType;
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

export interface ITemplate {
    id?: number;
    name: string;
    fileName: string;
    createdAt?: number;
}

export interface IBreadcrumbsMenu {
    id?: number;
    title: string;
    url: string;
    icon?: ReactNode;
}

export interface IActionUrl {
    label: string;
    url: string;
}
