import { http } from "@/libs/axios"
import { UserInfo } from "@/types/auth.type"

export class UserService {
  getUser() {
    return http.request<{
      userInfo: UserInfo
      token: string
    }>({
      method: "GET",
      url: "/user/get/",
      params: {},
    })
  }
}
