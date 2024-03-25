import { http } from "@/libs/axios"
import { User } from "@/types/auth.type"
import { toastErrorResponse } from "@/utils/common"

export class AuthService {
  getNonce(address: string) {
    return http.request<{
      nonce: string
    }>({
      method: "GET",
      url: "/auth/get-nonce/",
      params: {
        address,
      },
    })
  }

  login(address: string, sign: string) {
    return http.request<{
      userInfo: User
      token: string
    }>({
      method: "POST",
      url: "/auth/login/",
      data: {
        address,
        sign,
      },
    })
  }
  async loginEmail(email: string, password: string) {
    try {
      const res = await http.request<{
        userInfo: User
        token: string
      }>({
        method: "POST",
        url: "/auth/login-email/",
        data: {
          email,
          password,
        },
      })

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ getInfo ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
  async signup(email: string, password: string, name: string) {
    try {
      const res = await http.request({
        method: "POST",
        url: "/auth/signup/",
        data: {
          email,
          password,
          name,
        },
      })

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ getInfo ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
}
