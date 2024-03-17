'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { Icon, Slot } from '../atoms';

const spring = {
  damping: 30,
  stiffness: 300,
  type: 'spring',
};

export const ActionMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="absolute h-full w-full">
      <div
        className={clsx('flex h-full w-full bg-blue-400 p-4', {
          'items-end justify-center': !isCollapsed,
          'items-end justify-end': isCollapsed,
        })}
      >
        <motion.div
          className={clsx('bg-red-400 py-2', {
            'rounded-full px-2': isCollapsed,
            'rounded-xl px-3': !isCollapsed,
          })}
          layout
          transition={spring}
        >
          <motion.div className="flex gap-3" layout>
            {!isCollapsed && (
              <>
                <Icon
                  className="cursor-pointer"
                  iconType="HOLLOW_PLAY"
                  right={
                    <Slot className="pr-2" element="span">
                      Run
                    </Slot>
                  }
                />
              </>
            )}
            <Icon
              className={clsx('cursor-pointer', { 'rotate-180': !isCollapsed })}
              iconType="CHEVRON_LEFT"
              onClick={toggleCollapsed}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
