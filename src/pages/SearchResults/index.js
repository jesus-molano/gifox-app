import Header from "components/Header";
import Container from "components/Container";

const SearchResults = ({ params }) => {
  const { keyword } = params;

  return (
    <>
      <Header />
      <Container keyword={keyword} mode='search' />
    </>
  )
}

export default SearchResults