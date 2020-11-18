import React from 'react'

function Pagination(props) {
    const getNumbers = () => {
        let numbers = [];
        let itemsPerPage = props.itemsPerPage;
        let pageNumber = 1;

        for (let i = 0; i < props.count; i += itemsPerPage) {
          const page = pageNumber;
          let content = null;

          if (props.active === page) {
            const style = {
                backgroundColor : "green",
                color: "white"
            }
            content = (
              <li key={i} className="page-item">
                <button className="page-link btn btn-success" style={style} onClick={() => props.visitPage(page)}>
                    {pageNumber}
                </button>
              </li>
            );
          } else {
            content = (
              <li key={i} className="page-item">
                <button
                  className="page-link btn btn-default"
                  onClick={() => props.visitPage(page)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          }

          numbers.push(content);
          pageNumber++;
        }
        return numbers;
    }

    return (
      <nav
        aria-label="Page navigation"
        className="text-center d-flex justify-content-center"
      >
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={() => props.previous()}>
              Previous
            </button>
          </li>
          {getNumbers()}
          <li className="page-item">
            <button className="page-link" onClick={() => props.next()}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
}

export default Pagination
