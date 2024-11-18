"use client";
import Image from "next/image";
import Hr from "./hr";
import ImageEdgeBlue from "./image-edge-blue";
import CutCorners from "./ui/cut-corners";

export default function HunterChangesUnique({
  name,
  imgSmall,
  imgBig,
  description,
  notes,
  changes
}) {
  const testData = Array(5).fill(0);

  return (
    <div className="mb-8 w-10/12">
      <h1 className="patch-notes-subtitle lg:text-4xl">Hunter Changes</h1>

      <div className="relative flex flex-col border-4 p-4 lg:flex-row">
        <CutCorners />

        <div className="mb-8 flex lg:mb-0">
          <div className="relative mr-5 h-full">
            <ImageEdgeBlue />

            {/* <Image
              src={imgSmall}
              className="relative z-10 lg:hidden"
              width={100}
              height={100}
              alt="hunter small image"
            /> */}

            {/* <Image
              src={imgBig}
              className="sticky top-[150px] z-10 hidden min-w-[175px] lg:block"
              width={175}
              height={100}
              alt="hunter big image"
            /> */}

            <div className="absolute -bottom-[5px] -left-[12px] hidden h-[30px] w-[45px] rotate-45 flex-col lg:flex">
              <div className="w-full flex-1 bg-transparent"></div>
              <div className="z-[9999] h-5 w-full"></div>
              <div className="z-20 h-1/2 w-full bg-ui-dark-purple blur-[3px]"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl">
              {/* {name} */}
            </h2>

            <h2 className="mb-6 text-sm text-neutral-300 md:text-base lg:text-xl">
              {/* {description} */}
            </h2>

            <div className="hidden lg:block">
              <p className="mb-5">{/* {notes} */}</p>

              <Hr className="mx-auto mb-8 w-11/12" />

              {testData.map((i, n) => {
                return (
                  <div key={n} className="mb-5 flex flex-col">
                    <div className="mb-3 flex items-center">
                      <Image
                        src={"/patch-notes/balance-team-icon.png"}
                        className="mr-2 bg-white p-2"
                        width={60}
                        height={60}
                        layout="intrinsic"
                        alt="ability icon"
                      />
                      <h2 className="font-bold">R - Full Bore</h2>
                    </div>

                    <ul className="list-disc pl-6">
                      <li>
                        <div className="items-cen flex">
                          <p className="mr-2">Damage: 200</p>
                          <Image
                            src={"/patch-notes/right-arrow.png"}
                            className="mr-2"
                            width={20}
                            height={20}
                            layout="intrinsic"
                            alt="right arrow"
                          />
                          <p>300</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <p className="mr-2">Width: 150</p>
                          <Image
                            src={"/patch-notes/right-arrow.png"}
                            className="mr-2"
                            width={20}
                            height={20}
                            layout="intrinsic"
                            alt="right arrow"
                          />
                          <p>300</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <p className="mb-5">
            &#34; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            sit amet neque velit. Nam tempus tincidunt purus vitae posuere.
            Aliquam ultricies vulputate cursus. Curabitur non odio accumsan,
            sagittis ligula et, lobortis tellus. In pulvinar libero magna, quis
            tristique turpis maximus ac. &#34;
          </p>

          <Hr className="mx-auto mb-8" />

          {testData.map((i, n) => {
            return (
              <div key={n} className="mb-5 ml-2 flex flex-col md:ml-5">
                <div className="mb-3 flex items-center">
                  <Image
                    src={"/patch-notes/balance-team-icon.png"}
                    className="mr-2 bg-white p-2"
                    width={60}
                    height={60}
                    layout="intrinsic"
                    alt="ability icon"
                  />
                  <h2 className="font-bold">R - Full Bore</h2>
                </div>

                <ul className="list-disc pl-6">
                  <li>
                    <div className="items-cen flex">
                      <p className="mr-2">Damage: 200</p>
                      <Image
                        src={"/patch-notes/right-arrow.png"}
                        className="mr-2"
                        width={20}
                        height={20}
                        layout="intrinsic"
                        alt="right arrow"
                      />
                      <p>300</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <p className="mr-2">Width: 150</p>
                      <Image
                        src={"/patch-notes/right-arrow.png"}
                        className="mr-2"
                        width={20}
                        height={20}
                        layout="intrinsic"
                        alt="right arrow"
                      />
                      <p>300</p>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}

          {/* <div className="flex flex-col">
            <div className="mb-3 flex items-center">
              <Image
                src={"/patch-notes/balance-team-icon.png"}
                className="mr-2 bg-white p-2"
                width={60}
                height={60}
                layout="intrinsic"
                alt="ability icon"
              />
              <h2 className="font-bold">R - Full Bore</h2>
            </div>

            <ul className="list-disc pl-6">
              <li>
                <div className="items-cen flex">
                  <p className="mr-2">Damage: 200</p>
                  <Image
                    src={"/patch-notes/right-arrow.png"}
                    className="mr-2"
                    width={20}
                    height={20}
                    layout="intrinsic"
                    alt="right arrow"
                  />
                  <p>300</p>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <p className="mr-2">Width: 150</p>
                  <Image
                    src={"/patch-notes/right-arrow.png"}
                    className="mr-2"
                    width={20}
                    height={20}
                    layout="intrinsic"
                    alt="right arrow"
                  />
                  <p>300</p>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
