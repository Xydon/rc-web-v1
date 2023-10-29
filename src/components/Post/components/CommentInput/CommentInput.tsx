import React from 'react'

function CommentInput() {
  return (
    <div className='rounded-[12px] bg-zinc-50 flex overflow-hidden border border-slate-200 focus:border-amber-500'>
      <input type="text" className='text-sm h-[46px] border-none grow bg-transparent' placeholder='Add a Comment...'/>
    </div>
  )
}

export default CommentInput