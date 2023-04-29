import moment from "moment/moment";
import Link from 'next/link'
const PostCard = (props) =>{
    const {title,excerpt,author, slug, featuredImage, createdAt} = props.post.node;   
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={featuredImage.url} alt={title}  className="absolute h-80 w-full object-contain shadow-lg rounded-t-lg lg:rounded-lg"/>
            </div>
            <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <Link href={`/post/${slug}`}>
                {title}
                </Link>
            </h1>
            <div className="block text-center lg:flex flex-col items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-evenly mb-4 lg:mb-8 w-full mr-8">
                    <img src={author.photo.url} alt={author.name} className="align-middle rounded-full w-28 lg:w-52 shadow-lg object-contain"/>
                    <div className="flex flex-col items-center justify-center">
                    <p className="inline align-middle text-blue-700 mr-2 text-lg">
                        {author.name}
                    </p>
                    <div className="font-medium text-purple-400">
                        <span>DR</span>
                        <span>
                            {moment(createdAt).format(' MMMM, DD, YYYY')}
                        </span>
                    </div>
                    </div>
                </div>
                <p className="text-center text-lg text-gray-700 font-normal px-4 lg-px-20 mb-4">
                    {excerpt}
                </p>
            </div>
            <div className="text-center">
                <Link href={`post/${slug}`}>
                    <span className="transition duration-500 transform hover:scale-95 inline-block bg-pink-600 font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
                </Link>
            </div>
        </div>
        
    )
}

export default PostCard