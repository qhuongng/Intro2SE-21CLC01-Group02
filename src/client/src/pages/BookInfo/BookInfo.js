import "./BookInfo.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const BookInfo = () => {
    const [checkStatus, setCheckStatus] = useState(true);

    const spreadComments = () => {
        const n = 10;
        return [...Array(n)].map((e, i) => (
            <div className="info-each-review">
                <div className="info-user-photo-container">
                    <div className="info-user-photo"></div>
                </div>
                <div className="info-user-comment-name">
                    <div className="info-user-name">User</div>
                    <div className="info-user-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, augue et pellentesque laoreet, risus tortor lobortis dui, gravida elementum sem...</div>
                </div>
            </div>
        ));
    };

    const spreadReco = () => {
        const n = 10;
        return [...Array(n)].map((e, i) => (
            <div className="info-each-reco">
                <div className="info-product-reco-photo-container">
                    <div className="info-product-reco-photo"></div>
                </div>
                <div className="info-product-reco">
                    <div className="info-product-reco-name">Recommended book</div>
                    <div className="info-product-reco-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, augue et pellentesque laoreet, risus tortor lobortis...</div>
                    <div className="info-product-reco-price-rate">
                        <div className="info-product-reco-price">50,000 VND</div>
                        <div className="info-product-reco-rate">(35 reviews)</div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="info-container">
            <div className="info-product-full">
                <div className="info-image"></div>
                <div className="info-prodcut-container">
                    <div className="info-product">
                        <div className="info-product-name">Book</div>
                        <div className="info-product-rate-status">
                            <div className="info-product-rate">(15 Reviews)</div>
                            <div className="info-product-line-split"></div>
                            <div className="info-product-status">{checkStatus ? <div>For sale</div> : <div>Sold</div>}</div>
                        </div>
                        <div className="info-product-price">30,000 VND</div>
                        <div className="info-des">This is the description for the book being sold. It may contain basic information such as the author's name, the book's genre, its publish year, or its ISBN number.</div>
                        <div className="info-line"></div>
                        <div className="info-access">
                            <Link to="/checkout" className="info-buy">
                                Buy now
                            </Link>
                            <div className="info-add">Add to cart</div>
                            <div className="info-like">
                                <FaHeart className="info-like-icon" />
                            </div>
                        </div>
                    </div>

                    <div className="info-shop"></div>
                </div>
            </div>

            <div className="info-review-reco">
                <div className="info-review">
                    <div className="info-review-title">Reviews</div>
                    <div className="info-review-container">{spreadComments()}</div>
                </div>

                <div className="info-reco">
                    <div className="info-reco-title">You might also like</div>
                    <div className="info-reco-container">{spreadReco()}</div>
                </div>
            </div>

            <div className="info-button-up"></div>
        </div>
    );
};

export default BookInfo;
