import React from 'react'
import { ImageIndex } from '@src/assets/AssetIndex';
import AssetIndex from '@src/assets/AssetIndex';
export interface RIComment{
    commentText:string;
    authorName:string;
    date:string;
    likes:number;
}

export namespace PIComment{

}

export default function PostComment() {
  return (
    <div className='flex '>
      <div className="rounded-full m-2">
            <AssetIndex.Avatar />
        </div>
      <div className='w-full'>
        <div className='flex justify-between'>
        <div><p className='text-sm'>Chirag Goel</p></div>
          <div>
            
            
            <div className='flex'>
              <AssetIndex.Like />
              <p className='text-sm'>10</p>
            </div>
          </div>
          
        </div>
        
        <p className='text-[50%] from-slate-300'>14 Nov 2025</p>
        <p className='text-xs from-slate-400'>This is a comment</p>
      </div>
    </div>
  )
}


