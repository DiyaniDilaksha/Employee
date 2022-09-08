import { ToastType } from './toast';

export interface Toast {
  type: ToastType;
  title: string;
 
  delay: number;
}
