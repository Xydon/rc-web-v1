import React from 'react';
import useHeight from "@src/modules/hooks/useHeight";
import Navbar from '@src/components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import SystemButtons from '@src/components/Buttons/System/SystemButtons';
import Typography from '@src/components/Typography';
import ResponsiveContainer from '@src/components/ResponsiveContainer/ResponsiveContainer';
import SimplePostCard from '@src/components/PostCards/SimplePostCard';


function MyPosts() {
    const heightHandle = useHeight();
    return (
        <div>
        <div ref={heightHandle.ref}>
                    <Navbar />
            </div>
            <div
                style={{
                    maxHeight: `calc( 100vh - ${heightHandle.height}px )`,
                    overflow: "auto",
                }}
                className="py-sys-63"
            ></div>
            {/* <div className=''>
                <Typography.H2>All Posts</Typography.H2>
            </div> */}
            <ResponsiveContainer>
                <div className="flex justify-between">
                    <Typography.H2>
                        My Posts
                    </Typography.H2>
                    {/* <SystemButtons.Regular >Create Post</SystemButtons.Regular> */}
                </div>
                <div>
                    <SimplePostCard />
                    <SimplePostCard />
                </div>
                
            </ResponsiveContainer>
            
        </div>
    );
}

export default MyPosts
