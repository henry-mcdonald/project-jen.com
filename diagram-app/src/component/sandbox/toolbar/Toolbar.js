import React from 'react'

function Toolbar({handleCreateCard, handleSaveWorkspace}) {
    return (
        <div className='layer toolbarLayer'>
        <p>Toolbar</p>
        <button onClick={handleCreateCard}>Make a Card</button>
        <button onClick={handleSaveWorkspace}>Save Workspace</button>
        
        </div>
    )
}

export default Toolbar
