import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import CaretDownIcon from 'lib/icons/react/CaretDownIcon';

const DropdownButton = forwardRef(
  ({ children, isFullWidth = false, isActive, ...rest }, ref) => (
    <button
      {...rest}
      className={cc([
        {
          'fdsDropdown--isFullWidth': isFullWidth,
          'fdsDropdown--isActive': isActive,
        },
        'display--inlineFlex',
        'fdsDropdown',
        'border--focus',
        'rounded--all',
      ])}
      ref={ref}
    >
      <div>{children}</div>
      <div className="margin--left--s alignChild--center--center">
        <CaretDownIcon customSize={12} />
      </div>
    </button>
  )
);

DropdownButton.displayName = 'DropdownButton';

DropdownButton.propTypes = {
  /** content rendered to the left of the carat */
  children: PropTypes.node,
  /** Controls the button going full width */
  isFullWidth: PropTypes.bool,
  /** Controls active state of dropdown */
  isActive: PropTypes.bool,
};

export default DropdownButton;
