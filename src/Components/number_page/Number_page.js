import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AppContext } from '../../AppContext';
import CardProductPage from '../cardProduct_page/CardProduct_page';
import './number_page.css'

const Items = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((item, index) => (
                    <CardProductPage key={index} ite={item} />
                ))}
        </>
    );
};

const PaginatedItems = ({ itemsPerPage }) => {
    const { product } = useContext(AppContext);
    const [itemOffset, setItemOffset] = useState(0);

    // Calculate the current items to display
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = product != null && product.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(product != null && product.length / itemsPerPage);

    // Handle page click
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % product.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className='row'>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel={<i class="fa-solid fa-angle-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                previousClassName='prev'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                pageClassName='page-item active'
                pageLinkClassName='page-link'
            />
        </div>
    );
};

const NumberPage = () => {
    return (
        <PaginatedItems itemsPerPage={9} />
    );
};

export default NumberPage;