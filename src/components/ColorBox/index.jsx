import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

ColorBox.propTypes = {
    
};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const randomIndex = Math.trunc(Math.random() * 5)
    return COLOR_LIST[randomIndex] //return vị trí thứ n của mảng.
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color' || 'deeppink')
        return initColor;
    })

    function handleBoxClick() {
        const newColor = getRandomColor(); //khi click có màu mới
        setColor(newColor);                // cập nhật màu

        localStorage.setItem('box_color', newColor) //lưu vào local
    }

    return (
        <div 
        className="color-box" 
        style={{backgroundColor: color}}
        onClick={handleBoxClick}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;