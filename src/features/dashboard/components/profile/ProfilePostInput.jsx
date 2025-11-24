import React from "react";
import { Image, Video } from "lucide-react";

const ProfilePostInput = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-4">
                <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Share what you are thinking here..."
                    rows="3"
                ></textarea>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-2">
                        <button className="btn btn-sm btn-ghost gap-2">
                            <Image size={18} className="text-success" /> Image/Video
                        </button>
                        <button className="btn btn-sm btn-ghost gap-2">
                            <Video size={18} className="text-error" /> Streaming
                        </button>
                    </div>
                    <button className="btn btn-neutral btn-sm">Post</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePostInput;
