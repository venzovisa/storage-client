import React from 'react';

const LoadingBar = () => {

   return(
       <div className="text-center mt-2 mb-2">
           <div className="pb-container loading" data-reactid=".1.0">
               <button className="pb-button" data-reactid=".1.0.0"><span data-reactid=".1.0.0.0">Go!</span>
                   <svg className="pb-progress-circle" viewBox="0 0 41 41" data-reactid=".1.0.0.1">
                       <path d="M38,20.5 C38,30.1685093 30.1685093,38 20.5,38" data-reactid=".1.0.0.1.0"></path>
                   </svg>
                   <svg className="pb-checkmark" viewBox="0 0 70 70" data-reactid=".1.0.0.2">
                       <path d="m31.5,46.5l15.3,-23.2" data-reactid=".1.0.0.2.0"></path>
                       <path d="m31.5,46.5l-8.5,-7.1" data-reactid=".1.0.0.2.1"></path>
                   </svg>
                   <svg className="pb-cross" viewBox="0 0 70 70" data-reactid=".1.0.0.3">
                       <path d="m35,35l-9.3,-9.3" data-reactid=".1.0.0.3.0"></path>
                       <path d="m35,35l9.3,9.3" data-reactid=".1.0.0.3.1"></path>
                       <path d="m35,35l-9.3,9.3" data-reactid=".1.0.0.3.2"></path>
                       <path d="m35,35l9.3,-9.3" data-reactid=".1.0.0.3.3"></path>
                   </svg>
               </button>
           </div>
       </div>
   )
};

export default LoadingBar