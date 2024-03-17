import React, { useState } from 'react'
import ProfilePic from '../../assets/profilePhoto.png'
import Pollicon from '../../assets/pollicon.png'
import ImageIcon from '../../assets/imageIcon.png'
import ImageAttached from '../../assets/postImage.png'
import OverflowMenu from '../../assets/overflowMenu.png'
import { FaRegThumbsUp, FaThumbsUp, FaRegComment, FaRegShareSquare } from 'react-icons/fa'


function Discussion(){
    const individualPost = [
        {
        "profilePic":ProfilePic,
        "username":"Alex",
        "date":"27 min ago",
        "postContext":"Portfolio update: In 2023, my portfolio achieved a notable growth of 91.05%, and in 2024, a commendable 17.30% thus far. I want to provide short commentary to most of the positions in our portfolio.",
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
        },
        {
            "profilePic":ProfilePic,
            "username":"Alex",
            "date":"27 min ago",
            "postContext":"Portfolio update: In 2023, my portfolio achieved a notable growth of 91.05%, and in 2024, a commendable 17.30% thus far. I want to provide short commentary to most of the positions in our portfolio.",
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
    ]

    const [viewMore, setViewMore] = useState(false);

    function toggleViewMore() {
        setViewMore(!viewMore);
    }

    return(
        <div className="flex flex-col w-full">
            <h2 className="mb-1 mt-5 text-2xl font-bold text-gray-700">Discussion</h2>
            <UserUpload/>
            {/* <IndividualPost{...individualPost}/> */}
            {individualPost.slice(viewMore ? 0 : 0, viewMore ? individualPost.length : 1
            ).map((post, index) => (
                <IndividualPost key={index} {...post} />
            ))}
            {/* view more button */}
            <div className='flex justify-center text-primary'>
                <button className='flex mx-auto' onClick={toggleViewMore}>
                    <span>View {viewMore ? 'Less' : 'More'}</span>
                </button>
            </div>
        </div>
    )
}

function IndividualPost({ profilePic, username, date, postContext, imageAttached, numOfLikes, numOfComments, Comments }) {
    return (
        <div id="individualPost" className='flex flex-col w-full my-2 border rounded-lg'>
            <div id="postHeader" className='flex mt-3 mx-5 h-14'>
                <img className='w-auto h-full mr-3'src={profilePic} alt={username+'profile picture'}/>
                    <div className='flex flex-col w-full h-full justify-center'>
                        <div className='flex justify-between'>
                            <div>{username}</div>
                            <img className="h-6 w-6" src={OverflowMenu} alt="Overflow Menu" />
                        </div>
                        <div className='text-sm text-gray-500'>{date}</div>
                    </div>
            </div>
            <div id="postContext" className='mx-5 my-3'>
                {postContext}
            </div>
            <div className='mx-5'>
                <img className="w-full h-full"src={imageAttached} alt="image Attached"/>
            </div>

            <div className='flex justify-between w-full my-2'>
                <button className='flex ml-5 justify-start items-center'>
                    <FaThumbsUp className=' bg-primary text-white mx-1 rounded-full py-1' />
                    {numOfLikes}
                </button>
                <button className='justify-end mr-5'>
                    {numOfComments}
                    <span> </span>
                    comments
                </button>
            </div>
            <hr className=" mx-5 border-b" />
            <div className='flex h-7 w-full my-1'>
                <button className='flex h-full w-1/3 justify-center items-center'>
                    <FaRegThumbsUp className='mx-1' />
                    Like
                </button>
                <button className='flex h-full w-1/3 justify-center items-center'>
                    <FaRegComment className='mx-1' />
                    Comment
                </button>
                <button className='flex flex-row w-1/3 justify-center items-center'>
                    <FaRegShareSquare className='mx-1' />
                    Share
                </button>
            </div>
            <hr className=" mx-5 border-b mb-3" />
            {Comments.slice(0, 1).map((comment, index) => (
                <IndividualComment key={index} {...comment} />
            ))}
        </div>

    )

}

function UserUpload(){
    const username="Alex"
    return(
        <div id="userUploadBox" className='flex flex-col w-full my-5 border rounded-lg'>
            <div className='flex w-full h-14 mt-5'>
                <img className="w-auto h-full object-cover mx-3"src={ProfilePic} alt="User profile picture"></img>
                <div className='flex grow'>
                    <input type="text" className="w-11/12 h-full rounded-2xl border-gray-300" placeholder={'Whats on your mind, '+ username + '?'} />
                </div>
            </div>
            <hr className=" mx-3 border-b mt-5" />
            <div className='flex justify-center my-4'>
                <button className='flex mx-auto'>
                    <img src={ImageIcon} alt="poll"/>
                    Photo / Video
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
        <div className='flex flex-col w-full my-1 mx-5'>
            <div className='flex'>
                <img className='w-10 h-10 rounded-full' src={profilePic} alt={username + 'profile picture'} />
                <div className='flex flex-col mx-2'>
                    {/* Comment content */}
                    <div className='flex w-fit h-fit rounded-xl bg-gray-100 mx-3 px-1'>
                        <div className='flex flex-col m-2'>
                            <div className='flex flex-col w-full h-fit'>
                                <p className='font-semibold'>{username}</p>
                                {commentContext}
                            </div>
                        </div> 
                    </div>
                    {/* Comment action */}
                    <div className='flex w-full h-fit my-3 mx-3 text-sm space-x-3 text-gray-500'>
                        <span className='text-gray-400'>{date}</span>
                        <button className='w-fit h-full mr-5'>
                            Like
                        </button>
                        <span>|</span>
                        <button className='w-fit h-full ml-5'>
                            Reply
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Discussion;