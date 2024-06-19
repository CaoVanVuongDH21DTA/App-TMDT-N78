import React, { useState } from 'react';
import '../../../../styles/Store/MainStore/News/News.css';
import { FaStar } from "react-icons/fa";
import dataNews from '../../../../Data/dataNews.json'
import Pagination from '../../Pagination/Pagination';

const News = () => {
    const articlesPerPage = 5; // Số lượng bài viết trên mỗi trang
    const [currentPage, setCurrentPage] = useState(1);

    const renderArticles = () => {
        const start = (currentPage - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        return dataNews.slice(start, end).map((article, index) => (
            <div key={index} className="article">
                <img src={article.image}/>
                <div className="content">
                    <p><FaStar/><em>{article.date}</em></p>
                    <span>{article.title}</span>
                    <a>{article.description}</a>
                    <a href={article.link} className="link">Read more</a>
                </div>
            </div>
        ));
    };

    return (
        <div className="news">
            <div className="top_news">
                <div className="title">
                    <h2>Epic Game News</h2>
                </div>
                <div className="content-news">
                    <div className="game-card">
                        <img
                            src={'https://cdn2.unrealengine.com/empire-of-the-ants-offers-a-new-micro-sized-perspective-on-the-rts-genre-3847x2107-f4416d379a86.png?h=480&quality=medium&resize=1&w=854'}/>
                        <span>7D Ago</span>
                        <h2>Empire of the Ants offers a new micro-sized perspective on the RTS genre</h2>
                        <p>Tower Five explain the genre-changing tech that maakes their photorealistic ants come alive,
                            and why they can't promise that no insects were harmed in the marking of their game</p>
                        <div className="link"><a href="#">Read more</a></div>
                    </div>
                    <div className="game-card">
                        <img
                            src={'https://cdn2.unrealengine.com/mechanicus-2-key-art-4k-300dpi-3840x2160-f71b93696994.png?h=480&quality=medium&resize=1&w=854'}/>
                        <span>7D Ago</span>
                        <h2>Empire of the Ants offers a new micro-sized perspective on the RTS genre</h2>
                        <p>Tower Five explain the genre-changing tech that maakes their photorealistic ants come alive,
                            and why they can't promise that no insects were harmed in the marking of their game</p>
                        <div className="link"><a href="#">Read more</a></div>
                    </div>
                </div>
            </div>

            <div className="list_news">
                {renderArticles()}
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(dataNews.length / articlesPerPage)}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default News;
