import { http } from "@/libs/axios"
import { ArtistInfo, Role } from "@/types/auth.type"
import { toastErrorResponse } from "@/utils/common"

export class ArtistInfoService {
  async getInfo() {
    return http.get<{
      artistInfo: ArtistInfo
      token: string
    }>("/artist/get")
  }
  async listAll() {
    try {
      const res = await http.get("/artist/list")

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
  }
  async listRelatedAritsts(audio: string) {
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
  async listArtistAlbums(audio: string) {
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
  async listArtistTopSongs(audio: string) {
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
