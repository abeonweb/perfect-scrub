import Image from "next/image";
import Link from "next/link";

const Facilities = () => {
  return (
    <main role="main">
      {/* Start of 'Facilities' Landing */}
      <section
        className="landing-section overflow-hidden flex flex-col md:flex-row pt-28 px-4 pl-6 lg:pt-16 lg:pl-32 bg-gradient-to-b from-blue-600 to-blue-900">
        <div className="lg:mt-20 lg:w-1/2">
          <h1 className="font-semibold text-md uppercase lg:text-2xl text-green-300 mb-8">Facilities</h1>
          <p className="font-semibold lg:w-5/6 text-3xl lg:text-4xl text-gray-50">Have confidence that you have the best team in
            your corner.</p>
        </div>
        {/* Facilities Overlapping Image */}
        <div className="h-80 mt-12 md:w-1/2 lg:h-full overflow-hidden lg:relative">
          <Image width={254} height={526} className="lg:absolute lg:-bottom-20 left-20 z-20 mx-auto" src="/about-us-image.png" alt="" />
          {/* Monogram Overlay */}
          <div className="ps-monogram-image object-cover w-100 h-80 absolute hidden lg:block lg:-bottom-5 lg:right-0 opacity-10 z-10" />
        </div>
      </section>


      {/* Start of Facilites*/}
      <section className="md:px-20 p-4 lg:py-18">
        <div className="flex flex-col gap-y-10 pt-10">
          <div className="max-w-prose font-plexSerif font-bold lg:mb-14">
            <p className="text-2xl leading-10 lg:text-3xl lg:mr-40 text-gray-700">We provide our services to a wide range of
              facilities and establishments.</p>
          </div>
          <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="place-self-center max-w-sm lg:block">
              <Image width={500} height={500} className="object-cover" src="/facilities/warehouse.jpg" alt="A warehouse" />
            </div>

            <div className="flex flex-col-reverse">
              <div className="m-0 lg:mt-10">
                <p className="text-gray-500 leading-loose mb-5">
                  As a business owner, you put a lot of work in to building your business. At Perfect Scrub Cleaning we know
                  that your facility is important to you. We specialize in the cleaning and maintenance of these facilities.
                </p>

              </div>
              <div className="hidden lg:block lg:gap-x-10">
                <Image width={500} height={500} className="object-cover" src="/facilities/bowling-alley.jpg" alt="A bowling alley" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg lg:text-2xl font-medium my-8 text-gray-600">
            Some of the facilities we serve include:
          </h2>
          <ul
            className="facilities grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-semibold gap-y-5 gap-x-3 lg:px-10 text-blue-800 lg:mt-20">
            <li className="facility-list-item">
              <Link className="facility-list-link" href="office-buildings-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/office-building.svg" alt="" />
                </span>
                <span>Office buildings</span>
              </Link>
            </li>
            <li className="facility-list-item">
              <Link className="facility-list-link" href="retail-stores-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/supermarket.svg" alt="" />
                </span>
                <span>Retail stores and shopping centers</span>
              </Link>
            </li>
            <li className="facility-list-item">
              <Link className="facility-list-link" href="day-care-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/day-care-center.svg" alt="" />
                </span>
                <span>Day Care and Preschool</span>
              </Link>
            </li>
            <li className="facility-list-item">
              <Link className="facility-list-link" href="school-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/university.svg" alt="" />
                </span>
                <span>Schools and universities</span>
              </Link>
            </li>
            <li className="facility-list-item">
              <Link className="facility-list-link" href="medical-office-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/hospital.svg" alt="" />
                </span>
                <span>Medical Offices and clinics</span>
              </Link>
            </li>
            <li className="facility-list-item">
              <Link className="facility-list-link" href="hotel-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/hotel.svg" alt="" />
                </span>
                <span>Hotels and resorts</span>
              </Link>
            </li>
            <li className="facility-list-item">
              <Link className="facility-list-link" href="recreational-facilities-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/gym.svg" alt="" />
                </span>
                <span>Sports and recreational facilities</span>
              </Link>
            </li>
            <li className="facility-list-item">
              <Link className="facility-list-link" href="post-construction-cleaning">
                <span>
                  <Image width={500} height={500} className="w-10" src="/construction.svg" alt="" />
                </span>
                <span>Post Construction Clean up</span>
              </Link></li>
          </ul>
        </div>
        <div className="max-w-prose">
          <div className="m-0 lg:mt-10">
            <p className="text-gray-500 leading-loose mb-5">
              Our services are designed to cater to the unique needs of each facility, ensuring a clean and well-maintained
              environment for both employees and visitors.
            </p>
            <p className="font-medium mb-8 text-gray-600">
              Please note that this is not an exhaustive list, and we are equipped to serve various other types of
              facilities as well. <Link href="/contact" className="text-blue-700">Talk to us</Link> about specific needs you may have for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Start of Small Steps */}
      <section className="flex flex-col px-4 py-16 justify-center bg-white">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <h2
            className="font-semibold text-2xl lg:text-4xl text-gray-700 px-1 py-5 mb-8 border-t-4 rounded-xl md:ml-8 self-center  border-b-8 border-green-500">
            Getting your <br />Perfect Scrub Clean <br /> is
            as EASY AS:
            {/* <span className="text-blue-600">1-2-3</span> */}
          </h2>
          <div className="lg:block mb-0 lg:-mb-16 w-1/2 self-center">
            <Image width={500} height={500} className="max-h-full object-cover" src="/man-holding-brush.png" alt="man holding a broom" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-6 lg:px-4 justify-center bg-white">
          <div
            className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-2 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
            <span className="text-center text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">#1</span>
            <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">Use our
              <Link className="text-blue-600 hover:underline" href="/quote"> get a quote</Link>
              form to inform us about your cleaning needs</span>
          </div>
          <div
            className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-2 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
            <span className="text-center text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">#2</span>
            <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">We will get in touch with you and process your
              cleaning request</span>
          </div>
          <div
            className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-2 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
            <span className="text-center text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">#3</span>
            <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">A cleaning crew will be at your location on
              your
              designated start date</span>
          </div>
        </div>
        <div className="py-6 mb-8 font-sans font-bold grid grid-col-1 lg:mb-20 pb-10">
          {/* <h2 className="font-sans text-4xl">A job well done is what we stand for</h2> */}
          <h2 className="font-sans text-4xl text-center mb-6">A job well done. That is our promise to you.</h2>
          <p className="font-plexSerif text-2xl lg:text-3xl lg:mr-2 mb-10 text-green-500 text-center">Our 100% SATISFACTION
            GUARANTEE</p>
          <p className="text-lg lg:text-2xl mb-20 m-auto text-gray-700 text-center">If you are not totally satisfied with
            our performance - we will clean it again, free.</p>
          <Link className="text-2xl py-4 px-8 m-auto text-white bg-green-600 hover:shadow-xl text-center no-underline 
            uppercase border-2 border-green-600 hover:bg-green-500 hover:border-green-500 scale-100 hover:scale-105 self-center cursor-pointer"
            href="/contact">contact us</Link>
        </div>
      </section>

    </main>
  )
}

export default Facilities;