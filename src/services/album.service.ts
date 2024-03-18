import { http } from "@/libs/axios"
import { toastErrorResponse } from "@/utils/common"

export class AlbumService {
  async getInfo(audio: string) {
    try {
      let data = new FormData()
      data.append("audio", audio)

      const res = await http.post("/upload/audio", data)

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ file: common.service.ts:14 ~ CommonService ~ uploadImage ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
  async listAlbumSongs(audio: string) {
    try {
      let data = new FormData()
      data.append("audio", audio)

      const res = await http.post("/upload/audio", data)

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ file: common.service.ts:14 ~ CommonService ~ uploadImage ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
  async listNewRelease(audio: string) {
    try {
      let data = new FormData()
      data.append("audio", audio)

      const res = await http.post("/upload/audio", data)

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
