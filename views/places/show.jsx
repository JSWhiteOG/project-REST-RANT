const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={ data.place.pic }/>
            
        <h1>Description</h1>
            <h2>Located in { data.place.city }, { data.place.state }</h2>
        
        <h1>Kind of food</h1>
            <h2>{ data.place.cuisines }</h2>
        
        <hr></hr>
        
        <h1>Ratings</h1>
            <h2>Currently unrated</h2>
        
        <hr></hr>
        
        <h1>Comments</h1>
            <h2>No comments yet</h2>
  Edit button
        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
        </a>
    Delete button
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
        </form> 
 



          </main>
        </Def>
    )
}

module.exports = show
