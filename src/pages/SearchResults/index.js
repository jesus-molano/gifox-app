import Header from "components/Header";
import Container from "components/Container";
import GoToTop from "components/GoToTop";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
  const { keyword, rating = 'g' } = params;
  const title = `Results of "${decodeURI(keyword)}"`


  return (
    <>
      <GoToTop />
      <Helmet>
        <title>{title} | GiFox</title>
				<meta name="description" content={title}></meta>
      </Helmet>
      <Header />
      <Container keyword={keyword} mode='search' rating={rating} />
    </>
  )
}

export default SearchResults