import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const item = useLoaderData();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  //console.log(item)
  const extractNumber = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0]);
  };
  let preTimeMinutes = extractNumber(item?.more.prep_time);
  let cockTimeMinutes = extractNumber(item?.more.cook_time);
  const totalTimeMinutes = preTimeMinutes + cockTimeMinutes;
  const instructionList = item?.instructions.split(/\d+\.\s/).filter(Boolean);
  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bd-eggshell mb-10">
      <article>
        <div className="bg-white md:my-[Screm] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item.thumbnail_image}
              alt="thumbnail_image"
              className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto"
            />
          </picture>
          <div className="px-8">
            <h1 className="text-4xl mt-12 text-secondary">{item.name}</h1>
            <p className="mt-6">
              Ipsum voluptua diam kasd invidunt ea invidunt kasd et, eirmod
              eirmod justo lorem diam labore invidunt et. Lorem stet kasd.
            </p>

            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h3 className="text-xl font-semibold ml-2">Preparation Time</h3>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-500">
                <li className="pl-3 ">
                  <p>
                    <span>Total:</span> <span>{totalTimeMinutes} minutes</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Preparation:</span>{" "}
                    <span>{item?.more.prep_time}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Cokking:</span> <span>{item?.more.cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>
            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Ingredients</h3>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{ingredient?.name}:</span>
                    <span> {ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
            <div className="mt-8">
              <h3 className="font-fancy text-3xl text-nutmeg">Instructions</h3>
              <ol className="marker:text-nutmeg marker:font-semibold marker:font-outfit list-decimal mt-4 ml-6">
                {instructionList.map((instruction, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <p>{instruction.trim()}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
