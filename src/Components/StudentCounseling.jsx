import React from "react";

const StudentCounseling = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Student Counseling
        </h2>
        <p className="text-lg mb-4">
          Welcome to our student counseling service. We are here to help you
          with any academic, personal, or career-related concerns you may have
          during your academic journey.
        </p>
        <p className="text-lg mb-4">
          Our team of experienced counselors provides confidential support and
          guidance tailored to your individual needs. Whether you're struggling
          with coursework, facing personal challenges, or seeking advice on your
          career path, we're here to listen and assist you every step of the
          way.
        </p>
        <p className="text-lg mb-4">
          To schedule a counseling session, please contact our office or fill
          out the form below. We'll get back to you as soon as possible to
          arrange an appointment.
        </p>
        <div className="mt-8">
          {/* Insert form or contact information here */}
        </div>
      </div>

      {/* Alumni Portrait Image Columns */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Alumni Image Cards */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img
              src="https://www.iimcal.ac.in/sites/default/files/images/image-6.jpg"
              alt="Alumni 1"
              className="w-32 h-32 rounded-full mb-2"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Vipul Chandra</h2>
              <p className="text-sm mb-2">Alumni of IIM Calcutta</p>
              {/* <p>LTIMindtree appoints as CFO</p> */}
              <p className="text-m mb-2">
                Join our weekly student counseling session on Google Meet to
                discuss any concerns or questions you may have.
              </p>
              <div className="flex flex-row gap-7 text-sm justify-between">
                <span>Date: 23/04/24</span>
                <span>Time: 5:00 pm</span>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                  <a href="https://meet.google.com/khf-qqza-aof">
                    Join Google Meet
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img
              src="https://acr.iitm.ac.in/wp-content/gallery/csr-live-summit-iit-madras-official-knowledge-partner-on-september-29-2023/1S6A1262.JPG"
              alt="Alumni 2"
              className="w-32 h-32 rounded-full mb-2"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Rajesh Rajamani</h2>
              <p className="text-sm mb-2">Alumni of IIT Madras</p>
              <p className="text-m mb-2">
                Join our weekly student counseling session on Google Meet to
                discuss any concerns or questions you may have.
              </p>
              <div className="flex flex-row gap-7 text-sm justify-between">
                <span>Date: 23/04/24</span>
                <span>Time: 5:00 pm</span>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                  <a href="https://meet.google.com/khf-qqza-aof">
                    Join Google Meet
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img
              src="https://media.almabaseapp.com/281/alumsite/photo_gallery/5248/VJP_0428.JPG-3a8e20770f474f399741a7fca9f36fa4.JPG"
              alt="Alumni 3"
              className="w-32 h-32 rounded-full mb-2"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Shivakumar</h2>
              <p className="text-sm mb-2">Alumni of IIT (BHU)</p>
              <p className="text-m mb-2">
                Join our weekly student counseling session on Google Meet to
                discuss any concerns or questions you may have.
              </p>
              <div className="flex flex-row gap-7 text-sm justify-between">
                <span>Date: 23/04/24</span>
                <span>Time: 5:00 pm</span>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                  <a href="https://meet.google.com/khf-qqza-aof">
                    Join Google Meet
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCounseling;
