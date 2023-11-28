import React from "react";

const About1 = () => {
  return (
    <div className="bg-gradient-to-b from-red-600 via-red-400 to-red-200 text-white">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-200 ">
              Located in the heart of Chennai city, the sprawling campus of the
              College of Engineering, Guindy (CEG) with cutting edge
              infrastructure has been the foundation for many a successful
              engineer, scholar, and leader. The University offers 10
              UG(Regular), 2 UG(Tamil Medium), 4 UG(Self-Supporting), 3 UG(Part
              time), 34 PG(Regular), 20 PG(Self-supporting) and 3 PG(Part time)
              courses. CEG has 17 Departments and 17 Research Centres where
              research programs are offered. With close ties with industry,
              excellent research practices and multiple extra-curricular
              options, the institution advances the progression of the student's
              quest for knowledge. The faculty along with the excellent student
              population makes the campus one of the best places to study in the
              nation.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full border rounded-3xl"
              src="../about/red_building2.jpg"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-200 ">
              CEG was established in May of 1794, as a School of Survey with one
              student in a building near Fort St. George. Founded by Michael
              Topping, the school became the Civil Engineering School in 1858.
              Subsequently, CEG was established as a college in 1859 under the
              Madras University. It was then rechristened as College of
              Engineering in 1861 with the inclusion of the Mechanical
              Engineering course.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <img
              src="../about/old_red.jpg"
              className="w-full h-full border rounded-3xl"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
