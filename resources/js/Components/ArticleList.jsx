import React from "react";

const isArticle = (article) => {
    return article.map((data, i) =>{
        return (
            <div key={i} className="max-w-xs m-5 p-4 bg-white text-black shadow-md">
            <span className="flex justify-center text-xl font-bold">
                    {data.title}
                </span>
                <p>{data.description}</p>
                <span className="text-black/50">
                {data.title}
                </span>
            </div>
        )
    })
}

const noArticle = () =>{
    return(
        <div>Saat ini tidak tersedia data</div>
    )
}

const ArticleList = ({article}) => {
    return !article ? noArticle() : isArticle(article)
};

export default ArticleList;
