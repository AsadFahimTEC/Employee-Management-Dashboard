import { useState } from "react";

const EmployeeDashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="mt-4">
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="px-4 py-3 bg-white shadow-md flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-green-600 font-semibold text-lg">
              AmarEmployee
            </div>
            <img
              src="https://i.ibb.co/nDjvnsc/Untitled-design-30.png"
              alt="menu-icon"
              className="w-8 h-8 ml-4 cursor-pointer"
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          </div>
           {/* Search Bar */}
           <div className="flex items-center mb-4 ml-20 mr-20">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg ml-2">
                  {/* Search icon (replace with your icon) */}
                  <img
                    src="https://i.ibb.co/YNrvXL1/Untitled-design-28-removebg-preview.png"
                    alt="search-icon"
                    className="w-8 h-6"
                  />
                </button>
              </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 rounded-full p-2">
              <img
                src="https://i.ibb.co/XWdJZFp/8-removebg-preview.png"
                alt="profile-pic"
                className="w-8 h-8"
              />
            </div>
            <div className="bg-gray-200 rounded-full p-2">
              <img
                src="https://i.ibb.co/Nr0pZnY/profile-removebg-preview-removebg-preview.png"
                alt="dp"
                className="w-8 h-8"
              />
            </div>
            
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 py-8 md:flex">
          {/* Sidebar Navigation */}
          <nav
            className={`bg-white shadow-md md:w-64 ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            <div className="p-4">
              {/* Navigation Options */}
              <div className="space-y-4">
                {/* Replace nav options with your icons and labels */}
                <div className="flex items-center p-3 rounded-lg bg-purple-600 text-white">
                  {/* Example nav option */}
                  <img
                    src="https://i.ibb.co/Yfkk2Gk/Untitled-design-29.png"
                    alt="dashboard"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Dashboard</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-purple-600 text-white">
                  {/* Example nav option */}
                  <img
                    src="https://i.ibb.co/QcSYMcp/9-removebg-preview-1.png"
                    alt="dashboard"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Articles</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-purple-600 text-white">
                  {/* Example nav option */}
                  <img
                    src="https://i.ibb.co/sJwg3y9/5-removebg-preview.png"
                    alt="dashboard"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Reports</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-purple-600 text-white">
                  {/* Example nav option */}
                  <img
                    src="https://i.ibb.co/C8jwsN3/6-removebg-preview.png"
                    alt="dashboard"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Institution</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-purple-600 text-white">
                  {/* Example nav option */}
                  <img
                    src="https://i.ibb.co/VNyYGw6/10-removebg-preview.png"
                    alt="dashboard"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Profile</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-purple-600 text-white">
                  {/* Example nav option */}
                  <img
                    src="https://i.ibb.co/sCLrY16/4-removebg-preview.png"
                    alt="dashboard"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Settings</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-purple-600 text-white">
                  {/* Example nav option */}
                  <img
                    src="https://i.ibb.co/Ms6GgkX/7-removebg-preview.png"
                    alt="dashboard"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Logout</span>
                </div>
                
                
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <div className="md:flex-1">
            <div className="mb-8">
             

              {/* Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Example Box */}
                <div className="bg-purple-600 text-white p-6 rounded-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold">60.5k</h2>
                    <h3>Article Views</h3>
                  </div>
                  {/* Box icon (replace with your icon) */}
                  <img
                    src="https://i.ibb.co/yNyYC2s/Untitled-design-31-removebg-preview.png"
                    alt="views-icon"
                    className="w-12 h-12"
                  />
                </div>
                {/* Add more boxes here */}
                <div className="bg-purple-600 text-white p-6 rounded-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold">150</h2>
                    <h3>Likes</h3>
                  </div>
                  {/* Box icon (replace with your icon) */}
                  <img
                    src="https://i.ibb.co/gtsQXDD/14-removebg-preview.png"
                    alt="views-icon"
                    className="w-12 h-12"
                  />
                </div> 
                
                <div className="bg-purple-600 text-white p-6 rounded-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold">320</h2>
                    <h3>Comments</h3>
                  </div>
                  {/* Box icon (replace with your icon) */}
                  <img
                    src="https://i.ibb.co/mbs9ptT/Untitled-design-32-removebg-preview.png"
                    alt="views-icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className="bg-purple-600 text-white p-6 rounded-lg flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold">70</h2>
                    <h3>Published</h3>
                  </div>
                  {/* Box icon (replace with your icon) */}
                  <img
                    src="https://i.ibb.co/0mDDZMH/13-removebg-preview-1.png"
                    alt="views-icon"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>

            {/* Recent Articles Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-semibold text-purple-600">
                  Recent Articles
                </h1>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  View All
                </button>
              </div>
              {/* Article List */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Table headers */}
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th>Article</th>
                      <th>Views</th>
                      <th>Comments</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* Table rows */}
                  <tbody>
                    {/* Example row */}
                    <tr className="text-center">
                      <td>Article 73</td>
                      <td>99.9k</td>
                      <td>210</td>
                      <button className="mt-2 bg-green-500 text-white rounded-lg p-1 text-center">
                        Published
                      </button>
                    </tr>
                    {/* Add more rows here */}
                    <tr className="text-center">
                      <td>Article 74</td>
                      <td>89.9k</td>
                      <td>250</td>
                      <button className="mt-2 bg-green-500 text-white rounded-lg p-1 text-center">
                        Published
                      </button>
                    </tr>
                    <tr className="text-center">
                      <td>Article 75</td>
                      <td>27.9k</td>
                      <td>240</td>
                      <button className="mt-2 bg-green-500 text-white rounded-lg p-1 text-center">
                        Published
                      </button>
                    </tr>
                    <tr className="text-center">
                      <td>Article 76</td>
                      <td>28.9k</td>
                      <td>230</td>
                      <button className="mt-2 bg-green-500 text-white rounded-lg p-1 text-center">
                        Published
                      </button>
                    </tr>
                    <tr className="text-center">
                      <td>Article 77</td>
                      <td>29.9k</td>
                      <td>220</td>
                      <button className="mt-2 bg-green-500 text-white rounded-lg p-1 text-center">
                        Published
                      </button>
                    </tr>
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden fixed bottom-4 right-4">
          <img
            src="https://i.ibb.co/nDjvnsc/Untitled-design-30.png"
            alt="menu-icon"
            className="w-12 h-12 cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
