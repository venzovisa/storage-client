import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pager = props => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return (
        <Pagination aria-label="Page navigation example">
            {pages.map(page =>
                <PaginationItem key={page} className={page === currentPage ? "active" : ""}>
                    <PaginationLink href="" onClick={() => onPageChange(page)}>
                        {page}
                    </PaginationLink>
                </PaginationItem>
            )}
        </Pagination>
    )
};

Pager.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pager;