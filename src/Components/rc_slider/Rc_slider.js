import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './rc_slider.css'

const RcSlider = () => {
    
    const [range, setRange] = useState([0, 400]);
    const onchangeRange = (newRange) => {
        setRange(newRange)
    }

    return (
        <div>
            <Slider range
                min={0}
                max={1000}
                defaultValue={range}
                onChange={onchangeRange} />
            <div className='group_input'>
               <div className='input'> <input type="number" value={range[0]} readOnly /> $</div>
                <div className='line_ngan'></div>
                <div className='input'><input type="number" value={range[1]} readOnly /> $</div>
            </div>
        </div>
    );
}

export default RcSlider;
