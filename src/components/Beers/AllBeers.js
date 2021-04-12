import Card from '../Cards/card.js';

const AllBeers = (props) => {

    console.log(props.data.length)

    if(props.data.length > 0){

        document.body.classList.remove('loading');

        return <div className="home">

        <div className="container py-5">

            <div className="beers">

                <h3 className="mb-4">All Beers:</h3>

                <div className="row">

                    {props.data.map((item, index) => {
                        return  <div key={index + "col"} className="col-12 col mb-4">
                            <Card key={index} data={item} />
                            <hr />
                        </div>
                    })}

                </div>

            </div>

        </div>
   </div>

    }

    else {

        document.body.classList.add('loading');

        return <div className="lds-roller">
             <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>

    }
   
    }
  
export default AllBeers;
