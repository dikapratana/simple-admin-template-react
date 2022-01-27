import React from 'react';
import PropTypes from 'prop-types';

import SideMenu from '../elements/sideMenu';

export default function MainLayout(props) {
  const { children } = props;

  return (
    <div className="flex flex-no-wrap bg-gray-200">
      {/* Sidebar starts */}
      <div className="w-64 absolute sm:relative bg-gray-800 shadow h-screen flex-col justify-between hidden sm:flex">
        <div className="px-8">
          <div className="h-16 w-full flex items-center justify-center bold text-white">Admin</div>
          <SideMenu />
        </div>
      </div>
      {/* Sidebar ends */}

      <div className="container h-64 md:w-4/5 w-11/12 p-6 ">
        <div className="w-full h-full rounded bg-white shadow-sm p-4">{children}</div>
      </div>
    </div>
  );
}

MainLayout.defaultProps = {
  children: null
};

MainLayout.propTypes = {
  children: PropTypes.node
};
