import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={332}
    height={443}
    viewBox="0 0 332 443"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="15" y="15" rx="5" ry="16" width="300" height="280" />
    <rect x="15" y="305" rx="7" ry="9" width="176" height="24" />
    <rect x="15" y="335" rx="8" ry="12" width="300" height="16" />
    <rect x="15" y="370" rx="9" ry="9" width="300" height="60" />
  </ContentLoader>
)

export default Skeleton
