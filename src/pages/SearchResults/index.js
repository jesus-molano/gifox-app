import Header from "components/Header";
import Container from "components/Container";
import GoToTop from "components/GoToTop";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const title = `Results of "${decodeURI(keyword)}"`


  return (
    <>
      <Helmet>
        <title>{title} | GiFox</title>
				<meta name="description" content={title}></meta>
      </Helmet>
      <Header />
      <Container keyword={keyword} mode='search' />
      <GoToTop />
    </>
  )
}

export default SearchResults