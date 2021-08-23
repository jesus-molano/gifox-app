import React from "react"
import ContentLoader from "react-content-loader"

const GifPlaceholder = (props) => (
  <ContentLoader 
    speed={3}
    width={200}
    height={260}
    viewBox="0 0 200 260"
    backgroundColor="#1c1f26"
    foregroundColor="#212121"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="200" height="260" />
  </ContentLoader>
)

export default GifPlaceholder