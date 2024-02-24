import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';
import {
  SfDrawer,
  SfButton,
  SfIconFavorite,
  SfIconClose,
  useTrapFocus,
  SfDrawerPlacement,
} from '@storefront-ui/react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const DrawerWithTransition: React.FC<DrawerProps> = ({ isOpen, onClose, onAddToCart,  basket} :any) => {
  const [placement] = useState<SfDrawerPlacement>('right');
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);

  useTrapFocus(drawerRef, { activeState: isOpen });

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    onClose();
  };

  return (
    <>
      <Transition nodeRef={nodeRef} in={isOpen} timeout={300}>
        {(state) => (
          <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
            <SfDrawer
              ref={drawerRef}
              open={isOpen}
              placement={placement}
              onClose={onClose}
              style={{ height: '100%', width: '400px' }}
              className={classNames(
                'bg-neutral-50 border border-gray-300 duration-500 transition ease-in-out',
                {
                  'max-w-[500px]': state === 'entered',
                  'translate-x-0': state === 'entered' && placement === 'right',
                  '-translate-x-full': (state === 'entering' || state === 'exited') && placement === 'right',
                  '-translate-x-0': state === 'entered' && placement === 'left',
                  'translate-x-full': (state === 'entering' || state === 'exited') && placement === 'left',
                },
              )}
            >
              <header className="flex items-center justify-between px-10 py-6">
                <div className="flex items-center text-black">
                  <SfIconFavorite className="mr-2" /> Корзина
                </div>
                <SfButton
                  square
                  variant="tertiary"
                  onClick={onClose}
                  className="text-white"
                >
                  <SfIconClose />
                </SfButton>

              </header>
              
            </SfDrawer>
          </div>
        )}
      </Transition>
    </>
  );
};

export default DrawerWithTransition;
