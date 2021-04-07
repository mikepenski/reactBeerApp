import Card from '../Cards/card.js';

const AllBeers = (props) => {

    //console.log(props.data)
    
    return <div className="home">

                <div className="container py-5">

                    <div className="beers">

                    {props.data.map((item, index) => {
                            
                            return  <div key={index + "col"} className="col-12 col-md-4 mb-4 px-md-4">
                                <Card key={index} data={item} />
                            </div>
                        })}

                    </div>
                   

                </div>
           </div>
    }
  
export default AllBeers;
