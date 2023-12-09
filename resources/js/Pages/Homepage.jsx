import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props){
    console.log(props)
    return(
        <div className='bg-slate-100 '>
            <Head title={props.title}/>
            <Navbar/>
            <div className='flex flex-wrap justify-center pt-14'>
                {props.article ? props.article.map((articles, i)=>{
                    return(
                        <div key={i} className='max-w-xs m-5 p-4 bg-white text-black shadow-md'>
                            <span className='flex justify-center text-xl font-bold'>{articles.title}</span>
                            <p>{articles.description}</p>
                            <span className='text-black/50'>{articles.creator}</span>
                        </div>
                    )
                }):''}
            </div>
        </div>
    )
}

