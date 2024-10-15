import React from 'react'

const step4 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <img 
                className="mx-auto h-12 w-auto" 
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" 
                alt="Workflow" 
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Congratulations</h2>
              <p className="mt-2 text-sm text-gray-600">You have submitted your assignment. Please wait for the update.</p>
              <p className="mt-2 text-sm text-gray-600">Review Status: UNDER EVALUATION</p>
            </div>
            <div className="text-center">
              <p className="mt-2 text-sm text-gray-600">Please upload your Marks Sheet by clicking on the button below.</p>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
            <div className="text-center">
              <p className="mt-2 text-sm text-gray-600">For any further queries regarding your application please follow this <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">link</a>.</p>
            </div>
          </div>
        </div>
      );
}

export default step4
