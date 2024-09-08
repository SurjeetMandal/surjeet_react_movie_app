

const GenraFilter = () => {

  let GenerFun = (event) => {
    if(event.target.textContent === 'Drama'){
      console.log("Filtering by Drama");
    }
    else if(event.target.textContent === 'Crime'){
      console.log("Filtering by Crime");
    }
    else if(event.target.textContent === 'Action'){
      console.log("Filtering by Action");
    }
    else if(event.target.textContent === 'Fantasy'){
      console.log("Filtering by Fantasy");
    }
    else if(event.target.textContent === 'Western'){
      console.log("Filtering by Western");
    }
    else if(event.target.textContent === 'Science Friction'){
      console.log("Filtering by Science Friction");
    }
    else if(event.target.textContent === 'Thriller'){
      console.log("Filtering by Thriller");
    }
    else if(event.target.textContent === 'War'){
      console.log("Filtering by War");
    }
    else{
      console.log("Filtering by Action");
    }
  } 

  return (
    <div>
      <div className="main">
        <h2>Filter by Genre</h2>
        <ul>
            <li onClick={GenerFun}>Drama</li>
            <li onClick={GenerFun}>Crime</li>
            <li onClick={GenerFun}>Action</li>
            <li onClick={GenerFun}>Fantasy</li>
            <li onClick={GenerFun}>Western</li>
            <li onClick={GenerFun}>Science Friction</li>
            <li onClick={GenerFun}>Thriller</li>
            <li onClick={GenerFun}>War</li>
            <li onClick={GenerFun}>Action</li>
        </ul>
      </div>
    </div>
  )
}

export default GenraFilter
