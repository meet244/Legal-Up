import React from 'react'
import Demo from './LawyerCard'
import LawyerCard from './LawyerCard'
import { useDispatch, useSelector } from 'react-redux'
import { getLawyers, setQuery } from '../../features/user'

const Lawyers = () => {
  let dispatch = useDispatch()
  let { query, lawyers, longitude, latitude } = useSelector(state => state.user)
  // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  // useGeolocated({
  //   positionOptions: {
  //     enableHighAccuracy: false,
  //   },
  //   userDecisionTimeout: 5000,
  // });

  return (
    <div className="bg-white pt-16">
      <div>
        <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          <div className="fixed inset-0 z-40 flex">
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  <li>
                    <a href="#" className="block px-2 py-3">  </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Backpacks</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
                  </li>
                </ul>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                      <span className="font-medium text-gray-900">Color</span>
                      <span className="ml-6 flex items-center">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-mobile-0">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                        <span className="font-medium text-gray-900">Category</span>
                        <span className="ml-6 flex items-center">
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div className="pt-6" id="filter-section-mobile-1">
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">Top </label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                        <span className="font-medium text-gray-900">Size</span>
                        <span className="ml-6 flex items-center">
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div className="pt-6" id="filter-section-mobile-2">
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                        </div>
                        <div className="flex items-center">
                          <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between border-b border-gray-200 pb-6 pt-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Top Lawyers</h1>
            {/* <form autocomplete="off" className="flex-1 mx-8"
              onSubmit={(e) => {
                e.preventDefault();
                let { queryStr } = e.target;
                dispatch(setQuery(queryStr.value));
                dispatch(getLawyers(queryStr.value));
              }}
            >
              <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only :text-white">Search</label>
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer ">
                  <svg className="w-4 h-4 text-gray-500 :text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input defaultValue={query} name="queryStr" type="search" className="block w-full pr-24 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500  :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" placeholder="Enter your case" required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800">Search</button>
              </div>
            </form> */}

            <form className="flex-1 mx-8"
              onSubmit={(e) => {
                e.preventDefault();
                let { queryStr } = e.target;
                dispatch(setQuery(queryStr.value));
                dispatch(getLawyers(queryStr.value));
              }}
            >
              <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 :bg-gray-700 :border-gray-600">

                <div class="px-4 py-2 bg-white rounded-b-lg :bg-gray-800">
                  <label for="editor" class="sr-only">Publish post</label>
                  <textarea defaultValue={query} id="editor" name="queryStr" rows="5" class="outline-0 block w-full px-0 text-sm text-gray-800 bg-white border-0  :bg-gray-800 focus:ring-0 :text-white :placeholder-gray-400" placeholder="Describe your case..." required></textarea>
                </div>
              </div>
              <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4  hover:bg-blue-800">
                Get Lawyer
              </button>
            </form>


            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                    Sort
                    <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>


                <div className="hidden absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1 " >
                    <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                    <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  <li>
                    <a href="#">Totes</a>
                  </li>
                  <li>
                    <a href="#">Backpacks</a>
                  </li>
                  <li>
                    <a href="#">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#">Laptop Sleeves</a>
                  </li>
                </ul>

                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                      <span className="font-medium text-gray-900">Color</span>
                      <span className="ml-6 flex items-center">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-color-0" className="ml-3 text-sm text-gray-600">White</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-color-1" className="ml-3 text-sm text-gray-600">Beige</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-color-2" className="ml-3 text-sm text-gray-600">Blue</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-color-3" className="ml-3 text-sm text-gray-600">Brown</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-color-4" className="ml-3 text-sm text-gray-600">Green</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-color-5" className="ml-3 text-sm text-gray-600">Purple</label>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                      <span className="font-medium text-gray-900">Category</span>
                      <span className="ml-6 flex items-center">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-category-0" className="ml-3 text-sm text-gray-600">New Arrivals</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-category-1" className="ml-3 text-sm text-gray-600">Sale</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-category-2" className="ml-3 text-sm text-gray-600">Travel</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-category-3" className="ml-3 text-sm text-gray-600">Organization</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-category-4" className="ml-3 text-sm text-gray-600">Accessories</label>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                      <span className="font-medium text-gray-900">Size</span>
                      <span className="ml-6 flex items-center">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label>
                      </div>
                    </div>

                  </div>
                </div>
              </form>

              <div className="lg:col-span-3 ">
                {lawyers.data.length === 0 && <Templates/>}
                {lawyers.data.map((item, i) => {
                  return (<LawyerCard key={i} card={item} />)
                })}
              </div>
            </div>
          </section>
        </main>
      </div >
    </div >

  )
}
const Templates = () => {
  return (


    <div class="flex flex-col justify-center items-center h-[100vh] pt-4">
      <div class="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        
        
        
        <div class="relative flex flex-grow !flex-row  items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] :border-[#ffffff33] :!bg-navy-800 :text-white :shadow-none">
          <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div class="rounded-full bg-lightPrimary p-3 :bg-navy-700">
              <span class="flex items-center text-brand-500 :text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="h-50 ml-4 flex w-auto flex-col justify-center">
            <p class="font-dm text-sm font-medium text-gray-600">Template Question 1</p>
            <h4 class="text-sm font-bold text-navy-700 :text-white">Client is being sued by a competitor for trademark infringement. The competitor alleges that the client is using a trademark that is confusingly similar to its own trademark. The client is seeking legal advice on how to defend the lawsuit.</h4>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
export default Lawyers