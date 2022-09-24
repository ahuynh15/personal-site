import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ButtonContainer, Container } from '@/components/Common';

function FilterModal({ tags, onClear, onClick, onClose, activeFilters }) {
  const renderTags = (values) =>
    values.map((tag) => {
      const isActive = activeFilters.includes(tag);

      return (
        <button key={tag} onClick={() => onClick(tag)} type="button">
          <ButtonContainer
            className={classNames(
              'font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100',
              isActive && 'bg-orange-500 text-zinc-100 dark:bg-orange-500',
            )}
            toggled={isActive}
          >
            {tag}
          </ButtonContainer>
        </button>
      );
    });

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/30"
      onWheel={(e) => e.stopPropagation()}
      aria-hidden="true"
      onClick={onClose}
    >
      <Container onClick={(e) => e.stopPropagation()} className="max-w-[80vw]">
        <div className="flex max-h-[80vh] w-full flex-col gap-4 p-4">
          <div>
            <div className="mb-2 text-2xl font-semibold">All Filters</div>
            <div className="h-1 rounded bg-zinc-900 dark:bg-zinc-50" />
          </div>
          <div className="scrollbar scrollbar-light dark:scrollbar-dark flex flex-wrap items-center gap-4 overflow-y-auto">
            {renderTags(tags)}

            <button onClick={() => onClear()} type="button">
              <div className="font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
                Reset Filters
              </div>
            </button>
          </div>
        </div>
      </Container>
    </motion.div>,
    document.getElementById('root'),
  );
}

FilterModal.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClear: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterModal;
