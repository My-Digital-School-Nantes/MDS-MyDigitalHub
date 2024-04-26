const DraggableEvents = () => {
  return (
    <div id='external-events' className='fixed z-10 top-20 left-20 w-40 p-2 border border-gray-300 bg-gray-200'>
      <p><strong>Draggable Events</strong></p>
      <div className='fc-event cursor-move mb-2 p-1 border border-gray-300 bg-white'>My Event 1</div>
      <div className='fc-event cursor-move mb-2 p-1 border border-gray-300 bg-white'>My Event 2</div>
      <div className='fc-event cursor-move mb-2 p-1 border border-gray-300 bg-white'>My Event 3</div>
      <div className='fc-event cursor-move mb-2 p-1 border border-gray-300 bg-white'>My Event 4</div>
      <div className='fc-event cursor-move mb-2 p-1 border border-gray-300 bg-white'>My Event 5</div>
      <p>
        <input type='checkbox' id='drop-remove' />
        <label htmlFor='drop-remove'>remove after drop</label>
      </p>
    </div>
  )
}

export default DraggableEvents
