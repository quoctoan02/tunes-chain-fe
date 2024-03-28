import { storagePrefix } from "@/configs/storage.config"
import { Role } from "@/types/auth.type"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export interface RoleStoreProps {
  role: Role

  setRole(role: Role): void
}

export const useRoleStore = create<RoleStoreProps>((set) => ({
  role: Role.User,
  setRole(role) {
    set({ role })
  },
}))
