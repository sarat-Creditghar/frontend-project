import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import socialLinksData from '../../features/dashboard/data/socialLinksData.json';

const AccountSocialLinks = () => {
    const iconMap = {
        Facebook: Facebook,
        Instagram: Instagram,
        Linkedin: Linkedin,
        Twitter: Twitter
    };

    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <div className="flex flex-col gap-4">
                {socialLinksData.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                        <div key={link.id} className="form-control">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {Icon && <Icon size={20} className="text-gray-500" />}
                                </div>
                                <input
                                    type="text"
                                    defaultValue={link.url}
                                    className="input input-bordered w-full pl-10"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-end mt-6">
                <button className="btn btn-neutral">Save changes</button>
            </div>
        </div>
    );
};

export default AccountSocialLinks;
