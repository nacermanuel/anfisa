import React from 'react'

export const Banner = () => {
  return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://moradoapp.vtexassets.com/assets/vtex.file-manager-graphql/images/1485bfa4-1a70-4699-8586-8e3cd7916075___db62d9fa9e9d6893b3f1b2d105dcb3bd.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://moradoapp.vtexassets.com/assets/vtex.file-manager-graphql/images/f9e7109b-66d9-4527-a0b8-8c11e388827b___4329b8e81f336c3602af96efd327c39b.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://moradoapp.vtexassets.com/assets/vtex.file-manager-graphql/images/c40d8b26-250c-42af-9aaa-9c6ac0aae758___e53c4be99c345e1a9a426c1bd215c105.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
  )
}
