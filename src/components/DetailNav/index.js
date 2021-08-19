import React from 'react'
import { Link } from 'wouter'
import ArrowIcon from '../ArrowIcon'

const DetailNav = () => {
  return (
    <div className='detail-menu'>
				<Link to='/'>
					<ArrowIcon direction='left' />
					<span>Home</span>
				</Link>
				<Link to='#'>
					<ArrowIcon direction='up' />
					<span>Copy Link</span>
				</Link>
				<Link to='#'>
					<ArrowIcon direction='down' />
					<span>Share</span>
				</Link>
			</div>
  )
}

export default DetailNav
