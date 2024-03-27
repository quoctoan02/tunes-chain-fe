import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useArtistStore } from "../stores/use-artist-store"
import { useUserStore } from "../stores/use-user-store"
import { Artist, User } from "@/types/auth.type"
import { log } from "console"

export const useClientData = () => {
  const { pathname } = useLocation()
  const [clientData, setClientData] = useState<Partial<Artist | User>>({
    email: "",
    address: "0x",
    token: "",
    name: "",
  })
  useEffect(() => {
    switch (pathname.split("/")[1]) {
      case "artist": {
        setClientData(useArtistStore.getState())

        break
      }
      case "admin": {
        setClientData(useArtistStore.getState())

        break
      }
      default: {
        setClientData(useUserStore.getState())

        break
      }
    }
    return () => {}
  }, [pathname.split("/")[1]])

  return clientData
}
