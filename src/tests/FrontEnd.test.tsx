/**
 * @jest-environment jsdom
 */

import React from 'react';
import { changeChildArr, changeData, IDataNode, test, IService, TreeNode} from "../charts/DataFuncDepGraph"
import { DependencyGraph,treeData, getLinkComponent, LinkControls  } from '../charts/DependencyTree'
import { SettingsContainer } from '../containers/ServiceSettingsContainer';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// describes what the test is
describe('jest testing is in progress', () => {
  // what the specific test is
    it('jest testing activated', () => {
      // what is expected
      expect(true).toBeTruthy();
    })
  }) 

describe('jest snapshot testing', () => {
  describe('dependency graph snapshot testing', () => {
    it('the dependency chart component matches the snapshot', () => {
      expect(DependencyGraph).toMatchSnapshot();
    })

    it('the getLinkComponent component matches the snapshot', () => {
        expect(getLinkComponent).toMatchSnapshot();
    })

    it('the LinkControls component matches the snapshot', () => {
      expect(LinkControls).toMatchSnapshot();
    })
  })

  describe('dummy data snapshot testing', () => {
    it('the dummy data matches the snapshot', () => {
      expect(test).toMatchSnapshot();
    })
    
    it('the dummy data matches the snapshot', () => {
      expect(treeData).toMatchSnapshot();
    })
  })
})

describe('jest data parser testing', () => {
  it('dummy data ran through parser correctly matches post parser chart data', () => {
    expect(changeData(test)).toEqual(treeData)
  })

  describe('jest data child array parser testing', () => {
    it('check if first element from result array exists', () => {
      expect(changeChildArr(test.services)[0]).toBeTruthy();
    })

    it('check if result array is an object', () => {
      expect(typeof changeChildArr(test.services)).toBe('object');
    })
 
    it('check if first element from result array is an object', () => {
      expect(typeof changeChildArr(test.services)[0]).toBe('object');
    })

    it('check if first element from result array has "service" property', () => {
      expect(changeChildArr(test.services)[0]).toHaveProperty('service')
    })

    it('check if first element from result array has "status" property', () => {
      expect(changeChildArr(test.services)[0]).toHaveProperty('status')
    })

    it('check if first element from result array has "children" property', () => {
      expect(changeChildArr(test.services)[0]).toHaveProperty('children')
    })

    it('check if dummy data result array from child parser has length of 2', () => {
      console.log(changeChildArr(test.services))
      expect(changeChildArr(test.services)).toHaveLength(3)
    })
  })
})

/** why we are not using interface in our jest testing file
 * https://stackoverflow.com/questions/48813882/testing-typescript-interface-with-jest
 */

//--------Ground work for mock testing---------//

// describe('mock test with dummy data', () => {
//   const mockCallback = jest.fn(x => changeChildArr(x));
  // function testChildFunc(items: IService[], callback: (arr: IService[]) => TreeNode[]){
//       callback(items);
//   }
//   testChildFunc(test.services,mockCallback);
//   it('mock test for changeChildArr with dummy data', () => {
//     // The mock function is called twice
//     // expect(mockCallback.mock.calls.length).toBe(1);

//     // The first argument of the first call to the function was 0
//     expect(mockCallback.mock.calls[0][0]).toBe(changeChildArr(test.services)[0]);
//   })

// })

//----- ground work for testing endpoints with promise testing by chai-as-promised -----//
// const chai = require("chai");
// const chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
// const expect = chai.expect

// it('Promise should pass', function() {
//   return expect(readAndWriteToDB()).to.be.fulfilled
// })

//----- ground work for enzyme testing -----//
import { shallow } from 'enzyme';
// import {App} from '../app'; // Introduce the corresponding React component
describe('Enzyme testing is in progress', () => {
  it('Enzyme testing activated', () => {
    // const link:any = shallow(<DependencyGraph/>)
    expect(true).toBeTruthy();
  });
})

// ----- Set Up For Ant Design Testing ----- //

import { render } from "@testing-library/react";
import { SignIn } from "../containers/SignInContainer";
// import ReactDOM from "react-dom";
// describe('enzyme test for react', () => {
//   it(('checking the sign in', () => {
//   const onCountChange = jest.fn();
//   let wrapper;
//   })
//   beforeEach(() => {
//     wrapper = mount(SignIn())
//   })
// })


  describe('checking sign in container', () => {
    it('expects secret form to be in SignIn component', () => {
      const { queryByTestId } = render(<SignIn />);
      const addSignInButton = queryByTestId("secret-form");
      expect(addSignInButton).toBeInTheDocument();
    })

    it('expects server IP form to be in SignIn component', () => {
      const { queryByTestId } = render(<SignIn />);
      const addSignInButton = queryByTestId("serverIP-form");
      expect(addSignInButton).toBeInTheDocument();
    })

    it('expects button to be in SignIn component', () => {
      const { queryByTestId } = render(<SignIn />);
      const addSignInButton = queryByTestId("signin-button");
      expect(addSignInButton).toBeInTheDocument();
    })     


  })
  
// it("App loads with initial state of 0", () => {
//   const { container } = render(<SignIn />);
//   const countValue = getByTestId(container, "secret-form");
//   expect(countValue.textContent).toBe("0");
// });

// describe('checking service settings container', () => {
//     it('expects button to be in SignIn component', () => {
//       const { queryByTestId } = render(<SettingsContainer />);
//       const addReactComponent = queryById("dashboard");
//       expect(addReactComponent).toBeInTheDocument();
//     })
// })

// import {App} from "../app.jsx";
// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(SignIn(), div);
//   ReactDOM.unmountComponentAtNode(div);
// });
