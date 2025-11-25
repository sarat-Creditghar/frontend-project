import React from "react";
import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";

const ProfilePost = ({ post, currentUser }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-0">
                {/* Post Header */}
                <div className="flex items-center gap-3 p-4">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={currentUser.avatar} alt="Avatar" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-sm">{post.author}</h4>
                        <p className="text-xs text-base-content/60">{post.date}</p>
                    </div>
                    <button className="btn btn-ghost btn-circle btn-sm">
                        <MoreVertical size={18} />
                    </button>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-2">
                    <p className="text-sm mb-5">{post.content}</p>
                    {post.image && (
                        <img
                            src={post.image}
                            alt="Post"
                            className="w-full rounded-xl object-cover max-h-96"
                        />
                    )}
                </div>

                {/* Post Actions */}
                <div className="flex items-center  px-4 py-2 justify-between">
                    <button className="btn btn-ghost btn-sm gap-2 text-error">
                        <Heart size={18} fill="currentColor" /> {post.likes}
                    </button>
                    <div className="">
                        <button className="btn btn-ghost btn-sm gap-2">
                        <MessageCircle size={18} /> {post.comments.length}
                    </button>
                    <button className="btn btn-ghost btn-sm gap-2">
                        <Share2 size={18} />
                    </button>
                    </div>
                </div>

                {/* Comments Section */}
                {post.comments.length > 0 && (
                    <div className="bg-base-200/50 p-4 space-y-4">
                        {post.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-1">
                                <div className="avatar">
                                    <div className="w-16 scale-70 rounded-full">
                                        <img src={comment.avatar} alt="Commenter" />
                                    </div>
                                </div>
                                <div className="bg-base-100 p-3 rounded-xl flex-1 text-sm shadow-sm">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-bold">{comment.author}</span>
                                        <span className="text-xs text-base-content/50">
                                            {comment.date}
                                        </span>
                                    </div>
                                    <p className="text-sm text-base-content/60">{comment.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {/* Comment Input */}
                <div className="p-4 pt-0 flex gap-3 items-center">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src={currentUser.avatar} alt="Me" />
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="input input-bordered input-sm w-full rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfilePost;
