import React from 'react';

import classNames from 'classnames';

function ProductColors({productColors, color, setColor}){
    return (
        <section className="product_colors">
            {productColors.map(item => {
                return <span className={classNames({
                    'product_colors__item': true,
                    'product_colors__item--active': item.colour_name === color.colour_name
                })} style={{backgroundColor: `${item.hex_value}`}} key={item.colour_name} onClick={() => setColor(item)}></span>
            })}
        </section>
    );
}

export default ProductColors;