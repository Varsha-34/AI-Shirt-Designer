import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {

    const snap = useSnapshot(state);
    return (
    <div className='absolute left-full ml-3'>

        <SketchPicker
            color= {snap.color}
            disableAlpha
            presetColors={ [
                '#ffafcc', '#03045e', '#00afb9', '#e63946', '#212529', '#f8f7ff'
            ]}
            onChange = {(color) => state.color = color.hex}
        />

    </div>
    )
}

export default ColorPicker