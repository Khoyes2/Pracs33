import { useState } from "react";
import axios from "axios";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  const handleGetBooks = () => {
    axios
      .get(`http://localhost:3031/api/books`)
      .then(({ data }) => {
        console.log(data);
        setBooks(data.books);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <pre>{JSON.stringify(books)}</pre> */}

      <div className="container">
        <div className="row">
          <h1 className="text-center">Book Store</h1>
          <button onClick={handleGetBooks} className="btn btn-danger">
            Get Books
          </button>

          {books &&
            books.map((book) => {
              const{id,title,pages,releaseDate,isbn} = book;
              return (
                <div key={id} className="col m-3">
                  <div className="card" >
                    <div className="card-body">
                      <h5 className="card-title">Title is: <span className="text-info">{title}</span></h5>
                      
                      <h5 className="card-text">Release Date: <span className="text-primary">{releaseDate}</span></h5>
                      
                      <h5 className="card-text">Number Of Pages: <span className="text-secondary">{pages}</span></h5>
                      
                      <h5 className="card-text">ISBN: <span className="text-danger">{isbn}</span></h5>
                      
                    
                      <button className="btn btn-success m-2">
                        Buy
                      </button>
                      <button className="btn btn-warning m-2">
                       Get Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BooksList;
