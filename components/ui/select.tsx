import React, { FC } from 'react';
import { Listbox } from '@headlessui/react';
import classNames from 'classnames';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
}

const Select: FC<SelectProps> = ({ value, onValueChange, children, placeholder }) => {
  return (
    <Listbox as="div" className="relative">
      {({ open }) => (
        <>
          <span className="block text-gray-700">{placeholder}</span>
          <Listbox.Button
            as="button"
            className={classNames(
              'flex items-center justify-between w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
              open ? 'bg-gray-200' : 'bg-white'
            )}
            aria-expanded={open}
            aria-haspopup="listbox"
          >
            <span>{value || placeholder}</span>
            <svg
              className={classNames(
                'w-5 h-5 transition-transform duration-200',
                open ? 'rotate-180' : 'rotate-0'
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Listbox.Button>
          <Listbox.Options
            as="ul"
            className={classNames(
              'absolute z-10 mt-2 w-full py-1 bg-white border rounded-md shadow-lg',
              open ? 'block' : 'hidden'
            )}
            aria-labelledby="select-button"
          >
            {React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement<any>, {
                onClick: () => onValueChange(child.props.value),
              })
            )}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

const SelectItem: FC<SelectItemProps> = ({ value, children }) => {
  return (
    <Listbox.Option
      as="li"
      value={value}
      className="cursor-pointer px-4 py-2 hover:bg-gray-200"
      aria-selected={false} // Handle aria-selected dynamically based on the value
    >
      {children}
    </Listbox.Option>
  );
};

export { Select, SelectItem };
