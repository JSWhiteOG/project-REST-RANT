const React = require('react')
const Def = require('../default')

function show (data) {
          return (
            
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
         
                  {/*Delete comments button(does nothing so far)*/}
                  <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                    <input type="submit" className="btn btn-danger" value="Delete Comment" />
                  </form>
                 </div>
          
        )
                
  
    return (
        <Def>
          <main>
          <div className="row">
            <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name}/>
            <h3>
                Located in {data.place.city}, {data.place.state}
            </h3>
            </div>
            
       <div className="col-sm-6">
        <h1>Description</h1>
            <h3>{data.place.showEstablished()}</h3>
        <h4>Serving {data.place.cuisines}</h4>
        
        <hr></hr>
        
        <h1>Ratings</h1>
            {rating}
        
        <hr></hr>

         </div>
          </div>
          <h1>Comments</h1>
           {comments}

            <form method="POST" action={`/places/${data.id}/comment`}>
         {/*Author*/}   
    <div className="col-sm-6 col-md-4 col-lg-3 justify-content-center"> <div className="form-group">
        <label htmlFor="name">Author</label>
      <input 
        className="form-control" 
        type="text"
        id="author" 
        name="author" 
        required/>
      </div></div>
  
  {/*Rant*/}
  <div className="col-sm-6 col-md-4 col-lg-3"> <div className="form-group">
        <label htmlFor="name">Rant</label>
      <input 
        type="checkbox"
        id="rant" 
        name="rant" 
        />
       
       {/*Star Rating */}
       <div className="col-sm-6 col-md-4 col-lg-3"> <div className="form-group">
        <label htmlFor="name">Star Rating</label>
      <input 
        className="form-control" 
        type="number" step={0.5}
        id="stars" 
        name="stars" 
        min={0} max={5}
        required />
      </div></div>
       
       {/*Content*/}
      <div className="col-sm-6 col-md-4 col-lg-3"> <div className="form-group">
        <label htmlFor="name">Content</label>
      <input 
        className="form-control" 
        type="text"
        id="name" 
        name="name" 
        required />
      </div></div>
  
      </div></div>
      {/*Comment*/}
      <button className='btn btn-success' type='submit'>Add Comment</button>
            </form>
          
          {/*Edit*/}
          <a href={`/places/${data.id}/edit`} className="btn btn-primary"> 
              Edit
        </a>
                   {/*Delete*/} 
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
    
   
