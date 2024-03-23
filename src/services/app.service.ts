import { AlbumService } from "./album.service"
import { ArtistService } from "./artist.service"
import { AuthService } from "./auth.service"
import { UploadService } from "./upload.service"
import { UserLibraryService } from "./user-library.service"
import { UserService } from "./user.service"

export const Service = {
  auth: new AuthService(),
  user: new UserService(),
  upload: new UploadService(),
  artist: new ArtistService(),
  album: new AlbumService(),
  userLibrary: new UserLibraryService(),
}
