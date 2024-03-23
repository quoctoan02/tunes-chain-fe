import { http } from "@/libs/axios"
import { toastErrorResponse } from "@/utils/common"

export class ArtistService {
  async getInfo(id: number) {
    try {
      const res = await http.get("/artist/get", { params: { id } })

      if (res?.data) {
        return res.data
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ getInfo ~ error:", error)
      toastErrorResponse(error)
      throw error
    }
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
