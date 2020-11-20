//movies 
// [
//     {
//         id: Math.random(),
//         img: "https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX8k1fuyGwHncTCnTM-mbZUe8RMjF7behOyHRK-7jy8vlL73O5QfTsgB-kjkVp_LV77Lf8sjUKlur4WTwQJ8EwxBiRP4.jpg?r=794",
//         name: "Spenser Confidential",
//         duration: "1h 58 m",
//         date: 2019,
//         rating: 5,

//     },
//     {
//         id: Math.random(),
//         img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQW8SnjJQ9s3Ucj1_hePX_sH6_uyfM58pbQreOVO-0nN0PnbHRL",
//         name: "Pirates of Silicon Valley",
//         duration: "1h 37m",
//         date: 1999,
//         rating: 3,

//     },
//     {
//         id: Math.random(),
//         img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF5NJQLpcDF6kTb7vs0DeCwHpsaitSYLQHgZLKoLsnbKlpiYTa",
//         name: "Takedown",
//         duration: "1h 32m",
//         date: 2000,
//         rating: 4,

//     },
//     {
//         id: Math.random(),
//         img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLMr26lgT7vKwXNoRl06aAvU-rh-wck2vNjFqSK5M6eDrlQ7NL",
//         name: "Ex Machina",
//         duration: "1h 48m",
//         date: 2014,
//         rating: 5,

//     }]


{/* (movie card )
     <div className="card-view">
        <div className='card-header'>
            <img className='card-header' />
        </div>
    <div className="card-movie-content">
        <div className="card-movie-content-head" >
      <h3 className="card-movie-title"> name <span>{props.date}</span></h3>
        </div>
    </div>
    <div className="card-movie-info">
          <div className="movie-duration">
            <label>duration</label>
            <span>duration value</span>
          </div>
          <div className="ratings">
            <span>rating value/5</span>
          </div>
        </div>
      </div>
    
    )
}
//(css card)
body{
    background-color: #f1cc7a;
}
.card-view {
    background:#ad7d14;
    width: 100%;
    max-width: 315px;
    margin: 20px;
    border-radius: 10px;
    display: inline-block;
  }
  
  .card-header {
    padding: 0;
    margin: 0;
    height: 367px;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .card-view:hover {
    box-shadow: 0px 15px 30px rgba(214, 25, 25, 0.877);
  }
  
  
  .card-movie-content-head,
  .card-movie-info {
    display: table;
    width: 100%;
  }
  
  .card-movie-title {
    font-size: 22px;
    margin: 0;
    display: table-cell;
  }
  
  .ratings {
    width: 50px;
    height: 15px;
    background-size: contain;
    display: table-cell;
    text-align: right;
    position: relative;
    margin-top: 5px;
    font-weight: 600;
    color:white;
  }
  
  
  .card-movie-info {
    display: flex;
    margin: 5px;
    justify-content:space-around  }
  
  .movie-running-time {
    display: table-cell;
    text-transform: uppercase;
    text-align: center;
  }
  
  .movie-running-time:first-of-type {
    text-align: left;
  }
  button {
      color: black;
      background-color: #ad7d14;
      scroll-padding: 10px;
  }
  //(css card)

export default MovieCard */}

// modal //
{/* <Modal show={props.modalIsopen}>
<ModalHeader>ADD movie informations</ModalHeader>
<ModalBody>
    <form className="modal-body">
        <div>
            <label> poster </label>  <input  type="text" placeholder='add url....' />
        </div>
        <div>
            <label> name </label>  <input  type="text" placeholder=' name ...' />
        </div>
        <div>
            <label> duration </label>  <input  type="text" placeholder='duration ...' />
        </div>
        <div>
            <label> rating </label>  <input  type="number" placeholder='rating' />
        </div>
    </form>
</ModalBody>
<Modal.Footer>
    <Button > save </Button> <Button  > close </Button> 
</Modal.Footer>

</Modal> */}