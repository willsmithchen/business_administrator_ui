import { request } from "./axios";

/**
 * 用户管理
 */
export class UserService{
    /**
     * 用户登陆
     * @param params
     */
    static async login(params){
        return request("/login", params, 'post')
    }
}