import React from 'react';
import '../../../styles/Store/MainStore/News/News.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = (): (number | string)[] => {
        const delta = 2;
        const range: (number | string)[] = [];
        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            range.unshift('...');
        }
        if (currentPage + delta < totalPages - 1) {
            range.push('...');
        }

        range.unshift(1);
        if (totalPages > 1) {
            range.push(totalPages);
        }

        return range;
    };

    const handleClick = (page: number | string) => {
        if (page !== '...') {
            onPageChange(page as number);
        }
    };

    return (
        <div className="pagination">
            {currentPage !== 1 && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    &lt;
                </button>
            )}
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    className={page === currentPage ? 'active' : ''}
                    onClick={() => handleClick(page)}
                >
                    {page}
                </button>
            ))}
            {currentPage !== totalPages && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    &gt;
                </button>
            )}
        </div>
    );
};

export default Pagination;
