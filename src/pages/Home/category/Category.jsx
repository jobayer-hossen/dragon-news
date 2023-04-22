import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../newscard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h4>category {categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;