import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center shadow-sm p-3 mb-5 rounded  ">
                        <h1>{greeting}</h1>
                    </div>
                </div>
            </div>


    
  )
}

export default ItemListContainer