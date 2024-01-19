import myAxios from '@/plugins/myAxios'
import {getCurrentUserState, setCurrentUserState} from "@/states/user";

// 获取当前登录用户信息
export const getCurrentUser = async () => {
    // const currentUser = getCurrentUserState();
    // if (currentUser) {
    //     return currentUser;
    // }
    // 状态变量中不存在才从远程获取用户信息
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}
