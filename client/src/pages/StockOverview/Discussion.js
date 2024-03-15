import ProfilePic from '../assets/profilePhoto.png'
import Pollicon from '../assets/pollicon.png'
import ImageIcon from '../assets/imageIcon.png'
import ImageAttached from '../assets/postImage.png'
import OverflowMenu from '../assets/overflowMenu.png'
import LikeIcon from '../assets/LikeIcon.png'
import CommentIcon from '../assets/CommentIcon.png'
import ShareIcon from '../assets/ShareIcon.png'


function Discussion(){
    const individualPost={
        "profilePic":ProfilePic,
        "username":"Alex",
        "date":"27 min ago",
        "postContext":"Portfolio update In 2023, my portfolio achieved a notable growth of 91.05%, and in 2024, a commendable 17.30% thus far. I want to provide short commentary to most of the positions in our portfolio.",
        "imageAttached":ImageAttached,
        "numOfLikes":152,
        "numOfComments":52,
        "Comments":[
            {"id":"comment001",
             "profilePic":ProfilePic,
             "username":"Alex",
             "date":"27 min ago",
             "commentContext":"Good Sharing"
            },
            {"id":"comment001",
            "profilePic":ProfilePic,
            "username":"Alex",
            "date":"27 min ago",
            "commentContext":"Good Sharing"
           }
        ]
    }

    return(
        <div className="flex flex-col w-full">
            <UserUpload/>
            <IndividualPost{...individualPost}/>
        </div>
    )
}

function IndividualPost({profilePic,username,date,postContext,imageAttached,numOfLikes,numOfComments,Comments}){
    const comment=Comments[0]
    return (
        <div id="individualPost" className='flex flex-col w-11/12 mx-5 my-2 border rounded-lg'>
            <div id="postHeader" className='flex mt-3 mx-3 w-full h-14'>
                <img className='w-auto h-full'src={profilePic} alt={username+'profile picture'}/>
                <div className='flex flex-col h-full w-4/5 mx-5 ' >
                    <div className='flex flex-col w-full h-full justify-center'>
                        <div >{username}</div>
                        <div className='text-sm text-gray-500'>{date}</div>
                    </div>
                </div>
                <button className='flex h-6 w-6 my-auto'>
                    <img className="w-full h-full" src={OverflowMenu} alt="Overflow Menu"/>
                </button>
            </div>
            <div id="postContext" className='mt-3 mx-3'>
                {postContext}
            </div>
            <div className='mx-3'>
                <img className="w-full h-full"src={imageAttached} alt="image Attached"/>
            </div>

            <div className='flex w-full justify-end my-2'>
                <button className='flex mr-5'>
                    {numOfLikes}
                    <img className="ml-1" src={LikeIcon} alt="Like"/>
                </button>
                <button className='flex mr-10'>
                    {numOfComments}
                    <img className="ml-1" src={CommentIcon} alt="Comment"/>
                </button>
            </div>
            <hr className=" mx-5 border-b" />
            <div className='flex h-7 w-full my-1'>
                <button className='flex h-full w-1/3 justify-center'>
                    <img className="h-full" src={LikeIcon} alt="Like"/>
                    Like
                </button>
                <button className='flex h-full w-1/3 justify-center'>
                    <img className="h-full" src={CommentIcon} alt="Comment"/>
                    Comment
                </button>
                <button className='flex h-full w-1/3 justify-center'>
                    <img className="h-full" src={ShareIcon} alt="Share"/>
                    Share
                </button>
            </div>
            <hr className=" mx-5 border-b mb-3" />
            <IndividualComment {...comment}/>
        </div>

    )

}

function UserUpload(){
    const username="Alex"
    return(
        <div id="userUploadBox" className='flex flex-col w-11/12 mx-5 my-5 border rounded-lg'>
            <div className='flex w-full h-14 mt-5'>
                <img className="w-auto h-full object-cover mx-3"src={ProfilePic} alt="User profile picture"></img>
                <div className='flex grow'>
                    <input type="text" className="w-11/12 h-full " placeholder={'Whats on your mind ,'+username} />
                </div>
            </div>
            <hr className=" mx-3 border-b mt-5" />
            <div className='flex justify-center my-4'>
                <button className='flex mx-auto'>
                    <img src={ImageIcon} alt="poll"/>
                    Photo/video
                </button>
                <button className='flex mx-auto'>
                    <img src={Pollicon} alt="poll"/>
                    Poll
                </button>

            </div>
        </div>
    )
}

function IndividualComment({id,profilePic,username,date,commentContext}){
    return(
        <div className='flex flex-col w-full my-2'>
            <div id="commentHeader" className='flex w-full h-10 items-center'>
                <img className="flex w-10 h-full ml-12" src={profilePic} alt={username+"'s profile picture"}/>
                <div className='flex h-full ml-2 font-semibold items-center'>{username}</div>
                <div className='flex h-full ml-10 text-sm text-gray-500 items-center'>{date}</div>
                <div className='flex h-full grow justify-end mr-10 items-center'>
                    <button className='flex h-6 w-6'>
                        <img className="w-full h-full" src={OverflowMenu} alt="Overflow Menu"/>
                    </button>
                </div>
            </div>
            <div className='flex w-full h-fit ml-24'>
                {commentContext}
            </div>
            <div className='flex w-full h-fit ml-24 my-3'>
                    <button className='w-fit h-full mr-5'>
                        Like
                    </button>
                    |
                    <button className='w-fit h-full ml-5'>
                        Reply
                    </button>
            </div>
        </div>
    )
}

export default Discussion;