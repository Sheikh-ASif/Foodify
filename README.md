# parcel 
 - Dev Build
 - Local Server
 - HMR = Hot Module Replacement
 - File Watching Algorithms -wtitten in c++
 - Caching - Faster Builds
 - Image Optimization
 - Minification 
 - Bundling
 - Compress
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling - support older browser
 - Diagnostics
 - Error Handling
 - HTTPs
 - Tree shaking - removed unused code
 - Different dev and prod bundles

# Namaste Food
/**
* Header
*  . Logo
*  . Nav Items
* Body
*  .Search
*  .RestaurantContainer
*  .RestaurantCard
*    - img
*    - Name of res, star rating, cuisine, delevery time
* Footer
*  .Copyright
*  .Links
*  .Address
*  .Contact
**/

Two types of Export/Import
- Default Export/Import
  - exporrt default component;
   - import component from the path;

- Named Export/Import
 - export const component;
  - import {Component} from "path";


# React Hooks
- (Normal js utility functions)
- useState() - super powerfull state variables in the react
- useEffect()


# 2 types of rounting in the webpage
  - client side routing
  - server side routing



# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our Store 
 - Connect our store to our App
 - Slice (cartSlice)
 - Dispatch(action)
 - Slector


 # Types of testing 
 - Unit Testing
 - Integration Testing
 - End to End (e2e) Testing

 # Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies(from jest)
 - configure Babel
 - Configure Parcel config file to disable default babel transpilation 
 - Jest Configuration(npx jest --init)
 - Install Jsdom library
 - Install @babel/preset-react - to make jsx work in test cases
 - Include @babel/preset-react inside my babel config
 - Install @testing-library/jest-dom
