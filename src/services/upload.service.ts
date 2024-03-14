import { http } from "@/libs/axios"
import { UserInfo } from "@/types/auth.type"
import { toastErrorResponse } from "@/utils/common"

export class UploadService {
  async uploadAudio(audio: string) {
    try {
      let data = new FormData()
      data.append("audio", audio)

      const res = await http.post<{
        userInfo: UserInfo
        token: string
      }>("/upload/audio", data)

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ file: common.service.ts:14 ~ CommonService ~ uploadImage ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
  async uploadVideo(video: string) {
    try {
      let data = new FormData()
      data.append("video", video)

      const res = await http.post<{
        userInfo: UserInfo
        token: string
      }>("/upload/video", data)

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ file: common.service.ts:14 ~ CommonService ~ uploadImage ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
  async uploadImage(image: string) {
    try {
      let data = new FormData()
      data.append("image", image)

      const res = await http.post("/upload/image", data)
      console.log("🚀 ~ UploadService ~ uploadImage ~ res:", res)
      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ file: common.service.ts:14 ~ CommonService ~ uploadImage ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
}
