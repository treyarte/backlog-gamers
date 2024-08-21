'use client';
import SourceItem from './SourceItem';
export default function SourcesTab() {
  return (
    <div className='flex flex-col gap-5 border border-bg-border rounded-md shadow-custom p-5'>
        <h2>
          News Sources
        </h2>
        <p>
          Select the websites you trust to get the latest gaming news. Only the selected sources will appear in your customized feed
        </p>
      <div className=' xl:grid xl:grid-cols-2 flex flex-col gap-8 mb-8'>
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
          <SourceItem />
    </div>
    </div>
  )
}