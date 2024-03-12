import { AuthService } from "./auth.service"
import { UploadService } from "./upload.service"
import { UserService } from "./user.service"

export const Service = {
  auth: new AuthService(),
  user: new UserService(),
  upload: new UploadService(),
}
