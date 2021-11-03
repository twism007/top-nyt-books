import React from "react";

const Book = ({
  book_image,
  title,
  contributor,
  description,
  list_name,
  amazon_product_url,
}) => {
  return (
    <article className='book'>
      <img src={book_image} alt='' />
      <h1>{title}</h1>
      <h4>{contributor}</h4>
      <p>{description}</p>
      <p>{list_name}</p>
      <a target='_blank' rel='noreferrer' href={amazon_product_url}>
        Buy From Amazon
      </a>
    </article>
  );
};

export default Book;
