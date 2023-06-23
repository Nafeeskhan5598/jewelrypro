import React from "react";
import '../Style/Trending.css';
import CardItemFirst from "../SmallComponent/CardItemFirst";


function TrendingProduct({ heading_first, heading_second }) {

    return (
        <>
            <div className="trending-product">
                <div className="trending-txt">
                    <h6 id="popular">{heading_first} </h6>
                    <h2 id="popular-head">{heading_second}</h2>
                    <div className="elementer">

                        <div className="all-product">
                            <div className="product-item">
                                <CardItemFirst imgsrc={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a-400x500.jpg"} title={"Product  name 1  "} cutdolor={"$600.00"} bolddolor={' $495.00'} link={"#"} cardother={'card-other'}
                                />
                            </div>
                            <div className="product-item">
                                <CardItemFirst imgsrc={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a-400x500.jpg"} title={"Product  name  10  "} dolor={"$1,700.00"} link={"#"} cardother={null}
                                />
                            </div>
                            <div className="product-item">
                                <CardItemFirst imgsrc={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-a-400x500.jpg"} title={"Product  name  11 "} dolor={"$400.00"} link={"#"} cardother={null}
                                />
                            </div>
                            <div className="product-item">
                                <CardItemFirst imgsrc={"https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-a-400x500.jpg"} title={"Product  name  12 "} dolor={"$350.00"} link={"#"} cardother={null}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default TrendingProduct;