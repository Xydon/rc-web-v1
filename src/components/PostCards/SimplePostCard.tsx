import React from 'react';
import CardContainer from '../ArticleCards/Base/CardContainer/CardContainer';
import Chip from '../ArticleCards/Base/Chip/Chip';
import Typography from '../Typography';
import PaddingContainer from '../ArticleCards/Base/PaddingContainer/PaddingContainer';
import Divider from '../ArticleCards/Base/Divider/Divider';
import PostMetadata from '../MetadataComponents/PostMetadata/PostMetadata';
import AssetIndex from '@src/assets/AssetIndex';
import PostMetadataComponent from '../MetadataComponents/PostMetaDataComponent/PostMetaDataComponent';
import PostComment from '../MetadataComponents/PostComment/PostComment';
export interface RISimplePostCard {
	children?: React.ReactNode;
}

export namespace PISimplePostCard {

}

function SimplePostCard() {
	return (
        <div className='w-96 m-4'>
            <CardContainer>
                <PaddingContainer>
                    <h4 className='font-semibold'>Heading</h4>
                    <p className='text-slate-600'>My name is Jayant Pranjal. Why do you think so?</p>
                </PaddingContainer>
                <Divider />
                <div className='h-60'></div>
                <Divider />
                <div>
                    <div>
                        <PaddingContainer>
                            <PostMetadataComponent />
                        </PaddingContainer>
                    </div>
                    <div className='m-3'>
                        <input className=' p-2 h-10 border-2 border-slate-300 rounded-md w-full' placeholder='Add a comment...'></input>
                        
                    </div>
                    
                    <div className='w-full p-2'>
                        <PostComment />
                        <PostComment />
                        <p className='from-neutral-300 text-right'>...show more</p>
                    </div>
                    
                </div>
                
            </CardContainer>
        </div>
	);
}

export default SimplePostCard;





// export default function ScreenContainerLayout(props: RIScreenContainerLayout) {
// 	return (
// 		<div className="flex flex-col lg:flex-row gap-[8px] lg:gap-[12px] flex-wrap">
// 			{props.children}
// 		</div>
// 	);
// }

// export function Box({ children }: { children: React.ReactNode }) {
// 	return (
// 		<div style={{ flexBasis: "calc(50% - 24px)", maxWidth: 720 }}>
// 			{children}
// 		</div>
// 	);
// }