import { http, httpArtist } from "@/libs/axios"
import { SignupData, User } from "@/types/auth.type"
import { toastErrorResponse } from "@/utils/common"

export class AuthService {
  async loginEmail(email: string, password: string) {
    return httpArtist.request<{
      artistInfo: User
      token: string
    }>({
      method: "POST",
      url: "/artist/auth/login",
      data: {
        email,
        password,
      },
    })
  }

  async signup(data: SignupData) {
    return httpArtist.request({
      method: "POST",
      url: "/artist/auth/signup",
      data,
    })
  }
}
