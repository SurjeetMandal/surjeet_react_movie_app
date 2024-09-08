/* eslint-disable react/prop-types */
const MovieList = ({ data }) => {

    let i = 1;
  
    return (
      <div>
        <table cellSpacing="0">
          <tbody>
            <tr>
              <td className="heading_2">Title</td>
              <td className="heading_2">Genre</td>
              <td className="heading_2">Year</td>
            </tr>
            {data.map((item) => (
              <tr key={i++}>
                <td>{item.title}</td>
                <td>{item.genre}</td>
                <td>{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MovieList;
  
