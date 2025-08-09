import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Blog Adı</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default SEO
