import React from "react";

const Blogs = () => {
  return (
    <div className="m-12">
      <div>
        <h2 className="text-2xl pt-4 pb-3 text-emerald-500 font-bold">WHAT IS CONTEXT API</h2>
        <p className="text-gray-700">
          The Context API is a React structure that enables you to exchange unique details and assists in solving rop-drilling from all levels of your application.React.createContext() is all you
          need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the
          components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
        </p>
      </div>
      <div>
        <h2 className="text-2xl pt-4 pb-3 text-emerald-500 font-bold">WHAT IS SEMANTIC TAG</h2>
        <p className="text-gray-700">
          Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what
          role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.
        </p>
      </div>
      <div>
        <h2 className="text-2xl pt-4 pb-3 text-emerald-500 font-bold">DIFFERENCE BETWEEN INLINE VS INLINE BLOCK ELEMENTS</h2>
        <p className="text-gray-700">
          display: inline-block brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element. It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore. Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins and paddings are not respected, and with display: inline-block they are. Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn't sit next to other elements.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
