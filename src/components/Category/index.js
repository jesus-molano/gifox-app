import { Link } from "wouter";
import './Category.css'

const Category = ({ name, options }) => {
  return (
    <div className='category'>
				<h3 className='category-title'>{decodeURI(name)}</h3>
				<ul>
					{options.map((option) => (
						<li key={option}>
							<Link to={`/search/${option}`}>{option}</Link>
						</li>
					))}
				</ul>
			</div>
  )
}

export default Category
