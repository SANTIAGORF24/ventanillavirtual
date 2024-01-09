"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Divider } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Team = () => {
  // import required modules

  return (
    <div className="flex items-center justify-center max-w-full">
      <div className="w-4/5 ">
        <h2 className="text-3xl font-bold py-10"> Team</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="flex items-center max-w-8xl">
                  <div className="flex justify-center">
                    <img
                      className="w-2/4 rounded-md"
                      src="./assets/img/portada.jpg"
                    />
                  </div>
                  <div className="flex-colum">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nulla.
                      </p>
                    </div>
                    <div className="flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Inspirador</h3>
                        <p>Santiago Ramírez Forero</p>
                      </div>
                      <div>
                        <div className="max-w-md">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-4 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="w-full rounded-md"
                      src="https://robohash.org/mac"
                    />
                  </div>
                  <div className="flex-colum">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nulla.
                      </p>
                    </div>
                    <div className="flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Transformador</h3>
                        <p>Macjainer Molano Ramos</p>
                      </div>
                      <div>
                        <div className="max-w-md">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-4 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="w-full rounded-md"
                      src="https://robohash.org/sora"
                    />
                  </div>
                  <div className="flex-colum">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nulla.
                      </p>
                    </div>
                    <div className="flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Innovador</h3>
                        <p>Sebastian Sora Pinto</p>
                      </div>
                      <div>
                        <div className="max-w-md">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-4 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-base bg-white flex justify-center items-center">
            <div>
              <Card className="p-5 flex items-center justify-center ">
                <div className="flex items-center max-w-8xl">
                  <div className="flex justify-center items-center">
                    <img
                      className="w-full rounded-md"
                      src="https://robohash.org/charles"
                    />
                  </div>
                  <div className="flex-colum">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nulla.
                      </p>
                    </div>
                    <div className="flex justify-between items-center p-10">
                      <div>
                        <h3 className="font-bold">CEO Colaborativo</h3>
                        <p>Carlos Enrrique Vargas</p>
                      </div>
                      <div>
                        <div className="max-w-md">
                          <div className="space-y-1">
                            <h4 className="text-medium font-medium">
                              Social Media
                            </h4>
                            <p className="text-small text-default-400">
                              No dudes en segirnos en nuestras redes
                            </p>
                          </div>
                          <Divider className="my-4" />
                          <div className="flex h-5 items-center space-x-4 text-small">
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/facebook.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/linked.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/twitter.png"}
                              ></img>
                            </div>
                            <Divider orientation="vertical" />
                            <div>
                              <img
                                className="phoneimg"
                                src={"assets/img/instagram.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
