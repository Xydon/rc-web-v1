import React from 'react';
import useHeight from "@src/modules/hooks/useHeight";
import Navbar from '@src/components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import SystemButtons from '@src/components/Buttons/System/SystemButtons';
import Typography from '@src/components/Typography';
import ResponsiveContainer from '@src/components/ResponsiveContainer/ResponsiveContainer';
import SimplePostCard from '@src/components/PostCards/SimplePostCard';

export interface RIAllPostScreen {}

export namespace PIAllPostScreen {}

function AllPostScreen() {
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
                <div className='flex justify-between'>
                    <Typography.H2 className=''>
                        All Posts
                    </Typography.H2>
                    <SystemButtons.Regular bgColorClassName=''>Create Post</SystemButtons.Regular>
                </div>

                <div className='my-10'>
                    <SimplePostCard />
                    <SimplePostCard />
                </div>
            </ResponsiveContainer>
            
        </div>
    );
}

export default AllPostScreen;
