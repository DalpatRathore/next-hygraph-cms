import moment from "moment/moment";
import Link from 'next/link'
const PostCard = (props) =>{
    const {title,excerpt,author, slug, featuredImage} = props.post.node;
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={featuredImage.url} alt={title}  className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"/>
            </div>
            <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <Link href={`/post/${slug}`}>
                {title}
                </Link>
            </h1>
            <div className="blocklg g flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img src={author.photo.url} alt={author.name} className="align-middle rounded-full"/>
                    <p className="inline align-middle text-gray-700 ml-2 text-lg">
                        {author}

                    </p>
                    <div className="font-medium text-gray-700">
                        <svg></svg>
                        <span className="">
                            {moment(createdAt).format('MMMM DD, YYYY')}
                        </span>
                    </div>
                </div>
                <p className="text-center text-lg text-gray-700 font-normal px-4 lg-px-20 mb-8">
                    {excerpt}
                </p>
            </div>
            <div className="text-center">
                <Link href={`post/${slug}`}>
                    <span className="transition duration-500 transform hover:-translate-y-12 inline-block bg-pink-600 font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
                </Link>
            </div>
        </div>
        
    )
}

export default PostCard