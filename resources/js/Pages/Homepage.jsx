import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/ArticleList';
import { Link, Head } from '@inertiajs/react';
import ArticleList from '@/Components/ArticleList';
import Paginator from '@/Components/Paginator';

export default function Homepage(props){
    console.log('data home',props)
    return(
        <div className='bg-slate-100 min-h-screen'>
            <Head title={props.title}/>
            <Navbar/>
            <div className='pt-20 flex justify-center'>
            <span className='font-bold text-3xl'>Article</span>
            </div>
            <div className="flex flex-wrap justify-center pt-3">
            <ArticleList article={props.article.data} />
            </div>
            <div className='flex items-center justify-center'>
                <Paginator meta={props.article.meta}/>
            </div>
        </div>
    )
}

