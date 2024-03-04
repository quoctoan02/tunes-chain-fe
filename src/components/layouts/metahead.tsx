import { FC } from "react"
import { Helmet } from "react-helmet"

interface MetaHeadProps {
  title?: string
  description?: string
  thumbnail?: string
  url?: string
}

const MetaHead: FC<MetaHeadProps> = ({
  title = "Template Dapp ReactJs",
  description = "",
  thumbnail = "/thumbnail.png",
  url = window?.location?.href || "",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta itemProp="og:image" content={thumbnail} />
      <meta name="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />
      <meta itemProp="image" content={thumbnail} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta itemProp="image" content={thumbnail} />
    </Helmet>
  )
}

export default MetaHead
