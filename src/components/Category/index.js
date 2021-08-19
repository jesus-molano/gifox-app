import { Link } from "wouter";
import './Category.css'

const Category = ({ name, options }) => {

	const bgColor = () => Math.floor(Math.random() * (4 - 1) + 1);

  return (
    <div className='category'>
				<h3 className='category-title'>{decodeURI(name)}</h3>
				<ul>
					{options.map((option) => (
						<li key={option}>
							<Link to={`/search/${option}`} className={`category-bg-${bgColor()}`}>{option}</Link>
						</li>
					))}
			</ul>
		</div>
  )
}

export default Category
