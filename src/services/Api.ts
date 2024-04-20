import {get, post} from './AxiosInstance';
import Url from './Urls';
import AsyncHanlder from '../utils/AsyncHanlder';

export const loginUser = AsyncHanlder(async (params: any) => {
  const res: any = await post(Url.login(), params);
  if (res.status !== 200) {
    return false;
  }
  return res.data;
});
export const verifyOtp = AsyncHanlder(async (params: any) => {
  const res: any = await post(Url.otpVeify(), params);

  if (res.status !== 200) {
    return false;
  }
  return res.data;
});
