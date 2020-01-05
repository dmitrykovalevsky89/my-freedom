import React from "react";

export const Product = ( {product} ) => {
	return (
		<div className="row">
			{product.map( (item, index) => (
				<div key={index} className="col-md-6 col-lg-3 ftco-animate">
					<div className="product">
						<a href="#" className="img-prod">
							<img className="img-fluid" src={item.img} alt="Colorlib Template"/>
							{item.status ? <span className="status">{item.status}</span> : ''}
							<div className="overlay"/>
						</a>
						<div className="text py-3 pb-4 px-3 text-center">
							<h3>
								<a href="#">{item.name}</a>
							</h3>
							<div className="d-flex">
								<div className="pricing">
									<p className="price">
										{item.priceNew ? <><span className="mr-2 price-dc">{item.priceOld}</span><span className="price-sale">{item.priceNew}</span></> : <span>{item.priceOld}</span>}
									</p>
								</div>
							</div>

							<div className="bottom-area d-flex px-3">
								<div className="m-auto d-flex">
									<a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
										<span><i className="ion-ios-menu"/></span>
									</a>
									<a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
										<span><i className="ion-ios-cart"/></span>
									</a>
									<a href="#" className="heart d-flex justify-content-center align-items-center ">
										<span><i className="ion-ios-heart"/></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
};