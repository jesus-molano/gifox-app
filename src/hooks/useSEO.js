import { useEffect, useRef } from 'react';

const useSEO = ({ title, description }) => {
  const titleRef = useRef(document.title)
  const descriptionRef = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

  useEffect(() => {
    const prevTitle = titleRef.current;
    if (title) {
      document.title = `${title} | GiFox`;
    }
   
    return () => document.title = prevTitle
  }, [title])

  useEffect(() => {
    const prevDescription = descriptionRef.current;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (description) {
      metaDescription.setAttribute('content', description)
    }
    return () => metaDescription.setAttribute('content', prevDescription)
  }, [description])
}

export default useSEO
