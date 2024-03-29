import { FC, SVGProps } from "react"

interface DiscordIconProps extends SVGProps<SVGSVGElement> {}

export const DiscordIcon: FC<DiscordIconProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 40 40" id="discord" {...props}>
      <path
        fill="currentColor"
        d="m22.26 14.39-.19.22a9.16 9.16 0 0 1 3.42 1.74A11.22 11.22 0 0 0 21.36 15a11.59 11.59 0 0 0-2.77 0h-.24a10.36 10.36 0 0 0-3.11.86c-.51.24-.81.4-.81.4a9.27 9.27 0 0 1 3.57-1.7l-.14-.17a6.77 6.77 0 0 0-3.85 1.44 18.34 18.34 0 0 0-2 8 5 5 0 0 0 4.19 2.08l.91-1.14a4.27 4.27 0 0 1-2.4-1.62s.14.1.39.24h.05l.13.07a7.31 7.31 0 0 0 1 .46 11.3 11.3 0 0 0 2 .59 9.61 9.61 0 0 0 3.56 0 8.85 8.85 0 0 0 2-.59 7.92 7.92 0 0 0 1.58-.81A4.32 4.32 0 0 1 23 24.8c.41.52.9 1.11.9 1.11a5 5 0 0 0 4.2-2.08 18.41 18.41 0 0 0-2-8 6.81 6.81 0 0 0-3.84-1.44Zm-4.74 8.16a1.53 1.53 0 1 1 1.4-1.55 1.47 1.47 0 0 1-1.4 1.55Zm5 0a1.53 1.53 0 0 1 0-3 1.53 1.53 0 0 1 0 3Z"
      />
      <path d="M29.19 8H10.81A2.82 2.82 0 0 0 8 10.83v18.34A2.82 2.82 0 0 0 10.81 32h15.55l-.72-2.54 1.75 1.83 1.66 1.53L32 35.43v-24.6A2.82 2.82 0 0 0 29.19 8Zm-5.3 17.91s-.49-.59-.9-1.11a4.32 4.32 0 0 0 2.48-1.63 7.92 7.92 0 0 1-1.58.81 8.85 8.85 0 0 1-2 .59 9.61 9.61 0 0 1-3.56 0 11.3 11.3 0 0 1-2-.59 7.31 7.31 0 0 1-1-.46l-.13-.07h-.05c-.25-.14-.39-.24-.39-.24a4.27 4.27 0 0 0 2.4 1.62l-.91 1.14a5 5 0 0 1-4.19-2.08 18.34 18.34 0 0 1 2-8 6.77 6.77 0 0 1 3.85-1.44l.14.17a9.27 9.27 0 0 0-3.61 1.79s.3-.16.81-.4a10.36 10.36 0 0 1 3.11-.86h.24a11.59 11.59 0 0 1 2.77 0 11.22 11.22 0 0 1 4.13 1.31 9.16 9.16 0 0 0-3.42-1.74l.19-.22a6.81 6.81 0 0 1 3.86 1.44 18.41 18.41 0 0 1 2 8 5 5 0 0 1-4.24 1.97Z" />
      <ellipse cx="22.52" cy="21.03" rx="1.4" ry="1.52" />
      <path d="M17.52 19.51a1.53 1.53 0 1 0 1.4 1.49 1.46 1.46 0 0 0-1.4-1.49Z" />
    </svg>
  )
}
