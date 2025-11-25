import React from "react";
import { MoreVertical } from "lucide-react";

const ProfileGallery = ({ gallery }) => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-6">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((item) => (
                    <div key={item.id} className="card bg-base-100 shadow-xl overflow-hidden relative group h-64">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <button className="absolute top-4 right-4 text-white/80 hover:text-white">
                            <MoreVertical size={20} />
                        </button>

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h4 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2">{item.title}</h4>
                            <p className="text-gray-300 text-sm">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileGallery;
